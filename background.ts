// ChallengeHub: Background script for managing problem-solving and user interactions

import { getDifficulty, getHyperTortureMode, resetHyperTortureStreak, storage } from "storage"

import {
  getAllLeetCodeProblems,
} from "~leetcodeProblems"
import type { APILeetCodeProblem, JSONLeetCodeProblem, UserState } from "~types"

const LEETCODE_URL = "https://leetcode.com"
const RULE_ID = 1
const isLeetCodeUrl = (url: string) => url.includes(LEETCODE_URL)

const isSubmissionSuccessURL = (url: string) =>
  url.includes("/submissions/detail/") && url.includes("/check/")

const sendUserSolvedMessage = (languageUsed: string) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "userSolvedProblem",
      language: languageUsed
    })
  })
}

const sendUserFailedMessage = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "userFailedProblem"
    })
  })
}

const state: UserState = {
  leetcodeProblemSolved: false,
  leetCodeProblem: {
    url: null,
    name: null
  },
  lastSubmissionDate: new Date(0),
  solvedListenerActive: false,
  lastAttemptedUrl: null,
  urlListener: null,
  includePremium: null,
  hyperTortureMode: null,
  HTcurrentStreak: null
}

export async function getProblemListFromLeetCodeAPI(
  difficulty: string,
  problemSet: string
): Promise<APILeetCodeProblem[]> {
  try {
    const query = `
      query problemsetQuestionList {
        problemsetQuestionList: questionList(
          categorySlug: ""
          limit: -1
          skip: 0
          filters: {
            ${
              difficulty && difficulty !== "all"
                ? "difficulty: " + difficulty
                : ""
            }
            ${problemSet?.length ? "listId: " + '"' + problemSet + '"' : ""}
          }
        ) {
          questions: data {
            acRate
            difficulty
            freqBar
            frontendQuestionId: questionFrontendId
            isFavor
            paidOnly: isPaidOnly
            status
            title
            titleSlug
            topicTags {
              name
              id
              slug
            }
            hasSolution
            hasVideoSolution
          }
        }
      }
    `

    const body = {
      query
    }

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const responseData = await response.json()
    await storage.updatePermissions(true)

    return responseData.data.problemsetQuestionList.questions
  } catch (error) {
    console.log(error.toString())
    if (
      error.message.includes("NetworkError") ||
      error.message.includes("CORS") ||
      error.message === "Network response was not ok"
    ) {
      console.log("CORS error detected.")
      await storage.updatePermissions(false)
    }
    return undefined
  }
}

export const handleAdditionalProblemRedirect = async (problemUrl: string) => {
  if (await storage.getEnableRedirectOnEveryProblem())
    await setRedirectRule(problemUrl)
}

export async function generateRandomProblem(difficulty: string): Promise<{
  url: string;
  name: string;
}> {
  try {
    const problemSet = await storage.getProblemSet();
    const selectedDifficulty = difficulty || await storage.getDifficulty(); // Get difficulty from storage if not provided

    if (problemSet.startsWith("codeforces")) {
      const problems = await getCodeforcesProblems(selectedDifficulty);
      const randomProblem = problems[Math.floor(Math.random() * problems.length)];
      return { url: randomProblem.url, name: randomProblem.name };
    } else {
      // Existing logic for LeetCode problems
      if (problemSet === "all" || problemSet.startsWith("lg")) {
        await storage.initiateLoading();
        return await getAllLeetCodeProblems(selectedDifficulty, problemSet);
      } else {
        return await getLeetCodeProblemFromProblemSet(selectedDifficulty, problemSet);
      }
    }
  } catch (error) {
    console.error("Error generating random problem", error);
    return undefined;
  } finally {
    await storage.stopLoading();
  }
}

function onMessageReceived(
  message: any,
  sender: chrome.runtime.MessageSender,
  sendResponse: (response?: any) => void
): void {
  switch (message.action) {
    case "fetchingProblem":
      console.log("Fetching problem started.");
      break;
    case "problemFetched":
      console.log("Fetching problem completed.");
      break;
    case "getProblemStatus":
      sendResponse({
        problemSolved: state.leetcodeProblemSolved,
        problem: state.leetCodeProblem
      });
      break;
    case "userClickedSubmit":
      state.lastSubmissionDate = new Date();
      state.solvedListenerActive = true;
      console.log("User clicked submit, adding listener", state.solvedListenerActive);
      break;
    default:
      console.warn("Unknown message action:", message.action);
  }
}

async function setRedirectRule(redirectUrl: string) {
  const redirectRule = {
    id: RULE_ID,
    priority: 1,
    action: {
      type: "redirect",
      redirect: { url: redirectUrl }
    },
    condition: {
      urlFilter: "*://*/*",
      excludedInitiatorDomains: [
        "leetcode.com",
        "www.leetcode.com",
        "developer.chrome.com"
      ],

      resourceTypes: ["main_frame"]
    }
  }

  try {
    chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [RULE_ID],
      addRules: [redirectRule as chrome.declarativeNetRequest.Rule]
    })
    console.log("Redirect rule updated")
  } catch (error) {
    console.error("Error updating redirect rule:", error)
  }
}

export const updateProblemState = async (problem: {
  name: string
  url: string
}) => {
  await storage.updateProblem(problem, state.leetcodeProblemSolved)
}

export const updateStorage = async (difficulty: string) => {
  try {
    const isRedirectEnabled = await storage.getEnableRedirectOnEveryProblem()
    const selectedDifficulty = difficulty || await storage.getDifficulty()
    let problem = await generateRandomProblem(selectedDifficulty)
    state.leetcodeProblemSolved = false
    updateProblemState(problem)
    if (!state.leetcodeProblemSolved && isRedirectEnabled)
      await setRedirectRule(problem.url)
  } catch (error) {
    throw new Error("Error generating random problem: " + error)
  }
}

const checkIfUserSolvedProblem = async (
  details: chrome.webRequest.WebResponseCacheDetails
) => {
  // If the user has already solved the problem, then don't do anything
  if (await storage.getProblemSolved()) return
  // Get the current active tab's URL
  let currentURL = ""
  try {
    const [activeTab] = await new Promise<chrome.tabs.Tab[]>((resolve) => {
      chrome.tabs.query({ active: true, currentWindow: true }, resolve)
    })

    currentURL = activeTab.url
  } catch (error) {
    console.error("Error getting active tab:", error)
    return
  }

  const problemUrl = await storage.getProblemUrl()

  const sameUrl =
    problemUrl === currentURL || problemUrl + "description/" === currentURL

  if (!sameUrl) {
    return
  }

  //lastCheckedUrl = details.url
  //lastCheckedTimestamp = now

  if (state.solvedListenerActive) {
    // Remove the listener so that it doesn't fire again, since the outcome will either be success or fail
    // And we'll add it again when the user clicks submit
    state.solvedListenerActive = false
    chrome.webRequest.onCompleted.removeListener(checkIfUserSolvedProblem)
  }

  if (isSubmissionSuccessURL(details.url)) {
    try {
      const hyperTortureMode = await getHyperTortureMode()
      const response = await fetch(details.url)
      const data = await response.json()
      if (data.state === "STARTED" || data.state === "PENDING") {
        if (!state.solvedListenerActive) {
          state.solvedListenerActive = true
          chrome.webRequest.onCompleted.addListener(checkIfUserSolvedProblem, {
            urls: ["*://leetcode.com/submissions/detail/*/check/"]
          })
        }
        return
      }
      if (data.status_msg !== "Accepted") {
        if (hyperTortureMode) {
          await resetHyperTortureStreak()
          sendUserFailedMessage()
        }
        return
      }
      if (
        data.status_msg === "Accepted" &&
        data.state === "SUCCESS" &&
        !data.code_answer
      ) {
        await storage.updateStreak()
        state.leetcodeProblemSolved = true
        chrome.declarativeNetRequest.updateDynamicRules({
          removeRuleIds: [RULE_ID]
        })
        chrome.webRequest.onCompleted.removeListener(checkIfUserSolvedProblem)
        if (hyperTortureMode) {
          console.log("Hyper torture mode is enabled")
          if (state.lastAttemptedUrl) {
            chrome.tabs.update({ url: state.lastAttemptedUrl })
          }
          await updateStorage(await getDifficulty())
        } else {
          sendUserSolvedMessage(data?.lang || "unknown")
        }
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }
}

async function tryResetStreak() {
  const lastCompletion = await storage.getLastCompletion()
  const yesterday = new Date().getDate() - 1
  if (lastCompletion.getDate() < yesterday) {
    await storage.resetStreak()
    return true
  }
  return false
}

export async function toggleUrlListener(toggle: boolean): Promise<void> {
  if (toggle) {
    // Save users request url for further redirect
    // Save users request url for further redirect
    state.urlListener = (details: chrome.webRequest.WebRequestBodyDetails) => {
      if (
        !isLeetCodeUrl(details.url) &&
        details.type === "main_frame" &&
        !details.url.includes("chrome-extension:")
      ) {
        state.lastAttemptedUrl = details.url
      }
      return null // return null when no BlockingResponse is needed
    }

    chrome.webRequest.onBeforeRequest.addListener(state.urlListener, {
      urls: ["<all_urls>"]
    })
  } else {
    chrome.webRequest.onBeforeRequest.removeListener(state.urlListener)
  }
}
export async function handleRedirectRule() {
  const isRedirectEnabled = await storage.getEnableRedirectOnEveryProblem()
  if (isRedirectEnabled) {
    const problemUrl = await storage.getProblemUrl()
    await setRedirectRule(problemUrl)
  } else {
    try {
      chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [RULE_ID]
      })
      console.log("Redirect rule removed")
    } catch (error) {
      console.error("Error removing redirect rule:", error)
    }
  }
}
const getMsUntilMidnight = () => {
  const currentTime = Date.now()
  const midnight = new Date()
  midnight.setHours(24, 0, 0, 0)
  return midnight.getTime() - currentTime
}

chrome.runtime.onInstalled.addListener(async () => {
  await updateStorage(await getDifficulty())
  await tryResetStreak()
  await toggleUrlListener(await getHyperTortureMode())
})

chrome.alarms.get("midnightAlarm", (alarm) => {
  if (alarm) return
  const msUntilMidnight = getMsUntilMidnight()
  const oneDayInMinutes = 60 * 24
  chrome.alarms.create("midnightAlarm", {
    when: Date.now() + msUntilMidnight,
    periodInMinutes: oneDayInMinutes
  })
})

chrome.alarms.onAlarm.addListener(async (alarm) => {
  await updateStorage(await getDifficulty())
  await tryResetStreak()
})

// Need to add these listeners to global scope so that when the workers become inactive, they are set again
chrome.runtime.onMessage.addListener(onMessageReceived)

export async function getCodeforcesProblems(difficulty: string) {
  try {
    const response = await fetch("https://codeforces.com/api/problemset.problems");
    const data = await response.json();
    if (data.status === "OK") {
      return data.result.problems
        .filter(problem => {
          // Exclude contests A, B, and C
          const excludedContests = ["A", "B", "C"];
          const isExcluded = excludedContests.includes(problem.contestId);
          
          if (isExcluded) return false;

          if (difficulty === "easy") {
            return problem.rating && problem.rating <= 1200; // Example threshold for easy
          } else if (difficulty === "medium") {
            return problem.rating && problem.rating > 1200 && problem.rating <= 1600; // Example threshold for medium
          } else if (difficulty === "hard") {
            return problem.rating && problem.rating > 1600; // Example threshold for hard
          }
          return true; // If no difficulty is specified, return all problems
        })
        .map(problem => ({
          name: problem.name,
          url: `https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`,
          difficulty: problem.rating || "Unrated",
        }));
    }
  } catch (error) {
    console.error("Error fetching Codeforces problems:", error);
  }
}

export { generateRandomProblem as generateRandomLeetCodeProblem };

export async function getLeetCodeProblemFromProblemSet(
  difficulty: string,
  problemSet: string
) {
  try {
    const includePremium = await storage.getIncludePremium();
    
    const problemSetURLs: Record<string, string> = {
      allNeetcode: "leetcode-problems/allProblems.json",
      NeetCode150: "leetcode-problems/neetCode150Problems.json",
      Blind75: "leetcode-problems/blind75Problems.json",
      metaTop100: "leetcode-problems/metaTop100.json"
    };

    if (!problemSetURLs[problemSet]) {
      throw new Error(`Invalid problem set: ${problemSet}`);
    }

    const res = await fetch(chrome.runtime.getURL(problemSetURLs[problemSet]));
    const leetCodeProblems: JSONLeetCodeProblem[] = await res.json();
    
    const filteredLeetCodeProblems: JSONLeetCodeProblem[] =
      leetCodeProblems.filter((problem) => {
        if (!problem.href.endsWith("/")) {
          problem.href += "/";
        }
        return (
          (includePremium || !problem.isPremium) &&
          (difficulty == "all" ||
            problem.difficulty.toLowerCase() === difficulty.toLowerCase())
        );
      });

    let randomIndex = Math.floor(Math.random() * filteredLeetCodeProblems.length);
    const randomProblem = filteredLeetCodeProblems[randomIndex];
    const randomProblemURL = randomProblem.href;
    const randomProblemName = randomProblem.text;
    return { url: randomProblemURL, name: randomProblemName };
  } catch (error) {
    console.error(error);
  }
}

export const fetchLeetCodeProblems = async (difficulty: string, problemSet: string) => {
  try {
    const problems = await getAllLeetCodeProblems(difficulty, problemSet);
    // Process the problems as needed
    return problems;
  } catch (error) {
    console.error("Error fetching LeetCode problems:", error);
    throw error; // Rethrow the error for further handling
  }
};

export const fetchProblemFromSet = async (difficulty: string, problemSet: string) => {
  try {
    const problem = await getLeetCodeProblemFromProblemSet(difficulty, problemSet);
    return problem;
  } catch (error) {
    console.error("Error fetching problem from set:", error);
    throw error; // Rethrow the error for further handling
  }
};
