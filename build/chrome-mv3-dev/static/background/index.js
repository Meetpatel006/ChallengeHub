(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hoXgh":[function(require,module,exports) {
var u = globalThis.process?.argv || [];
var h = ()=>globalThis.process?.env || {};
var B = new Set(u), _ = (e)=>B.has(e), G = u.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var U = _("--dry-run"), g = ()=>_("--verbose") || h().VERBOSE === "true", N = g();
var m = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var y = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>m("\uD83D\uDD35 INFO", ...e), f = (...e)=>m("\uD83D\uDFE0 WARN", ...e), M = 0, i = (...e)=>g() && m(`\u{1F7E1} ${M++}`, ...e);
var b = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "C:\\Users\\hites\\Desktop\\Coding\\Code Tuor\\.plasmo\\static\\background\\index.ts",
    "bundleId": "c338908e704c91f1",
    "envHash": "d99a5ffa57acd638",
    "verbose": "false",
    "secure": false,
    "serverPort": 1012
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function H(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = H;
module.bundle.hotData = {};
var c = globalThis.browser || globalThis.chrome || null;
function R() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function x() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function d() {
    return n.port || location.port;
}
var P = "__plasmo_runtime_page_", S = "__plasmo_runtime_script_";
var O = `${n.secure ? "https" : "http"}://${R()}:${d()}/`;
async function k(e = 1470) {
    for(;;)try {
        await fetch(O);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (c.runtime.getManifest().manifest_version === 3) {
    let e = c.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function E(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function C(e = d()) {
    let t = x();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function L(e) {
    typeof e.message == "string" && y("[plasmo/parcel-runtime]: " + e.message);
}
function T(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C(Number(d()) + 1));
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        await e(s);
    }), t.addEventListener("error", L), t;
}
function A(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let l = r.codeframe || r.stack;
            f("[plasmo/parcel-runtime]: " + r.message + `
` + l + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", L), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        f(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function p(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await c?.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        c.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    b();
    let e = A(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>E(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((l)=>l.id)), r = Object.values(o.depsByBundle).map((l)=>Object.values(l)).flat();
            a.bgChanged ||= r.every((l)=>s.has(l));
        }
        p();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await k(), p(!0);
    });
}
T(async (e)=>{
    switch(i("BGSW Runtime - On Build Repackaged"), e.type){
        case "build_ready":
            a.buildReady ||= !0, p();
            break;
        case "cs_changed":
            a.csChanged ||= !0, p();
            break;
    }
});
c.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(P), o = e.name.startsWith(S);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), p();
        });
    }
});
c.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), p()), !0;
});

},{}],"8oeFb":[function(require,module,exports) {
var _background = require("../../../background");

},{"../../../background":"14rpM"}],"14rpM":[function(require,module,exports) {
// ChallengeHub: Background script for managing problem-solving and user interactions
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getProblemListFromLeetCodeAPI", ()=>getProblemListFromLeetCodeAPI);
parcelHelpers.export(exports, "handleAdditionalProblemRedirect", ()=>handleAdditionalProblemRedirect);
parcelHelpers.export(exports, "generateRandomProblem", ()=>generateRandomProblem);
parcelHelpers.export(exports, "updateProblemState", ()=>updateProblemState);
parcelHelpers.export(exports, "updateStorage", ()=>updateStorage);
parcelHelpers.export(exports, "toggleUrlListener", ()=>toggleUrlListener);
parcelHelpers.export(exports, "handleRedirectRule", ()=>handleRedirectRule);
parcelHelpers.export(exports, "getCodeforcesProblems", ()=>getCodeforcesProblems);
parcelHelpers.export(exports, "generateRandomLeetCodeProblem", ()=>generateRandomProblem);
parcelHelpers.export(exports, "getLeetCodeProblemFromProblemSet", ()=>getLeetCodeProblemFromProblemSet);
parcelHelpers.export(exports, "fetchLeetCodeProblems", ()=>fetchLeetCodeProblems);
parcelHelpers.export(exports, "fetchProblemFromSet", ()=>fetchProblemFromSet);
var _storage = require("storage");
var _leetcodeProblems = require("~leetcodeProblems");
const LEETCODE_URL = "https://leetcode.com";
const RULE_ID = 1;
const isLeetCodeUrl = (url)=>url.includes(LEETCODE_URL);
const isSubmissionSuccessURL = (url)=>url.includes("/submissions/detail/") && url.includes("/check/");
const sendUserSolvedMessage = (languageUsed)=>{
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "userSolvedProblem",
            language: languageUsed
        });
    });
};
const sendUserFailedMessage = ()=>{
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: "userFailedProblem"
        });
    });
};
const state = {
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
};
async function getProblemListFromLeetCodeAPI(difficulty, problemSet) {
    try {
        const query = `
      query problemsetQuestionList {
        problemsetQuestionList: questionList(
          categorySlug: ""
          limit: -1
          skip: 0
          filters: {
            ${difficulty && difficulty !== "all" ? "difficulty: " + difficulty : ""}
            ${problemSet?.length ? 'listId: "' + problemSet + '"' : ""}
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
    `;
        const body = {
            query
        };
        const response = await fetch("https://leetcode.com/graphql", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const responseData = await response.json();
        await (0, _storage.storage).updatePermissions(true);
        return responseData.data.problemsetQuestionList.questions;
    } catch (error) {
        console.log(error.toString());
        if (error.message.includes("NetworkError") || error.message.includes("CORS") || error.message === "Network response was not ok") {
            console.log("CORS error detected.");
            await (0, _storage.storage).updatePermissions(false);
        }
        return undefined;
    }
}
const handleAdditionalProblemRedirect = async (problemUrl)=>{
    if (await (0, _storage.storage).getEnableRedirectOnEveryProblem()) await setRedirectRule(problemUrl);
};
async function generateRandomProblem(difficulty) {
    try {
        const problemSet = await (0, _storage.storage).getProblemSet();
        const selectedDifficulty = difficulty || await (0, _storage.storage).getDifficulty(); // Get difficulty from storage if not provided
        if (problemSet.startsWith("codeforces")) {
            const problems = await getCodeforcesProblems(selectedDifficulty);
            const randomProblem = problems[Math.floor(Math.random() * problems.length)];
            return {
                url: randomProblem.url,
                name: randomProblem.name
            };
        } else {
            // Existing logic for LeetCode problems
            if (problemSet === "all" || problemSet.startsWith("lg")) {
                await (0, _storage.storage).initiateLoading();
                return await (0, _leetcodeProblems.getAllLeetCodeProblems)(selectedDifficulty, problemSet);
            } else return await getLeetCodeProblemFromProblemSet(selectedDifficulty, problemSet);
        }
    } catch (error) {
        console.error("Error generating random problem", error);
        return undefined;
    } finally{
        await (0, _storage.storage).stopLoading();
    }
}
function onMessageReceived(message, sender, sendResponse) {
    switch(message.action){
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
async function setRedirectRule(redirectUrl) {
    const redirectRule = {
        id: RULE_ID,
        priority: 1,
        action: {
            type: "redirect",
            redirect: {
                url: redirectUrl
            }
        },
        condition: {
            urlFilter: "*://*/*",
            excludedInitiatorDomains: [
                "leetcode.com",
                "www.leetcode.com",
                "developer.chrome.com"
            ],
            resourceTypes: [
                "main_frame"
            ]
        }
    };
    try {
        chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: [
                RULE_ID
            ],
            addRules: [
                redirectRule
            ]
        });
        console.log("Redirect rule updated");
    } catch (error) {
        console.error("Error updating redirect rule:", error);
    }
}
const updateProblemState = async (problem)=>{
    await (0, _storage.storage).updateProblem(problem, state.leetcodeProblemSolved);
};
const updateStorage = async (difficulty)=>{
    try {
        const isRedirectEnabled = await (0, _storage.storage).getEnableRedirectOnEveryProblem();
        const selectedDifficulty = difficulty || await (0, _storage.storage).getDifficulty();
        let problem = await generateRandomProblem(selectedDifficulty);
        state.leetcodeProblemSolved = false;
        updateProblemState(problem);
        if (!state.leetcodeProblemSolved && isRedirectEnabled) await setRedirectRule(problem.url);
    } catch (error) {
        throw new Error("Error generating random problem: " + error);
    }
};
const checkIfUserSolvedProblem = async (details)=>{
    // If the user has already solved the problem, then don't do anything
    if (await (0, _storage.storage).getProblemSolved()) return;
    // Get the current active tab's URL
    let currentURL = "";
    try {
        const [activeTab] = await new Promise((resolve)=>{
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, resolve);
        });
        currentURL = activeTab.url;
    } catch (error) {
        console.error("Error getting active tab:", error);
        return;
    }
    const problemUrl = await (0, _storage.storage).getProblemUrl();
    const sameUrl = problemUrl === currentURL || problemUrl + "description/" === currentURL;
    if (!sameUrl) return;
    //lastCheckedUrl = details.url
    //lastCheckedTimestamp = now
    if (state.solvedListenerActive) {
        // Remove the listener so that it doesn't fire again, since the outcome will either be success or fail
        // And we'll add it again when the user clicks submit
        state.solvedListenerActive = false;
        chrome.webRequest.onCompleted.removeListener(checkIfUserSolvedProblem);
    }
    if (isSubmissionSuccessURL(details.url)) try {
        const hyperTortureMode = await (0, _storage.getHyperTortureMode)();
        const response = await fetch(details.url);
        const data = await response.json();
        if (data.state === "STARTED" || data.state === "PENDING") {
            if (!state.solvedListenerActive) {
                state.solvedListenerActive = true;
                chrome.webRequest.onCompleted.addListener(checkIfUserSolvedProblem, {
                    urls: [
                        "*://leetcode.com/submissions/detail/*/check/"
                    ]
                });
            }
            return;
        }
        if (data.status_msg !== "Accepted") {
            if (hyperTortureMode) {
                await (0, _storage.resetHyperTortureStreak)();
                sendUserFailedMessage();
            }
            return;
        }
        if (data.status_msg === "Accepted" && data.state === "SUCCESS" && !data.code_answer) {
            await (0, _storage.storage).updateStreak();
            state.leetcodeProblemSolved = true;
            chrome.declarativeNetRequest.updateDynamicRules({
                removeRuleIds: [
                    RULE_ID
                ]
            });
            chrome.webRequest.onCompleted.removeListener(checkIfUserSolvedProblem);
            if (hyperTortureMode) {
                console.log("Hyper torture mode is enabled");
                if (state.lastAttemptedUrl) chrome.tabs.update({
                    url: state.lastAttemptedUrl
                });
                await updateStorage(await (0, _storage.getDifficulty)());
            } else sendUserSolvedMessage(data?.lang || "unknown");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};
async function tryResetStreak() {
    const lastCompletion = await (0, _storage.storage).getLastCompletion();
    const yesterday = new Date().getDate() - 1;
    if (lastCompletion.getDate() < yesterday) {
        await (0, _storage.storage).resetStreak();
        return true;
    }
    return false;
}
async function toggleUrlListener(toggle) {
    if (toggle) {
        // Save users request url for further redirect
        // Save users request url for further redirect
        state.urlListener = (details)=>{
            if (!isLeetCodeUrl(details.url) && details.type === "main_frame" && !details.url.includes("chrome-extension:")) state.lastAttemptedUrl = details.url;
            return null // return null when no BlockingResponse is needed
            ;
        };
        chrome.webRequest.onBeforeRequest.addListener(state.urlListener, {
            urls: [
                "<all_urls>"
            ]
        });
    } else chrome.webRequest.onBeforeRequest.removeListener(state.urlListener);
}
async function handleRedirectRule() {
    const isRedirectEnabled = await (0, _storage.storage).getEnableRedirectOnEveryProblem();
    if (isRedirectEnabled) {
        const problemUrl = await (0, _storage.storage).getProblemUrl();
        await setRedirectRule(problemUrl);
    } else try {
        chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: [
                RULE_ID
            ]
        });
        console.log("Redirect rule removed");
    } catch (error) {
        console.error("Error removing redirect rule:", error);
    }
}
const getMsUntilMidnight = ()=>{
    const currentTime = Date.now();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    return midnight.getTime() - currentTime;
};
chrome.runtime.onInstalled.addListener(async ()=>{
    await updateStorage(await (0, _storage.getDifficulty)());
    await tryResetStreak();
    await toggleUrlListener(await (0, _storage.getHyperTortureMode)());
});
chrome.alarms.get("midnightAlarm", (alarm)=>{
    if (alarm) return;
    const msUntilMidnight = getMsUntilMidnight();
    const oneDayInMinutes = 1440;
    chrome.alarms.create("midnightAlarm", {
        when: Date.now() + msUntilMidnight,
        periodInMinutes: oneDayInMinutes
    });
});
chrome.alarms.onAlarm.addListener(async (alarm)=>{
    await updateStorage(await (0, _storage.getDifficulty)());
    await tryResetStreak();
});
// Need to add these listeners to global scope so that when the workers become inactive, they are set again
chrome.runtime.onMessage.addListener(onMessageReceived);
async function getCodeforcesProblems(difficulty) {
    try {
        const response = await fetch("https://codeforces.com/api/problemset.problems");
        const data = await response.json();
        if (data.status === "OK") return data.result.problems.filter((problem)=>{
            // Exclude contests A, B, and C
            const excludedContests = [
                "A",
                "B",
                "C"
            ];
            const isExcluded = excludedContests.includes(problem.contestId);
            if (isExcluded) return false;
            if (difficulty === "easy") return problem.rating && problem.rating <= 1200; // Example threshold for easy
            else if (difficulty === "medium") return problem.rating && problem.rating > 1200 && problem.rating <= 1600; // Example threshold for medium
            else if (difficulty === "hard") return problem.rating && problem.rating > 1600; // Example threshold for hard
            return true; // If no difficulty is specified, return all problems
        }).map((problem)=>({
                name: problem.name,
                url: `https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`,
                difficulty: problem.rating || "Unrated"
            }));
    } catch (error) {
        console.error("Error fetching Codeforces problems:", error);
    }
}
async function getLeetCodeProblemFromProblemSet(difficulty, problemSet) {
    try {
        const includePremium = await (0, _storage.storage).getIncludePremium();
        const problemSetURLs = {
            allNeetcode: "leetcode-problems/allProblems.json",
            NeetCode150: "leetcode-problems/neetCode150Problems.json",
            Blind75: "leetcode-problems/blind75Problems.json",
            metaTop100: "leetcode-problems/metaTop100.json"
        };
        if (!problemSetURLs[problemSet]) throw new Error(`Invalid problem set: ${problemSet}`);
        const res = await fetch(chrome.runtime.getURL(problemSetURLs[problemSet]));
        const leetCodeProblems = await res.json();
        const filteredLeetCodeProblems = leetCodeProblems.filter((problem)=>{
            if (!problem.href.endsWith("/")) problem.href += "/";
            return (includePremium || !problem.isPremium) && (difficulty == "all" || problem.difficulty.toLowerCase() === difficulty.toLowerCase());
        });
        let randomIndex = Math.floor(Math.random() * filteredLeetCodeProblems.length);
        const randomProblem = filteredLeetCodeProblems[randomIndex];
        const randomProblemURL = randomProblem.href;
        const randomProblemName = randomProblem.text;
        return {
            url: randomProblemURL,
            name: randomProblemName
        };
    } catch (error) {
        console.error(error);
    }
}
const fetchLeetCodeProblems = async (difficulty, problemSet)=>{
    try {
        const problems = await (0, _leetcodeProblems.getAllLeetCodeProblems)(difficulty, problemSet);
        // Process the problems as needed
        return problems;
    } catch (error) {
        console.error("Error fetching LeetCode problems:", error);
        throw error; // Rethrow the error for further handling
    }
};
const fetchProblemFromSet = async (difficulty, problemSet)=>{
    try {
        const problem = await getLeetCodeProblemFromProblemSet(difficulty, problemSet);
        return problem;
    } catch (error) {
        console.error("Error fetching problem from set:", error);
        throw error; // Rethrow the error for further handling
    }
};

},{"storage":"5BWMO","~leetcodeProblems":"gny1m","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"5BWMO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getProblemUrl", ()=>getProblemUrl);
parcelHelpers.export(exports, "getProblemSet", ()=>getProblemSet);
parcelHelpers.export(exports, "getDifficulty", ()=>getDifficulty);
parcelHelpers.export(exports, "getIncludePremium", ()=>getIncludePremium);
parcelHelpers.export(exports, "getProblemSolved", ()=>getProblemSolved);
parcelHelpers.export(exports, "initiateLoading", ()=>initiateLoading);
parcelHelpers.export(exports, "stopLoading", ()=>stopLoading);
parcelHelpers.export(exports, "getHyperTortureMode", ()=>getHyperTortureMode);
parcelHelpers.export(exports, "getEnableRedirectOnEveryProblem", ()=>getEnableRedirectOnEveryProblem);
parcelHelpers.export(exports, "updateProblem", ()=>updateProblem);
parcelHelpers.export(exports, "updateEnableRedirectOnEveryProblem", ()=>updateEnableRedirectOnEveryProblem);
parcelHelpers.export(exports, "updatePermissions", ()=>updatePermissions);
parcelHelpers.export(exports, "getLastCompletion", ()=>getLastCompletion);
parcelHelpers.export(exports, "updateStreak", ()=>updateStreak);
parcelHelpers.export(exports, "resetStreak", ()=>resetStreak);
parcelHelpers.export(exports, "resetHyperTortureStreak", ()=>resetHyperTortureStreak);
parcelHelpers.export(exports, "storage", ()=>_storage1);
var _storage = require("@plasmohq/storage");
var _storage1 = require("storage");
const storage = new (0, _storage.Storage)();
const getProblemUrl = async ()=>await storage.get("problemURL");
const getProblemSet = async ()=>await storage.get("problemSets") ?? "all";
const getDifficulty = async ()=>await storage.get("difficulty") ?? "all";
const getIncludePremium = async ()=>Boolean(await storage.get("includePremium")) ?? false;
const getProblemSolved = async ()=>Boolean(await storage.get("leetCodeProblemSolved")) ?? false;
const initiateLoading = async ()=>await storage.set("loading", true);
const stopLoading = async ()=>await storage.set("loading", false);
const getHyperTortureMode = async ()=>!!await storage.get("hyperTortureMode");
const getEnableRedirectOnEveryProblem = async ()=>!await storage.get("enableRedirectOnEveryProblem");
async function updateProblem(problem, isSolved) {
    return Promise.all([
        storage.set("problemURL", problem.url),
        storage.set("problemName", problem.name),
        storage.set("problemDate", new Date().toDateString()),
        updateProblemSolvedState(isSolved)
    ]);
}
async function updateEnableRedirectOnEveryProblem(enabled) {
    await storage.set("enableRedirectOnEveryProblem", enabled);
}
async function updatePermissions(enabled) {
    await storage.set("permissionsEnabled", enabled);
}
// TODO: Maybe this needs to be exported for clarity (instead of being used in updateProblem and updateStreak)
async function updateProblemSolvedState(isSolved) {
    await storage.set("leetCodeProblemSolved", isSolved);
}
async function getLastCompletion() {
    const lastCompletedString = await storage.get("lastCompleted");
    // Returns Unix Epoch if item is null
    return lastCompletedString ? new Date(lastCompletedString) : new Date(0);
}
async function updateStreak() {
    if (await getHyperTortureMode()) {
        // Update hyper torture streak
        const [HT_bestStreak, HT_currentStreak] = await Promise.all([
            storage.get("HT_bestStreak"),
            storage.get("HT_currentStreak")
        ]);
        const HT_newStreak = (Number(HT_currentStreak) || 0) + 1;
        const HT_best = Number(HT_bestStreak) || 0;
        await storage.set("HT_currentStreak", HT_newStreak);
        // If new hyper torture streak higher than best hyper torture streak, update it
        if (HT_newStreak > HT_best) await storage.set("HT_bestStreak", HT_newStreak);
    } else {
        const [_, lastCompletion] = await Promise.all([
            updateProblemSolvedState(true),
            getLastCompletion()
        ]);
        const now = new Date();
        if (lastCompletion.toDateString() === new Date().toDateString()) return;
        const [bestStreak, currentStreak] = await Promise.all([
            storage.get("bestStreak"),
            storage.get("currentStreak")
        ]);
        const newStreak = (Number(currentStreak) || 0) + 1;
        const best = Number(bestStreak) || 0;
        await storage.set("currentStreak", newStreak);
        await storage.set("lastCompleted", now.toDateString());
        if (newStreak > best) await storage.set("bestStreak", newStreak);
    }
}
async function resetStreak() {
    await storage.set("currentStreak", 0);
}
async function resetHyperTortureStreak() {
    await storage.set("HT_currentStreak", 0);
}

},{"@plasmohq/storage":"biX5C","storage":"5BWMO","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"biX5C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseStorage", ()=>o);
parcelHelpers.export(exports, "Storage", ()=>g);
var _pify = require("pify");
var _pifyDefault = parcelHelpers.interopDefault(_pify);
var l = ()=>{
    try {
        let e = globalThis.navigator?.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (e[1] === "Chrome") return parseInt(e[2]) < 100 || globalThis.chrome.runtime?.getManifest()?.manifest_version === 2;
    } catch  {
        return !1;
    }
    return !1;
};
var o = class {
    #r;
    #t;
    get primaryClient() {
        return this.#t;
    }
    #e;
    get secondaryClient() {
        return this.#e;
    }
    #a;
    get area() {
        return this.#a;
    }
    get hasWebApi() {
        try {
            return typeof window < "u" && !!window.localStorage;
        } catch (e) {
            return console.error(e), !1;
        }
    }
    #s = new Map;
    #i;
    get copiedKeySet() {
        return this.#i;
    }
    isCopied = (e)=>this.hasWebApi && (this.allCopied || this.copiedKeySet.has(e));
    #n = !1;
    get allCopied() {
        return this.#n;
    }
    getExtStorageApi = ()=>globalThis.browser?.storage || globalThis.chrome?.storage;
    get hasExtensionApi() {
        try {
            return !!this.getExtStorageApi();
        } catch (e) {
            return console.error(e), !1;
        }
    }
    isWatchSupported = ()=>this.hasExtensionApi;
    keyNamespace = "";
    isValidKey = (e)=>e.startsWith(this.keyNamespace);
    getNamespacedKey = (e)=>`${this.keyNamespace}${e}`;
    getUnnamespacedKey = (e)=>e.slice(this.keyNamespace.length);
    serde = {
        serializer: JSON.stringify,
        deserializer: JSON.parse
    };
    constructor({ area: e = "sync", allCopied: t = !1, copiedKeyList: s = [], serde: r = {} } = {}){
        this.setCopiedKeySet(s), this.#a = e, this.#n = t, this.serde = {
            ...this.serde,
            ...r
        };
        try {
            this.hasWebApi && (t || s.length > 0) && (this.#e = window.localStorage);
        } catch  {}
        try {
            this.hasExtensionApi && (this.#r = this.getExtStorageApi(), l() ? this.#t = (0, _pifyDefault.default)(this.#r[this.area], {
                exclude: [
                    "getBytesInUse"
                ],
                errorFirst: !1
            }) : this.#t = this.#r[this.area]);
        } catch  {}
    }
    setCopiedKeySet(e) {
        this.#i = new Set(e);
    }
    rawGetAll = ()=>this.#t?.get();
    getAll = async ()=>{
        let e = await this.rawGetAll();
        return Object.entries(e).filter(([t])=>this.isValidKey(t)).reduce((t, [s, r])=>(t[this.getUnnamespacedKey(s)] = r, t), {});
    };
    copy = async (e)=>{
        let t = e === void 0;
        if (!t && !this.copiedKeySet.has(e) || !this.allCopied || !this.hasExtensionApi) return !1;
        let s = this.allCopied ? await this.rawGetAll() : await this.#t.get((t ? [
            ...this.copiedKeySet
        ] : [
            e
        ]).map(this.getNamespacedKey));
        if (!s) return !1;
        let r = !1;
        for(let a in s){
            let i = s[a], n = this.#e?.getItem(a);
            this.#e?.setItem(a, i), r ||= i !== n;
        }
        return r;
    };
    rawGet = async (e)=>(await this.rawGetMany([
            e
        ]))[e];
    rawGetMany = async (e)=>this.hasExtensionApi ? await this.#t.get(e) : e.filter(this.isCopied).reduce((t, s)=>(t[s] = this.#e?.getItem(s), t), {});
    rawSet = async (e, t)=>await this.rawSetMany({
            [e]: t
        });
    rawSetMany = async (e)=>(this.#e && Object.entries(e).filter(([t])=>this.isCopied(t)).forEach(([t, s])=>this.#e.setItem(t, s)), this.hasExtensionApi && await this.#t.set(e), null);
    clear = async (e = !1)=>{
        e && this.#e?.clear(), await this.#t.clear();
    };
    rawRemove = async (e)=>{
        await this.rawRemoveMany([
            e
        ]);
    };
    rawRemoveMany = async (e)=>{
        this.#e && e.filter(this.isCopied).forEach((t)=>this.#e.removeItem(t)), this.hasExtensionApi && await this.#t.remove(e);
    };
    removeAll = async ()=>{
        let e = await this.getAll(), t = Object.keys(e);
        await this.removeMany(t);
    };
    watch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#o(e), t;
    };
    #o = (e)=>{
        for(let t in e){
            let s = this.getNamespacedKey(t), r = this.#s.get(s)?.callbackSet || new Set;
            if (r.add(e[t]), r.size > 1) continue;
            let a = (i, n)=>{
                if (n !== this.area || !i[s]) return;
                let h = this.#s.get(s);
                if (!h) throw new Error(`Storage comms does not exist for nsKey: ${s}`);
                Promise.all([
                    this.parseValue(i[s].newValue),
                    this.parseValue(i[s].oldValue)
                ]).then(([y, d])=>{
                    for (let p of h.callbackSet)p({
                        newValue: y,
                        oldValue: d
                    }, n);
                });
            };
            this.#r.onChanged.addListener(a), this.#s.set(s, {
                callbackSet: r,
                listener: a
            });
        }
    };
    unwatch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#c(e), t;
    };
    #c(e) {
        for(let t in e){
            let s = this.getNamespacedKey(t), r = e[t], a = this.#s.get(s);
            a && (a.callbackSet.delete(r), a.callbackSet.size === 0 && (this.#s.delete(s), this.#r.onChanged.removeListener(a.listener)));
        }
    }
    unwatchAll = ()=>this.#h();
    #h() {
        this.#s.forEach(({ listener: e })=>this.#r.onChanged.removeListener(e)), this.#s.clear();
    }
    async getItem(e) {
        return this.get(e);
    }
    async getItems(e) {
        return await this.getMany(e);
    }
    async setItem(e, t) {
        await this.set(e, t);
    }
    async setItems(e) {
        await await this.setMany(e);
    }
    async removeItem(e) {
        return this.remove(e);
    }
    async removeItems(e) {
        return await this.removeMany(e);
    }
}, g = class extends o {
    get = async (e)=>{
        let t = this.getNamespacedKey(e), s = await this.rawGet(t);
        return this.parseValue(s);
    };
    getMany = async (e)=>{
        let t = e.map(this.getNamespacedKey), s = await this.rawGetMany(t), r = await Promise.all(Object.values(s).map(this.parseValue));
        return Object.keys(s).reduce((a, i, n)=>(a[this.getUnnamespacedKey(i)] = r[n], a), {});
    };
    set = async (e, t)=>{
        let s = this.getNamespacedKey(e), r = this.serde.serializer(t);
        return this.rawSet(s, r);
    };
    setMany = async (e)=>{
        let t = Object.entries(e).reduce((s, [r, a])=>(s[this.getNamespacedKey(r)] = this.serde.serializer(a), s), {});
        return await this.rawSetMany(t);
    };
    remove = async (e)=>{
        let t = this.getNamespacedKey(e);
        return this.rawRemove(t);
    };
    removeMany = async (e)=>{
        let t = e.map(this.getNamespacedKey);
        return await this.rawRemoveMany(t);
    };
    setNamespace = (e)=>{
        this.keyNamespace = e;
    };
    parseValue = async (e)=>{
        try {
            if (e !== void 0) return this.serde.deserializer(e);
        } catch (t) {
            console.error(t);
        }
    };
};

},{"pify":"1siwu","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"1siwu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>pify);
const processFunction = (function_, options, proxy, unwrapped)=>function(...arguments_) {
        const P = options.promiseModule;
        return new P((resolve, reject)=>{
            if (options.multiArgs) arguments_.push((...result)=>{
                if (options.errorFirst) {
                    if (result[0]) reject(result);
                    else {
                        result.shift();
                        resolve(result);
                    }
                } else resolve(result);
            });
            else if (options.errorFirst) arguments_.push((error, result)=>{
                if (error) reject(error);
                else resolve(result);
            });
            else arguments_.push(resolve);
            const self = this === proxy ? unwrapped : this;
            Reflect.apply(function_, self, arguments_);
        });
    };
const filterCache = new WeakMap();
function pify(input, options) {
    options = {
        exclude: [
            /.+(?:Sync|Stream)$/
        ],
        errorFirst: true,
        promiseModule: Promise,
        ...options
    };
    const objectType = typeof input;
    if (!(input !== null && (objectType === "object" || objectType === "function"))) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? "null" : objectType}\``);
    const filter = (target, key)=>{
        let cached = filterCache.get(target);
        if (!cached) {
            cached = {};
            filterCache.set(target, cached);
        }
        if (key in cached) return cached[key];
        const match = (pattern)=>typeof pattern === "string" || typeof key === "symbol" ? key === pattern : pattern.test(key);
        const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
        const writableOrConfigurableOwn = descriptor === undefined || descriptor.writable || descriptor.configurable;
        const included = options.include ? options.include.some((element)=>match(element)) : !options.exclude.some((element)=>match(element));
        const shouldFilter = included && writableOrConfigurableOwn;
        cached[key] = shouldFilter;
        return shouldFilter;
    };
    const cache = new WeakMap();
    const proxy = new Proxy(input, {
        apply (target, thisArg, args) {
            const cached = cache.get(target);
            if (cached) return Reflect.apply(cached, thisArg, args);
            const pified = options.excludeMain ? target : processFunction(target, options, proxy, target);
            cache.set(target, pified);
            return Reflect.apply(pified, thisArg, args);
        },
        get (target, key) {
            const property = target[key];
            // eslint-disable-next-line no-use-extend-native/no-use-extend-native
            if (!filter(target, key) || property === Function.prototype[key]) return property;
            const cached = cache.get(property);
            if (cached) return cached;
            if (typeof property === "function") {
                const pified = processFunction(property, options, proxy, target);
                cache.set(property, pified);
                return pified;
            }
            return property;
        }
    });
    return proxy;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"5G9Z5":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gny1m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAllLeetCodeProblems", ()=>getAllLeetCodeProblems);
parcelHelpers.export(exports, "getLeetCodeProblemFromProblemSet", ()=>getLeetCodeProblemFromProblemSet);
var _storage = require("storage");
var _background = require("~background");
async function getAllLeetCodeProblems(difficulty, problemSet) {
    try {
        // Remove lg- or all from string for better logic processing
        const leetCodeProblems = await (0, _background.getProblemListFromLeetCodeAPI)(difficulty, problemSet?.slice(3) || "");
        let randomIndex = Math.floor(Math.random() * leetCodeProblems.length);
        while(leetCodeProblems[randomIndex].paidOnly){
            randomIndex++;
            randomIndex = (leetCodeProblems.length + randomIndex) % leetCodeProblems.length;
        }
        const randomProblem = leetCodeProblems[randomIndex];
        // Replace anything that is not a string or whitespace with "" then replace empty spaces with "-"
        //Error with some problems with special characters TODO: Fix this ex: nondrecreasing subequence -> non-decreasing-subsequence
        const randomProblemURL = "https://leetcode.com/problems/" + randomProblem.titleSlug + "/";
        const randomProblemName = randomProblem.title;
        // await storage.set("loading", false)
        await (0, _storage.storage).stopLoading();
        return {
            url: randomProblemURL,
            name: randomProblemName
        };
    } catch (error) {
        console.error(error);
    }
}
async function getLeetCodeProblemFromProblemSet(difficulty, problemSet) {
    try {
        const includePremium = await (0, _storage.storage).getIncludePremium();
        // TODO: Need to find a way to filter out premium problems for these JSON files
        const problemSetURLs = {
            allNeetcode: "leetcode-problems/allProblems.json",
            NeetCode150: "leetcode-problems/neetCode150Problems.json",
            Blind75: "leetcode-problems/blind75Problems.json",
            metaTop100: "leetcode-problems/metaTop100.json"
        };
        const res = await fetch(chrome.runtime.getURL(problemSetURLs[problemSet]));
        const leetCodeProblems = await res.json();
        const filteredLeetCodeProblems = leetCodeProblems.filter((problem)=>{
            if (!problem.href.endsWith("/")) problem.href += "/";
            return (includePremium || !problem.isPremium) && (difficulty == "all" || problem.difficulty.toLowerCase() === difficulty.toLowerCase());
        });
        let randomIndex = Math.floor(Math.random() * filteredLeetCodeProblems.length);
        const randomProblem = filteredLeetCodeProblems[randomIndex];
        const randomProblemURL = randomProblem.href;
        const randomProblemName = randomProblem.text;
        return {
            url: randomProblemURL,
            name: randomProblemName
        };
    } catch (error) {
        console.error(error);
    }
}

},{"storage":"5BWMO","~background":"14rpM","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}]},["hoXgh","8oeFb"], "8oeFb", "parcelRequire80d9")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxjQUFjLENBQUMsV0FBVztRQUN4RSxNQUFNLG1CQUEwQyxNQUFNLElBQUk7UUFDMUQsTUFBTSwyQkFDSixpQkFBaUIsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxNQUN6QixRQUFRLFFBQVE7WUFFbEIsT0FDRSxBQUFDLENBQUEsa0JBQWtCLENBQUMsUUFBUSxTQUFRLEtBQ25DLENBQUEsY0FBYyxTQUNiLFFBQVEsV0FBVyxrQkFBa0IsV0FBVyxhQUFZO1FBRWxFO1FBRUYsSUFBSSxjQUFjLEtBQUssTUFDckIsS0FBSyxXQUFXLHlCQUF5QjtRQUUzQyxNQUFNLGdCQUFnQix3QkFBd0IsQ0FBQyxZQUFZO1FBQzNELE1BQU0sbUJBQW1CLGNBQWM7UUFDdkMsTUFBTSxvQkFBb0IsY0FBYztRQUN4QyxPQUFPO1lBQUUsS0FBSztZQUFrQixNQUFNO1FBQWtCO0lBQzFELEVBQUUsT0FBTyxPQUFPO1FBQ2QsUUFBUSxNQUFNO0lBQ2hCO0FBQ0YiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErcGFyY2VsLXJ1bnRpbWVAMC4yNS4xL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTE3NGMyMzUzMmE0Njg0MTguanMiLCIucGxhc21vL3N0YXRpYy9iYWNrZ3JvdW5kL2luZGV4LnRzIiwiYmFja2dyb3VuZC50cyIsInN0b3JhZ2UudHMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK3N0b3JhZ2VAMS4xMy4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3N0b3JhZ2UvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9waWZ5QDYuMS4wL25vZGVfbW9kdWxlcy9waWZ5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrdHJhbnNmb3JtZXItanNAMi45LjNfQHBhcmNlbCtjb3JlQDIuOS4zL25vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIiwibGVldGNvZGVQcm9ibGVtcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdT1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciBoPSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEI9bmV3IFNldCh1KSxfPWU9PkIuaGFzKGUpLEc9dS5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBVPV8oXCItLWRyeS1ydW5cIiksZz0oKT0+XyhcIi0tdmVyYm9zZVwiKXx8aCgpLlZFUkJPU0U9PT1cInRydWVcIixOPWcoKTt2YXIgbT0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgeT0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLHY9KC4uLmUpPT5tKFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksZj0oLi4uZSk9Pm0oXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxNPTAsaT0oLi4uZSk9PmcoKSYmbShgXFx1ezFGN0UxfSAke00rK31gLC4uLmUpO3ZhciBiPSgpPT57bGV0IGU9Z2xvYmFsVGhpcy5icm93c2VyPy5ydW50aW1lfHxnbG9iYWxUaGlzLmNocm9tZT8ucnVudGltZSx0PSgpPT5zZXRJbnRlcnZhbChlLmdldFBsYXRmb3JtSW5mbywyNGUzKTtlLm9uU3RhcnR1cC5hZGRMaXN0ZW5lcih0KSx0KCl9O3ZhciBuPXtcImlzQ29udGVudFNjcmlwdFwiOmZhbHNlLFwiaXNCYWNrZ3JvdW5kXCI6dHJ1ZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wiYmFja2dyb3VuZC1zZXJ2aWNlLXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiQzpcXFxcVXNlcnNcXFxcaGl0ZXNcXFxcRGVza3RvcFxcXFxDb2RpbmdcXFxcQ29kZSBUdW9yXFxcXC5wbGFzbW9cXFxcc3RhdGljXFxcXGJhY2tncm91bmRcXFxcaW5kZXgudHNcIixcImJ1bmRsZUlkXCI6XCJjMzM4OTA4ZTcwNGM5MWYxXCIsXCJlbnZIYXNoXCI6XCJkOTlhNWZmYTU3YWNkNjM4XCIsXCJ2ZXJib3NlXCI6XCJmYWxzZVwiLFwic2VjdXJlXCI6ZmFsc2UsXCJzZXJ2ZXJQb3J0XCI6MTAxMn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgRD1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBIKGUpe0QuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9SDttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGM9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBSKCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIHgoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBkKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUD1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIixTPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7dmFyIE89YCR7bi5zZWN1cmU/XCJodHRwc1wiOlwiaHR0cFwifTovLyR7UigpfToke2QoKX0vYDthc3luYyBmdW5jdGlvbiBrKGU9MTQ3MCl7Zm9yKDs7KXRyeXthd2FpdCBmZXRjaChPKTticmVha31jYXRjaHthd2FpdCBuZXcgUHJvbWlzZShvPT5zZXRUaW1lb3V0KG8sZSkpfX1pZihjLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uPT09Myl7bGV0IGU9Yy5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIpO2dsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsZnVuY3Rpb24odCl7bGV0IG89dC5yZXF1ZXN0LnVybDtpZihvLnN0YXJ0c1dpdGgoZSkpe2xldCBzPW5ldyBVUkwoZGVjb2RlVVJJQ29tcG9uZW50KG8uc2xpY2UoZS5sZW5ndGgpKSk7cy5ob3N0bmFtZT09PW4uaG9zdCYmcy5wb3J0PT09YCR7bi5wb3J0fWA/KHMuc2VhcmNoUGFyYW1zLnNldChcInRcIixEYXRlLm5vdygpLnRvU3RyaW5nKCkpLHQucmVzcG9uZFdpdGgoZmV0Y2gocykudGhlbihyPT5uZXcgUmVzcG9uc2Uoci5ib2R5LHtoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOnIuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik/P1widGV4dC9qYXZhc2NyaXB0XCJ9fSkpKSk6dC5yZXNwb25kV2l0aChuZXcgUmVzcG9uc2UoXCJQbGFzbW8gSE1SXCIse3N0YXR1czoyMDAsc3RhdHVzVGV4dDpcIlRlc3RpbmdcIn0pKX19KX1mdW5jdGlvbiBFKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gQyhlPWQoKSl7bGV0IHQ9eCgpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEwoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFQoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEMoTnVtYmVyKGQoKSkrMSkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2F3YWl0IGUocyl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEwpLHR9ZnVuY3Rpb24gQShlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoQygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTtpZihzLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHMuYXNzZXRzKSxzLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCByIG9mIHMuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IGw9ci5jb2RlZnJhbWV8fHIuc3RhY2s7ZihcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIityLm1lc3NhZ2UrYFxuYCtsK2BcblxuYCtyLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsTCksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntmKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgdz1tb2R1bGUuYnVuZGxlLnBhcmVudCxhPXtidWlsZFJlYWR5OiExLGJnQ2hhbmdlZDohMSxjc0NoYW5nZWQ6ITEscGFnZUNoYW5nZWQ6ITEsc2NyaXB0UG9ydHM6bmV3IFNldCxwYWdlUG9ydHM6bmV3IFNldH07YXN5bmMgZnVuY3Rpb24gcChlPSExKXtpZihlfHxhLmJ1aWxkUmVhZHkmJmEucGFnZUNoYW5nZWQpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgUGFnZVwiKTtmb3IobGV0IHQgb2YgYS5wYWdlUG9ydHMpdC5wb3N0TWVzc2FnZShudWxsKX1pZihlfHxhLmJ1aWxkUmVhZHkmJihhLmJnQ2hhbmdlZHx8YS5jc0NoYW5nZWQpKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIENTXCIpO2xldCB0PWF3YWl0IGM/LnRhYnMucXVlcnkoe2FjdGl2ZTohMH0pO2ZvcihsZXQgbyBvZiBhLnNjcmlwdFBvcnRzKXtsZXQgcz10LnNvbWUocj0+ci5pZD09PW8uc2VuZGVyLnRhYj8uaWQpO28ucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2FjdGl2ZV90YWJfXzpzfSl9Yy5ydW50aW1lLnJlbG9hZCgpfX1pZighd3x8IXcuaXNQYXJjZWxSZXF1aXJlKXtiKCk7bGV0IGU9QShhc3luYyB0PT57aShcIkJHU1cgUnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYS5iZ0NoYW5nZWR8fD10LmZpbHRlcihzPT5zLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUocz0+RShtb2R1bGUuYnVuZGxlLHMuaWQpKTtsZXQgbz10LmZpbmQocz0+cy50eXBlPT09XCJqc29uXCIpO2lmKG8pe2xldCBzPW5ldyBTZXQodC5tYXAobD0+bC5pZCkpLHI9T2JqZWN0LnZhbHVlcyhvLmRlcHNCeUJ1bmRsZSkubWFwKGw9Pk9iamVjdC52YWx1ZXMobCkpLmZsYXQoKTthLmJnQ2hhbmdlZHx8PXIuZXZlcnkobD0+cy5oYXMobCkpfXAoKX0pO2UuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e2xldCB0PXNldEludGVydmFsKCgpPT5lLnNlbmQoXCJwaW5nXCIpLDI0ZTMpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PmNsZWFySW50ZXJ2YWwodCkpfSksZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIixhc3luYygpPT57YXdhaXQgaygpLHAoITApfSl9VChhc3luYyBlPT57c3dpdGNoKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiBCdWlsZCBSZXBhY2thZ2VkXCIpLGUudHlwZSl7Y2FzZVwiYnVpbGRfcmVhZHlcIjp7YS5idWlsZFJlYWR5fHw9ITAscCgpO2JyZWFrfWNhc2VcImNzX2NoYW5nZWRcIjp7YS5jc0NoYW5nZWR8fD0hMCxwKCk7YnJlYWt9fX0pO2MucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24oZSl7bGV0IHQ9ZS5uYW1lLnN0YXJ0c1dpdGgoUCksbz1lLm5hbWUuc3RhcnRzV2l0aChTKTtpZih0fHxvKXtsZXQgcz10P2EucGFnZVBvcnRzOmEuc2NyaXB0UG9ydHM7cy5hZGQoZSksZS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntzLmRlbGV0ZShlKX0pLGUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHIpe2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBzb3VyY2UgY2hhbmdlZFwiLHIpLHIuX19wbGFzbW9fY3NfY2hhbmdlZF9fJiYoYS5jc0NoYW5nZWR8fD0hMCksci5fX3BsYXNtb19wYWdlX2NoYW5nZWRfXyYmKGEucGFnZUNoYW5nZWR8fD0hMCkscCgpfSl9fSk7Yy5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3BsYXNtb19mdWxsX3JlbG9hZF9fJiYoaShcIkJHU1cgUnVudGltZSAtIE9uIHRvcC1sZXZlbCBjb2RlIGNoYW5nZWRcIikscCgpKSwhMH0pO1xuIiwiaW1wb3J0IFwiLi4vLi4vLi4vYmFja2dyb3VuZFwiIiwiLy8gQ2hhbGxlbmdlSHViOiBCYWNrZ3JvdW5kIHNjcmlwdCBmb3IgbWFuYWdpbmcgcHJvYmxlbS1zb2x2aW5nIGFuZCB1c2VyIGludGVyYWN0aW9uc1xuXG5pbXBvcnQgeyBnZXREaWZmaWN1bHR5LCBnZXRIeXBlclRvcnR1cmVNb2RlLCByZXNldEh5cGVyVG9ydHVyZVN0cmVhaywgc3RvcmFnZSB9IGZyb20gXCJzdG9yYWdlXCJcblxuaW1wb3J0IHtcbiAgZ2V0QWxsTGVldENvZGVQcm9ibGVtcyxcbn0gZnJvbSBcIn5sZWV0Y29kZVByb2JsZW1zXCJcbmltcG9ydCB0eXBlIHsgQVBJTGVldENvZGVQcm9ibGVtLCBKU09OTGVldENvZGVQcm9ibGVtLCBVc2VyU3RhdGUgfSBmcm9tIFwifnR5cGVzXCJcblxuY29uc3QgTEVFVENPREVfVVJMID0gXCJodHRwczovL2xlZXRjb2RlLmNvbVwiXG5jb25zdCBSVUxFX0lEID0gMVxuY29uc3QgaXNMZWV0Q29kZVVybCA9ICh1cmw6IHN0cmluZykgPT4gdXJsLmluY2x1ZGVzKExFRVRDT0RFX1VSTClcblxuY29uc3QgaXNTdWJtaXNzaW9uU3VjY2Vzc1VSTCA9ICh1cmw6IHN0cmluZykgPT5cbiAgdXJsLmluY2x1ZGVzKFwiL3N1Ym1pc3Npb25zL2RldGFpbC9cIikgJiYgdXJsLmluY2x1ZGVzKFwiL2NoZWNrL1wiKVxuXG5jb25zdCBzZW5kVXNlclNvbHZlZE1lc3NhZ2UgPSAobGFuZ3VhZ2VVc2VkOiBzdHJpbmcpID0+IHtcbiAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24gKHRhYnMpIHtcbiAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJzWzBdLmlkLCB7XG4gICAgICBhY3Rpb246IFwidXNlclNvbHZlZFByb2JsZW1cIixcbiAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZVVzZWRcbiAgICB9KVxuICB9KVxufVxuXG5jb25zdCBzZW5kVXNlckZhaWxlZE1lc3NhZ2UgPSAoKSA9PiB7XG4gIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XG4gICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFic1swXS5pZCwge1xuICAgICAgYWN0aW9uOiBcInVzZXJGYWlsZWRQcm9ibGVtXCJcbiAgICB9KVxuICB9KVxufVxuXG5jb25zdCBzdGF0ZTogVXNlclN0YXRlID0ge1xuICBsZWV0Y29kZVByb2JsZW1Tb2x2ZWQ6IGZhbHNlLFxuICBsZWV0Q29kZVByb2JsZW06IHtcbiAgICB1cmw6IG51bGwsXG4gICAgbmFtZTogbnVsbFxuICB9LFxuICBsYXN0U3VibWlzc2lvbkRhdGU6IG5ldyBEYXRlKDApLFxuICBzb2x2ZWRMaXN0ZW5lckFjdGl2ZTogZmFsc2UsXG4gIGxhc3RBdHRlbXB0ZWRVcmw6IG51bGwsXG4gIHVybExpc3RlbmVyOiBudWxsLFxuICBpbmNsdWRlUHJlbWl1bTogbnVsbCxcbiAgaHlwZXJUb3J0dXJlTW9kZTogbnVsbCxcbiAgSFRjdXJyZW50U3RyZWFrOiBudWxsXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9ibGVtTGlzdEZyb21MZWV0Q29kZUFQSShcbiAgZGlmZmljdWx0eTogc3RyaW5nLFxuICBwcm9ibGVtU2V0OiBzdHJpbmdcbik6IFByb21pc2U8QVBJTGVldENvZGVQcm9ibGVtW10+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBxdWVyeSA9IGBcbiAgICAgIHF1ZXJ5IHByb2JsZW1zZXRRdWVzdGlvbkxpc3Qge1xuICAgICAgICBwcm9ibGVtc2V0UXVlc3Rpb25MaXN0OiBxdWVzdGlvbkxpc3QoXG4gICAgICAgICAgY2F0ZWdvcnlTbHVnOiBcIlwiXG4gICAgICAgICAgbGltaXQ6IC0xXG4gICAgICAgICAgc2tpcDogMFxuICAgICAgICAgIGZpbHRlcnM6IHtcbiAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgIGRpZmZpY3VsdHkgJiYgZGlmZmljdWx0eSAhPT0gXCJhbGxcIlxuICAgICAgICAgICAgICAgID8gXCJkaWZmaWN1bHR5OiBcIiArIGRpZmZpY3VsdHlcbiAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICR7cHJvYmxlbVNldD8ubGVuZ3RoID8gXCJsaXN0SWQ6IFwiICsgJ1wiJyArIHByb2JsZW1TZXQgKyAnXCInIDogXCJcIn1cbiAgICAgICAgICB9XG4gICAgICAgICkge1xuICAgICAgICAgIHF1ZXN0aW9uczogZGF0YSB7XG4gICAgICAgICAgICBhY1JhdGVcbiAgICAgICAgICAgIGRpZmZpY3VsdHlcbiAgICAgICAgICAgIGZyZXFCYXJcbiAgICAgICAgICAgIGZyb250ZW5kUXVlc3Rpb25JZDogcXVlc3Rpb25Gcm9udGVuZElkXG4gICAgICAgICAgICBpc0Zhdm9yXG4gICAgICAgICAgICBwYWlkT25seTogaXNQYWlkT25seVxuICAgICAgICAgICAgc3RhdHVzXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgdGl0bGVTbHVnXG4gICAgICAgICAgICB0b3BpY1RhZ3Mge1xuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhc1NvbHV0aW9uXG4gICAgICAgICAgICBoYXNWaWRlb1NvbHV0aW9uXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYFxuXG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgIHF1ZXJ5XG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vbGVldGNvZGUuY29tL2dyYXBocWxcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICBhd2FpdCBzdG9yYWdlLnVwZGF0ZVBlcm1pc3Npb25zKHRydWUpXG5cbiAgICByZXR1cm4gcmVzcG9uc2VEYXRhLmRhdGEucHJvYmxlbXNldFF1ZXN0aW9uTGlzdC5xdWVzdGlvbnNcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvci50b1N0cmluZygpKVxuICAgIGlmIChcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJOZXR3b3JrRXJyb3JcIikgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoXCJDT1JTXCIpIHx8XG4gICAgICBlcnJvci5tZXNzYWdlID09PSBcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBva1wiXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNPUlMgZXJyb3IgZGV0ZWN0ZWQuXCIpXG4gICAgICBhd2FpdCBzdG9yYWdlLnVwZGF0ZVBlcm1pc3Npb25zKGZhbHNlKVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZUFkZGl0aW9uYWxQcm9ibGVtUmVkaXJlY3QgPSBhc3luYyAocHJvYmxlbVVybDogc3RyaW5nKSA9PiB7XG4gIGlmIChhd2FpdCBzdG9yYWdlLmdldEVuYWJsZVJlZGlyZWN0T25FdmVyeVByb2JsZW0oKSlcbiAgICBhd2FpdCBzZXRSZWRpcmVjdFJ1bGUocHJvYmxlbVVybClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tUHJvYmxlbShkaWZmaWN1bHR5OiBzdHJpbmcpOiBQcm9taXNlPHtcbiAgdXJsOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwcm9ibGVtU2V0ID0gYXdhaXQgc3RvcmFnZS5nZXRQcm9ibGVtU2V0KCk7XG4gICAgY29uc3Qgc2VsZWN0ZWREaWZmaWN1bHR5ID0gZGlmZmljdWx0eSB8fCBhd2FpdCBzdG9yYWdlLmdldERpZmZpY3VsdHkoKTsgLy8gR2V0IGRpZmZpY3VsdHkgZnJvbSBzdG9yYWdlIGlmIG5vdCBwcm92aWRlZFxuXG4gICAgaWYgKHByb2JsZW1TZXQuc3RhcnRzV2l0aChcImNvZGVmb3JjZXNcIikpIHtcbiAgICAgIGNvbnN0IHByb2JsZW1zID0gYXdhaXQgZ2V0Q29kZWZvcmNlc1Byb2JsZW1zKHNlbGVjdGVkRGlmZmljdWx0eSk7XG4gICAgICBjb25zdCByYW5kb21Qcm9ibGVtID0gcHJvYmxlbXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcHJvYmxlbXMubGVuZ3RoKV07XG4gICAgICByZXR1cm4geyB1cmw6IHJhbmRvbVByb2JsZW0udXJsLCBuYW1lOiByYW5kb21Qcm9ibGVtLm5hbWUgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRXhpc3RpbmcgbG9naWMgZm9yIExlZXRDb2RlIHByb2JsZW1zXG4gICAgICBpZiAocHJvYmxlbVNldCA9PT0gXCJhbGxcIiB8fCBwcm9ibGVtU2V0LnN0YXJ0c1dpdGgoXCJsZ1wiKSkge1xuICAgICAgICBhd2FpdCBzdG9yYWdlLmluaXRpYXRlTG9hZGluZygpO1xuICAgICAgICByZXR1cm4gYXdhaXQgZ2V0QWxsTGVldENvZGVQcm9ibGVtcyhzZWxlY3RlZERpZmZpY3VsdHksIHByb2JsZW1TZXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGdldExlZXRDb2RlUHJvYmxlbUZyb21Qcm9ibGVtU2V0KHNlbGVjdGVkRGlmZmljdWx0eSwgcHJvYmxlbVNldCk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZW5lcmF0aW5nIHJhbmRvbSBwcm9ibGVtXCIsIGVycm9yKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGZpbmFsbHkge1xuICAgIGF3YWl0IHN0b3JhZ2Uuc3RvcExvYWRpbmcoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbk1lc3NhZ2VSZWNlaXZlZChcbiAgbWVzc2FnZTogYW55LFxuICBzZW5kZXI6IGNocm9tZS5ydW50aW1lLk1lc3NhZ2VTZW5kZXIsXG4gIHNlbmRSZXNwb25zZTogKHJlc3BvbnNlPzogYW55KSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgc3dpdGNoIChtZXNzYWdlLmFjdGlvbikge1xuICAgIGNhc2UgXCJmZXRjaGluZ1Byb2JsZW1cIjpcbiAgICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgcHJvYmxlbSBzdGFydGVkLlwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwcm9ibGVtRmV0Y2hlZFwiOlxuICAgICAgY29uc29sZS5sb2coXCJGZXRjaGluZyBwcm9ibGVtIGNvbXBsZXRlZC5cIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZ2V0UHJvYmxlbVN0YXR1c1wiOlxuICAgICAgc2VuZFJlc3BvbnNlKHtcbiAgICAgICAgcHJvYmxlbVNvbHZlZDogc3RhdGUubGVldGNvZGVQcm9ibGVtU29sdmVkLFxuICAgICAgICBwcm9ibGVtOiBzdGF0ZS5sZWV0Q29kZVByb2JsZW1cbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInVzZXJDbGlja2VkU3VibWl0XCI6XG4gICAgICBzdGF0ZS5sYXN0U3VibWlzc2lvbkRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgc3RhdGUuc29sdmVkTGlzdGVuZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgY29uc29sZS5sb2coXCJVc2VyIGNsaWNrZWQgc3VibWl0LCBhZGRpbmcgbGlzdGVuZXJcIiwgc3RhdGUuc29sdmVkTGlzdGVuZXJBY3RpdmUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnNvbGUud2FybihcIlVua25vd24gbWVzc2FnZSBhY3Rpb246XCIsIG1lc3NhZ2UuYWN0aW9uKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBzZXRSZWRpcmVjdFJ1bGUocmVkaXJlY3RVcmw6IHN0cmluZykge1xuICBjb25zdCByZWRpcmVjdFJ1bGUgPSB7XG4gICAgaWQ6IFJVTEVfSUQsXG4gICAgcHJpb3JpdHk6IDEsXG4gICAgYWN0aW9uOiB7XG4gICAgICB0eXBlOiBcInJlZGlyZWN0XCIsXG4gICAgICByZWRpcmVjdDogeyB1cmw6IHJlZGlyZWN0VXJsIH1cbiAgICB9LFxuICAgIGNvbmRpdGlvbjoge1xuICAgICAgdXJsRmlsdGVyOiBcIio6Ly8qLypcIixcbiAgICAgIGV4Y2x1ZGVkSW5pdGlhdG9yRG9tYWluczogW1xuICAgICAgICBcImxlZXRjb2RlLmNvbVwiLFxuICAgICAgICBcInd3dy5sZWV0Y29kZS5jb21cIixcbiAgICAgICAgXCJkZXZlbG9wZXIuY2hyb21lLmNvbVwiXG4gICAgICBdLFxuXG4gICAgICByZXNvdXJjZVR5cGVzOiBbXCJtYWluX2ZyYW1lXCJdXG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LnVwZGF0ZUR5bmFtaWNSdWxlcyh7XG4gICAgICByZW1vdmVSdWxlSWRzOiBbUlVMRV9JRF0sXG4gICAgICBhZGRSdWxlczogW3JlZGlyZWN0UnVsZSBhcyBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LlJ1bGVdXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhcIlJlZGlyZWN0IHJ1bGUgdXBkYXRlZFwiKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyByZWRpcmVjdCBydWxlOlwiLCBlcnJvcilcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvYmxlbVN0YXRlID0gYXN5bmMgKHByb2JsZW06IHtcbiAgbmFtZTogc3RyaW5nXG4gIHVybDogc3RyaW5nXG59KSA9PiB7XG4gIGF3YWl0IHN0b3JhZ2UudXBkYXRlUHJvYmxlbShwcm9ibGVtLCBzdGF0ZS5sZWV0Y29kZVByb2JsZW1Tb2x2ZWQpXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTdG9yYWdlID0gYXN5bmMgKGRpZmZpY3VsdHk6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGlzUmVkaXJlY3RFbmFibGVkID0gYXdhaXQgc3RvcmFnZS5nZXRFbmFibGVSZWRpcmVjdE9uRXZlcnlQcm9ibGVtKClcbiAgICBjb25zdCBzZWxlY3RlZERpZmZpY3VsdHkgPSBkaWZmaWN1bHR5IHx8IGF3YWl0IHN0b3JhZ2UuZ2V0RGlmZmljdWx0eSgpXG4gICAgbGV0IHByb2JsZW0gPSBhd2FpdCBnZW5lcmF0ZVJhbmRvbVByb2JsZW0oc2VsZWN0ZWREaWZmaWN1bHR5KVxuICAgIHN0YXRlLmxlZXRjb2RlUHJvYmxlbVNvbHZlZCA9IGZhbHNlXG4gICAgdXBkYXRlUHJvYmxlbVN0YXRlKHByb2JsZW0pXG4gICAgaWYgKCFzdGF0ZS5sZWV0Y29kZVByb2JsZW1Tb2x2ZWQgJiYgaXNSZWRpcmVjdEVuYWJsZWQpXG4gICAgICBhd2FpdCBzZXRSZWRpcmVjdFJ1bGUocHJvYmxlbS51cmwpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgZ2VuZXJhdGluZyByYW5kb20gcHJvYmxlbTogXCIgKyBlcnJvcilcbiAgfVxufVxuXG5jb25zdCBjaGVja0lmVXNlclNvbHZlZFByb2JsZW0gPSBhc3luYyAoXG4gIGRldGFpbHM6IGNocm9tZS53ZWJSZXF1ZXN0LldlYlJlc3BvbnNlQ2FjaGVEZXRhaWxzXG4pID0+IHtcbiAgLy8gSWYgdGhlIHVzZXIgaGFzIGFscmVhZHkgc29sdmVkIHRoZSBwcm9ibGVtLCB0aGVuIGRvbid0IGRvIGFueXRoaW5nXG4gIGlmIChhd2FpdCBzdG9yYWdlLmdldFByb2JsZW1Tb2x2ZWQoKSkgcmV0dXJuXG4gIC8vIEdldCB0aGUgY3VycmVudCBhY3RpdmUgdGFiJ3MgVVJMXG4gIGxldCBjdXJyZW50VVJMID0gXCJcIlxuICB0cnkge1xuICAgIGNvbnN0IFthY3RpdmVUYWJdID0gYXdhaXQgbmV3IFByb21pc2U8Y2hyb21lLnRhYnMuVGFiW10+KChyZXNvbHZlKSA9PiB7XG4gICAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCByZXNvbHZlKVxuICAgIH0pXG5cbiAgICBjdXJyZW50VVJMID0gYWN0aXZlVGFiLnVybFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZXR0aW5nIGFjdGl2ZSB0YWI6XCIsIGVycm9yKVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgcHJvYmxlbVVybCA9IGF3YWl0IHN0b3JhZ2UuZ2V0UHJvYmxlbVVybCgpXG5cbiAgY29uc3Qgc2FtZVVybCA9XG4gICAgcHJvYmxlbVVybCA9PT0gY3VycmVudFVSTCB8fCBwcm9ibGVtVXJsICsgXCJkZXNjcmlwdGlvbi9cIiA9PT0gY3VycmVudFVSTFxuXG4gIGlmICghc2FtZVVybCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy9sYXN0Q2hlY2tlZFVybCA9IGRldGFpbHMudXJsXG4gIC8vbGFzdENoZWNrZWRUaW1lc3RhbXAgPSBub3dcblxuICBpZiAoc3RhdGUuc29sdmVkTGlzdGVuZXJBY3RpdmUpIHtcbiAgICAvLyBSZW1vdmUgdGhlIGxpc3RlbmVyIHNvIHRoYXQgaXQgZG9lc24ndCBmaXJlIGFnYWluLCBzaW5jZSB0aGUgb3V0Y29tZSB3aWxsIGVpdGhlciBiZSBzdWNjZXNzIG9yIGZhaWxcbiAgICAvLyBBbmQgd2UnbGwgYWRkIGl0IGFnYWluIHdoZW4gdGhlIHVzZXIgY2xpY2tzIHN1Ym1pdFxuICAgIHN0YXRlLnNvbHZlZExpc3RlbmVyQWN0aXZlID0gZmFsc2VcbiAgICBjaHJvbWUud2ViUmVxdWVzdC5vbkNvbXBsZXRlZC5yZW1vdmVMaXN0ZW5lcihjaGVja0lmVXNlclNvbHZlZFByb2JsZW0pXG4gIH1cblxuICBpZiAoaXNTdWJtaXNzaW9uU3VjY2Vzc1VSTChkZXRhaWxzLnVybCkpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaHlwZXJUb3J0dXJlTW9kZSA9IGF3YWl0IGdldEh5cGVyVG9ydHVyZU1vZGUoKVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkZXRhaWxzLnVybClcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgIGlmIChkYXRhLnN0YXRlID09PSBcIlNUQVJURURcIiB8fCBkYXRhLnN0YXRlID09PSBcIlBFTkRJTkdcIikge1xuICAgICAgICBpZiAoIXN0YXRlLnNvbHZlZExpc3RlbmVyQWN0aXZlKSB7XG4gICAgICAgICAgc3RhdGUuc29sdmVkTGlzdGVuZXJBY3RpdmUgPSB0cnVlXG4gICAgICAgICAgY2hyb21lLndlYlJlcXVlc3Qub25Db21wbGV0ZWQuYWRkTGlzdGVuZXIoY2hlY2tJZlVzZXJTb2x2ZWRQcm9ibGVtLCB7XG4gICAgICAgICAgICB1cmxzOiBbXCIqOi8vbGVldGNvZGUuY29tL3N1Ym1pc3Npb25zL2RldGFpbC8qL2NoZWNrL1wiXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoZGF0YS5zdGF0dXNfbXNnICE9PSBcIkFjY2VwdGVkXCIpIHtcbiAgICAgICAgaWYgKGh5cGVyVG9ydHVyZU1vZGUpIHtcbiAgICAgICAgICBhd2FpdCByZXNldEh5cGVyVG9ydHVyZVN0cmVhaygpXG4gICAgICAgICAgc2VuZFVzZXJGYWlsZWRNZXNzYWdlKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgZGF0YS5zdGF0dXNfbXNnID09PSBcIkFjY2VwdGVkXCIgJiZcbiAgICAgICAgZGF0YS5zdGF0ZSA9PT0gXCJTVUNDRVNTXCIgJiZcbiAgICAgICAgIWRhdGEuY29kZV9hbnN3ZXJcbiAgICAgICkge1xuICAgICAgICBhd2FpdCBzdG9yYWdlLnVwZGF0ZVN0cmVhaygpXG4gICAgICAgIHN0YXRlLmxlZXRjb2RlUHJvYmxlbVNvbHZlZCA9IHRydWVcbiAgICAgICAgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC51cGRhdGVEeW5hbWljUnVsZXMoe1xuICAgICAgICAgIHJlbW92ZVJ1bGVJZHM6IFtSVUxFX0lEXVxuICAgICAgICB9KVxuICAgICAgICBjaHJvbWUud2ViUmVxdWVzdC5vbkNvbXBsZXRlZC5yZW1vdmVMaXN0ZW5lcihjaGVja0lmVXNlclNvbHZlZFByb2JsZW0pXG4gICAgICAgIGlmIChoeXBlclRvcnR1cmVNb2RlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJIeXBlciB0b3J0dXJlIG1vZGUgaXMgZW5hYmxlZFwiKVxuICAgICAgICAgIGlmIChzdGF0ZS5sYXN0QXR0ZW1wdGVkVXJsKSB7XG4gICAgICAgICAgICBjaHJvbWUudGFicy51cGRhdGUoeyB1cmw6IHN0YXRlLmxhc3RBdHRlbXB0ZWRVcmwgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYXdhaXQgdXBkYXRlU3RvcmFnZShhd2FpdCBnZXREaWZmaWN1bHR5KCkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VuZFVzZXJTb2x2ZWRNZXNzYWdlKGRhdGE/LmxhbmcgfHwgXCJ1bmtub3duXCIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcilcbiAgICB9XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdHJ5UmVzZXRTdHJlYWsoKSB7XG4gIGNvbnN0IGxhc3RDb21wbGV0aW9uID0gYXdhaXQgc3RvcmFnZS5nZXRMYXN0Q29tcGxldGlvbigpXG4gIGNvbnN0IHllc3RlcmRheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpIC0gMVxuICBpZiAobGFzdENvbXBsZXRpb24uZ2V0RGF0ZSgpIDwgeWVzdGVyZGF5KSB7XG4gICAgYXdhaXQgc3RvcmFnZS5yZXNldFN0cmVhaygpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRvZ2dsZVVybExpc3RlbmVyKHRvZ2dsZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICBpZiAodG9nZ2xlKSB7XG4gICAgLy8gU2F2ZSB1c2VycyByZXF1ZXN0IHVybCBmb3IgZnVydGhlciByZWRpcmVjdFxuICAgIC8vIFNhdmUgdXNlcnMgcmVxdWVzdCB1cmwgZm9yIGZ1cnRoZXIgcmVkaXJlY3RcbiAgICBzdGF0ZS51cmxMaXN0ZW5lciA9IChkZXRhaWxzOiBjaHJvbWUud2ViUmVxdWVzdC5XZWJSZXF1ZXN0Qm9keURldGFpbHMpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgIWlzTGVldENvZGVVcmwoZGV0YWlscy51cmwpICYmXG4gICAgICAgIGRldGFpbHMudHlwZSA9PT0gXCJtYWluX2ZyYW1lXCIgJiZcbiAgICAgICAgIWRldGFpbHMudXJsLmluY2x1ZGVzKFwiY2hyb21lLWV4dGVuc2lvbjpcIilcbiAgICAgICkge1xuICAgICAgICBzdGF0ZS5sYXN0QXR0ZW1wdGVkVXJsID0gZGV0YWlscy51cmxcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsIC8vIHJldHVybiBudWxsIHdoZW4gbm8gQmxvY2tpbmdSZXNwb25zZSBpcyBuZWVkZWRcbiAgICB9XG5cbiAgICBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoc3RhdGUudXJsTGlzdGVuZXIsIHtcbiAgICAgIHVybHM6IFtcIjxhbGxfdXJscz5cIl1cbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5yZW1vdmVMaXN0ZW5lcihzdGF0ZS51cmxMaXN0ZW5lcilcbiAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVJlZGlyZWN0UnVsZSgpIHtcbiAgY29uc3QgaXNSZWRpcmVjdEVuYWJsZWQgPSBhd2FpdCBzdG9yYWdlLmdldEVuYWJsZVJlZGlyZWN0T25FdmVyeVByb2JsZW0oKVxuICBpZiAoaXNSZWRpcmVjdEVuYWJsZWQpIHtcbiAgICBjb25zdCBwcm9ibGVtVXJsID0gYXdhaXQgc3RvcmFnZS5nZXRQcm9ibGVtVXJsKClcbiAgICBhd2FpdCBzZXRSZWRpcmVjdFJ1bGUocHJvYmxlbVVybClcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC51cGRhdGVEeW5hbWljUnVsZXMoe1xuICAgICAgICByZW1vdmVSdWxlSWRzOiBbUlVMRV9JRF1cbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhcIlJlZGlyZWN0IHJ1bGUgcmVtb3ZlZFwiKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVtb3ZpbmcgcmVkaXJlY3QgcnVsZTpcIiwgZXJyb3IpXG4gICAgfVxuICB9XG59XG5jb25zdCBnZXRNc1VudGlsTWlkbmlnaHQgPSAoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKVxuICBjb25zdCBtaWRuaWdodCA9IG5ldyBEYXRlKClcbiAgbWlkbmlnaHQuc2V0SG91cnMoMjQsIDAsIDAsIDApXG4gIHJldHVybiBtaWRuaWdodC5nZXRUaW1lKCkgLSBjdXJyZW50VGltZVxufVxuXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHVwZGF0ZVN0b3JhZ2UoYXdhaXQgZ2V0RGlmZmljdWx0eSgpKVxuICBhd2FpdCB0cnlSZXNldFN0cmVhaygpXG4gIGF3YWl0IHRvZ2dsZVVybExpc3RlbmVyKGF3YWl0IGdldEh5cGVyVG9ydHVyZU1vZGUoKSlcbn0pXG5cbmNocm9tZS5hbGFybXMuZ2V0KFwibWlkbmlnaHRBbGFybVwiLCAoYWxhcm0pID0+IHtcbiAgaWYgKGFsYXJtKSByZXR1cm5cbiAgY29uc3QgbXNVbnRpbE1pZG5pZ2h0ID0gZ2V0TXNVbnRpbE1pZG5pZ2h0KClcbiAgY29uc3Qgb25lRGF5SW5NaW51dGVzID0gNjAgKiAyNFxuICBjaHJvbWUuYWxhcm1zLmNyZWF0ZShcIm1pZG5pZ2h0QWxhcm1cIiwge1xuICAgIHdoZW46IERhdGUubm93KCkgKyBtc1VudGlsTWlkbmlnaHQsXG4gICAgcGVyaW9kSW5NaW51dGVzOiBvbmVEYXlJbk1pbnV0ZXNcbiAgfSlcbn0pXG5cbmNocm9tZS5hbGFybXMub25BbGFybS5hZGRMaXN0ZW5lcihhc3luYyAoYWxhcm0pID0+IHtcbiAgYXdhaXQgdXBkYXRlU3RvcmFnZShhd2FpdCBnZXREaWZmaWN1bHR5KCkpXG4gIGF3YWl0IHRyeVJlc2V0U3RyZWFrKClcbn0pXG5cbi8vIE5lZWQgdG8gYWRkIHRoZXNlIGxpc3RlbmVycyB0byBnbG9iYWwgc2NvcGUgc28gdGhhdCB3aGVuIHRoZSB3b3JrZXJzIGJlY29tZSBpbmFjdGl2ZSwgdGhleSBhcmUgc2V0IGFnYWluXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIob25NZXNzYWdlUmVjZWl2ZWQpXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb2RlZm9yY2VzUHJvYmxlbXMoZGlmZmljdWx0eTogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vY29kZWZvcmNlcy5jb20vYXBpL3Byb2JsZW1zZXQucHJvYmxlbXNcIik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAoZGF0YS5zdGF0dXMgPT09IFwiT0tcIikge1xuICAgICAgcmV0dXJuIGRhdGEucmVzdWx0LnByb2JsZW1zXG4gICAgICAgIC5maWx0ZXIocHJvYmxlbSA9PiB7XG4gICAgICAgICAgLy8gRXhjbHVkZSBjb250ZXN0cyBBLCBCLCBhbmQgQ1xuICAgICAgICAgIGNvbnN0IGV4Y2x1ZGVkQ29udGVzdHMgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIl07XG4gICAgICAgICAgY29uc3QgaXNFeGNsdWRlZCA9IGV4Y2x1ZGVkQ29udGVzdHMuaW5jbHVkZXMocHJvYmxlbS5jb250ZXN0SWQpO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChpc0V4Y2x1ZGVkKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoZGlmZmljdWx0eSA9PT0gXCJlYXN5XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9ibGVtLnJhdGluZyAmJiBwcm9ibGVtLnJhdGluZyA8PSAxMjAwOyAvLyBFeGFtcGxlIHRocmVzaG9sZCBmb3IgZWFzeVxuICAgICAgICAgIH0gZWxzZSBpZiAoZGlmZmljdWx0eSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICAgICAgcmV0dXJuIHByb2JsZW0ucmF0aW5nICYmIHByb2JsZW0ucmF0aW5nID4gMTIwMCAmJiBwcm9ibGVtLnJhdGluZyA8PSAxNjAwOyAvLyBFeGFtcGxlIHRocmVzaG9sZCBmb3IgbWVkaXVtXG4gICAgICAgICAgfSBlbHNlIGlmIChkaWZmaWN1bHR5ID09PSBcImhhcmRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHByb2JsZW0ucmF0aW5nICYmIHByb2JsZW0ucmF0aW5nID4gMTYwMDsgLy8gRXhhbXBsZSB0aHJlc2hvbGQgZm9yIGhhcmRcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7IC8vIElmIG5vIGRpZmZpY3VsdHkgaXMgc3BlY2lmaWVkLCByZXR1cm4gYWxsIHByb2JsZW1zXG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAocHJvYmxlbSA9PiAoe1xuICAgICAgICAgIG5hbWU6IHByb2JsZW0ubmFtZSxcbiAgICAgICAgICB1cmw6IGBodHRwczovL2NvZGVmb3JjZXMuY29tL3Byb2JsZW1zZXQvcHJvYmxlbS8ke3Byb2JsZW0uY29udGVzdElkfS8ke3Byb2JsZW0uaW5kZXh9YCxcbiAgICAgICAgICBkaWZmaWN1bHR5OiBwcm9ibGVtLnJhdGluZyB8fCBcIlVucmF0ZWRcIixcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgQ29kZWZvcmNlcyBwcm9ibGVtczpcIiwgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCB7IGdlbmVyYXRlUmFuZG9tUHJvYmxlbSBhcyBnZW5lcmF0ZVJhbmRvbUxlZXRDb2RlUHJvYmxlbSB9O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TGVldENvZGVQcm9ibGVtRnJvbVByb2JsZW1TZXQoXG4gIGRpZmZpY3VsdHk6IHN0cmluZyxcbiAgcHJvYmxlbVNldDogc3RyaW5nXG4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbmNsdWRlUHJlbWl1bSA9IGF3YWl0IHN0b3JhZ2UuZ2V0SW5jbHVkZVByZW1pdW0oKTtcbiAgICBcbiAgICBjb25zdCBwcm9ibGVtU2V0VVJMczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICAgIGFsbE5lZXRjb2RlOiBcImxlZXRjb2RlLXByb2JsZW1zL2FsbFByb2JsZW1zLmpzb25cIixcbiAgICAgIE5lZXRDb2RlMTUwOiBcImxlZXRjb2RlLXByb2JsZW1zL25lZXRDb2RlMTUwUHJvYmxlbXMuanNvblwiLFxuICAgICAgQmxpbmQ3NTogXCJsZWV0Y29kZS1wcm9ibGVtcy9ibGluZDc1UHJvYmxlbXMuanNvblwiLFxuICAgICAgbWV0YVRvcDEwMDogXCJsZWV0Y29kZS1wcm9ibGVtcy9tZXRhVG9wMTAwLmpzb25cIlxuICAgIH07XG5cbiAgICBpZiAoIXByb2JsZW1TZXRVUkxzW3Byb2JsZW1TZXRdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcHJvYmxlbSBzZXQ6ICR7cHJvYmxlbVNldH1gKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChjaHJvbWUucnVudGltZS5nZXRVUkwocHJvYmxlbVNldFVSTHNbcHJvYmxlbVNldF0pKTtcbiAgICBjb25zdCBsZWV0Q29kZVByb2JsZW1zOiBKU09OTGVldENvZGVQcm9ibGVtW10gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIFxuICAgIGNvbnN0IGZpbHRlcmVkTGVldENvZGVQcm9ibGVtczogSlNPTkxlZXRDb2RlUHJvYmxlbVtdID1cbiAgICAgIGxlZXRDb2RlUHJvYmxlbXMuZmlsdGVyKChwcm9ibGVtKSA9PiB7XG4gICAgICAgIGlmICghcHJvYmxlbS5ocmVmLmVuZHNXaXRoKFwiL1wiKSkge1xuICAgICAgICAgIHByb2JsZW0uaHJlZiArPSBcIi9cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIChpbmNsdWRlUHJlbWl1bSB8fCAhcHJvYmxlbS5pc1ByZW1pdW0pICYmXG4gICAgICAgICAgKGRpZmZpY3VsdHkgPT0gXCJhbGxcIiB8fFxuICAgICAgICAgICAgcHJvYmxlbS5kaWZmaWN1bHR5LnRvTG93ZXJDYXNlKCkgPT09IGRpZmZpY3VsdHkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlsdGVyZWRMZWV0Q29kZVByb2JsZW1zLmxlbmd0aCk7XG4gICAgY29uc3QgcmFuZG9tUHJvYmxlbSA9IGZpbHRlcmVkTGVldENvZGVQcm9ibGVtc1tyYW5kb21JbmRleF07XG4gICAgY29uc3QgcmFuZG9tUHJvYmxlbVVSTCA9IHJhbmRvbVByb2JsZW0uaHJlZjtcbiAgICBjb25zdCByYW5kb21Qcm9ibGVtTmFtZSA9IHJhbmRvbVByb2JsZW0udGV4dDtcbiAgICByZXR1cm4geyB1cmw6IHJhbmRvbVByb2JsZW1VUkwsIG5hbWU6IHJhbmRvbVByb2JsZW1OYW1lIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoTGVldENvZGVQcm9ibGVtcyA9IGFzeW5jIChkaWZmaWN1bHR5OiBzdHJpbmcsIHByb2JsZW1TZXQ6IHN0cmluZykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHByb2JsZW1zID0gYXdhaXQgZ2V0QWxsTGVldENvZGVQcm9ibGVtcyhkaWZmaWN1bHR5LCBwcm9ibGVtU2V0KTtcbiAgICAvLyBQcm9jZXNzIHRoZSBwcm9ibGVtcyBhcyBuZWVkZWRcbiAgICByZXR1cm4gcHJvYmxlbXM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIExlZXRDb2RlIHByb2JsZW1zOlwiLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7IC8vIFJldGhyb3cgdGhlIGVycm9yIGZvciBmdXJ0aGVyIGhhbmRsaW5nXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2JsZW1Gcm9tU2V0ID0gYXN5bmMgKGRpZmZpY3VsdHk6IHN0cmluZywgcHJvYmxlbVNldDogc3RyaW5nKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcHJvYmxlbSA9IGF3YWl0IGdldExlZXRDb2RlUHJvYmxlbUZyb21Qcm9ibGVtU2V0KGRpZmZpY3VsdHksIHByb2JsZW1TZXQpO1xuICAgIHJldHVybiBwcm9ibGVtO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcm9ibGVtIGZyb20gc2V0OlwiLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7IC8vIFJldGhyb3cgdGhlIGVycm9yIGZvciBmdXJ0aGVyIGhhbmRsaW5nXG4gIH1cbn07XG4iLCJpbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIkBwbGFzbW9ocS9zdG9yYWdlXCJcblxuY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKClcblxuZXhwb3J0IGNvbnN0IGdldFByb2JsZW1VcmwgPSBhc3luYyAoKSA9PiBhd2FpdCBzdG9yYWdlLmdldChcInByb2JsZW1VUkxcIilcbmV4cG9ydCBjb25zdCBnZXRQcm9ibGVtU2V0ID0gYXN5bmMgKCkgPT5cbiAgKGF3YWl0IHN0b3JhZ2UuZ2V0KFwicHJvYmxlbVNldHNcIikpID8/IFwiYWxsXCJcbmV4cG9ydCBjb25zdCBnZXREaWZmaWN1bHR5ID0gYXN5bmMgKCkgPT5cbiAgKGF3YWl0IHN0b3JhZ2UuZ2V0KFwiZGlmZmljdWx0eVwiKSkgPz8gXCJhbGxcIlxuZXhwb3J0IGNvbnN0IGdldEluY2x1ZGVQcmVtaXVtID0gYXN5bmMgKCkgPT5cbiAgQm9vbGVhbihhd2FpdCBzdG9yYWdlLmdldChcImluY2x1ZGVQcmVtaXVtXCIpKSA/PyBmYWxzZVxuZXhwb3J0IGNvbnN0IGdldFByb2JsZW1Tb2x2ZWQgPSBhc3luYyAoKSA9PlxuICBCb29sZWFuKGF3YWl0IHN0b3JhZ2UuZ2V0KFwibGVldENvZGVQcm9ibGVtU29sdmVkXCIpKSA/PyBmYWxzZVxuZXhwb3J0IGNvbnN0IGluaXRpYXRlTG9hZGluZyA9IGFzeW5jICgpID0+IGF3YWl0IHN0b3JhZ2Uuc2V0KFwibG9hZGluZ1wiLCB0cnVlKVxuZXhwb3J0IGNvbnN0IHN0b3BMb2FkaW5nID0gYXN5bmMgKCkgPT4gYXdhaXQgc3RvcmFnZS5zZXQoXCJsb2FkaW5nXCIsIGZhbHNlKVxuZXhwb3J0IGNvbnN0IGdldEh5cGVyVG9ydHVyZU1vZGUgPSBhc3luYyAoKSA9PlxuICAhIShhd2FpdCBzdG9yYWdlLmdldChcImh5cGVyVG9ydHVyZU1vZGVcIikpXG5leHBvcnQgY29uc3QgZ2V0RW5hYmxlUmVkaXJlY3RPbkV2ZXJ5UHJvYmxlbSA9IGFzeW5jICgpID0+XG4gICEoYXdhaXQgc3RvcmFnZS5nZXQoXCJlbmFibGVSZWRpcmVjdE9uRXZlcnlQcm9ibGVtXCIpKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvYmxlbShcbiAgcHJvYmxlbTogeyB1cmw6IHN0cmluZzsgbmFtZTogc3RyaW5nIH0sXG4gIGlzU29sdmVkOiBib29sZWFuXG4pIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICBzdG9yYWdlLnNldChcInByb2JsZW1VUkxcIiwgcHJvYmxlbS51cmwpLFxuICAgIHN0b3JhZ2Uuc2V0KFwicHJvYmxlbU5hbWVcIiwgcHJvYmxlbS5uYW1lKSxcbiAgICBzdG9yYWdlLnNldChcInByb2JsZW1EYXRlXCIsIG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCkpLFxuICAgIHVwZGF0ZVByb2JsZW1Tb2x2ZWRTdGF0ZShpc1NvbHZlZClcbiAgXSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUVuYWJsZVJlZGlyZWN0T25FdmVyeVByb2JsZW0oZW5hYmxlZDogYm9vbGVhbikge1xuICBhd2FpdCBzdG9yYWdlLnNldChcImVuYWJsZVJlZGlyZWN0T25FdmVyeVByb2JsZW1cIiwgZW5hYmxlZClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBlcm1pc3Npb25zKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgYXdhaXQgc3RvcmFnZS5zZXQoXCJwZXJtaXNzaW9uc0VuYWJsZWRcIiwgZW5hYmxlZClcbn1cblxuLy8gVE9ETzogTWF5YmUgdGhpcyBuZWVkcyB0byBiZSBleHBvcnRlZCBmb3IgY2xhcml0eSAoaW5zdGVhZCBvZiBiZWluZyB1c2VkIGluIHVwZGF0ZVByb2JsZW0gYW5kIHVwZGF0ZVN0cmVhaylcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2JsZW1Tb2x2ZWRTdGF0ZShpc1NvbHZlZDogYm9vbGVhbikge1xuICBhd2FpdCBzdG9yYWdlLnNldChcImxlZXRDb2RlUHJvYmxlbVNvbHZlZFwiLCBpc1NvbHZlZClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExhc3RDb21wbGV0aW9uKCkge1xuICBjb25zdCBsYXN0Q29tcGxldGVkU3RyaW5nID0gYXdhaXQgc3RvcmFnZS5nZXQoXCJsYXN0Q29tcGxldGVkXCIpXG4gIC8vIFJldHVybnMgVW5peCBFcG9jaCBpZiBpdGVtIGlzIG51bGxcbiAgcmV0dXJuIGxhc3RDb21wbGV0ZWRTdHJpbmcgPyBuZXcgRGF0ZShsYXN0Q29tcGxldGVkU3RyaW5nKSA6IG5ldyBEYXRlKDApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTdHJlYWsoKSB7XG4gIGlmIChhd2FpdCBnZXRIeXBlclRvcnR1cmVNb2RlKCkpIHtcbiAgICAvLyBVcGRhdGUgaHlwZXIgdG9ydHVyZSBzdHJlYWtcbiAgICBjb25zdCBbSFRfYmVzdFN0cmVhaywgSFRfY3VycmVudFN0cmVha10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBzdG9yYWdlLmdldChcIkhUX2Jlc3RTdHJlYWtcIiksXG4gICAgICBzdG9yYWdlLmdldChcIkhUX2N1cnJlbnRTdHJlYWtcIilcbiAgICBdKVxuXG4gICAgY29uc3QgSFRfbmV3U3RyZWFrID0gKE51bWJlcihIVF9jdXJyZW50U3RyZWFrKSB8fCAwKSArIDFcbiAgICBjb25zdCBIVF9iZXN0ID0gTnVtYmVyKEhUX2Jlc3RTdHJlYWspIHx8IDBcblxuICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KFwiSFRfY3VycmVudFN0cmVha1wiLCBIVF9uZXdTdHJlYWspXG4gICAgLy8gSWYgbmV3IGh5cGVyIHRvcnR1cmUgc3RyZWFrIGhpZ2hlciB0aGFuIGJlc3QgaHlwZXIgdG9ydHVyZSBzdHJlYWssIHVwZGF0ZSBpdFxuICAgIGlmIChIVF9uZXdTdHJlYWsgPiBIVF9iZXN0KSBhd2FpdCBzdG9yYWdlLnNldChcIkhUX2Jlc3RTdHJlYWtcIiwgSFRfbmV3U3RyZWFrKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IFtfLCBsYXN0Q29tcGxldGlvbl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB1cGRhdGVQcm9ibGVtU29sdmVkU3RhdGUodHJ1ZSksXG4gICAgICBnZXRMYXN0Q29tcGxldGlvbigpXG4gICAgXSlcblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcbiAgICBpZiAobGFzdENvbXBsZXRpb24udG9EYXRlU3RyaW5nKCkgPT09IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCkpIHJldHVyblxuXG4gICAgY29uc3QgW2Jlc3RTdHJlYWssIGN1cnJlbnRTdHJlYWtdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgc3RvcmFnZS5nZXQoXCJiZXN0U3RyZWFrXCIpLFxuICAgICAgc3RvcmFnZS5nZXQoXCJjdXJyZW50U3RyZWFrXCIpXG4gICAgXSlcblxuICAgIGNvbnN0IG5ld1N0cmVhayA9IChOdW1iZXIoY3VycmVudFN0cmVhaykgfHwgMCkgKyAxXG4gICAgY29uc3QgYmVzdCA9IE51bWJlcihiZXN0U3RyZWFrKSB8fCAwXG5cbiAgICBhd2FpdCBzdG9yYWdlLnNldChcImN1cnJlbnRTdHJlYWtcIiwgbmV3U3RyZWFrKVxuICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KFwibGFzdENvbXBsZXRlZFwiLCBub3cudG9EYXRlU3RyaW5nKCkpXG4gICAgaWYgKG5ld1N0cmVhayA+IGJlc3QpIGF3YWl0IHN0b3JhZ2Uuc2V0KFwiYmVzdFN0cmVha1wiLCBuZXdTdHJlYWspXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0U3RyZWFrKCkge1xuICBhd2FpdCBzdG9yYWdlLnNldChcImN1cnJlbnRTdHJlYWtcIiwgMClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0SHlwZXJUb3J0dXJlU3RyZWFrKCkge1xuICBhd2FpdCBzdG9yYWdlLnNldChcIkhUX2N1cnJlbnRTdHJlYWtcIiwgMClcbn1cblxuZXhwb3J0ICogYXMgc3RvcmFnZSBmcm9tIFwic3RvcmFnZVwiXG4iLCJpbXBvcnQgbSBmcm9tXCJwaWZ5XCI7dmFyIGw9KCk9Pnt0cnl7bGV0IGU9KGdsb2JhbFRoaXMubmF2aWdhdG9yPy51c2VyQWdlbnQpLm1hdGNoKC8ob3BlcmF8Y2hyb21lfHNhZmFyaXxmaXJlZm94fG1zaWV8dHJpZGVudCg/PVxcLykpXFwvP1xccyooXFxkKykvaSl8fFtdO2lmKGVbMV09PT1cIkNocm9tZVwiKXJldHVybiBwYXJzZUludChlWzJdKTwxMDB8fGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWU/LmdldE1hbmlmZXN0KCk/Lm1hbmlmZXN0X3ZlcnNpb249PT0yfWNhdGNoe3JldHVybiExfXJldHVybiExfTt2YXIgbz1jbGFzc3sjcjsjdDtnZXQgcHJpbWFyeUNsaWVudCgpe3JldHVybiB0aGlzLiN0fSNlO2dldCBzZWNvbmRhcnlDbGllbnQoKXtyZXR1cm4gdGhpcy4jZX0jYTtnZXQgYXJlYSgpe3JldHVybiB0aGlzLiNhfWdldCBoYXNXZWJBcGkoKXt0cnl7cmV0dXJuIHR5cGVvZiB3aW5kb3c8XCJ1XCImJiEhd2luZG93LmxvY2FsU3RvcmFnZX1jYXRjaChlKXtyZXR1cm4gY29uc29sZS5lcnJvcihlKSwhMX19I3M9bmV3IE1hcDsjaTtnZXQgY29waWVkS2V5U2V0KCl7cmV0dXJuIHRoaXMuI2l9aXNDb3BpZWQ9ZT0+dGhpcy5oYXNXZWJBcGkmJih0aGlzLmFsbENvcGllZHx8dGhpcy5jb3BpZWRLZXlTZXQuaGFzKGUpKTsjbj0hMTtnZXQgYWxsQ29waWVkKCl7cmV0dXJuIHRoaXMuI259Z2V0RXh0U3RvcmFnZUFwaT0oKT0+Z2xvYmFsVGhpcy5icm93c2VyPy5zdG9yYWdlfHxnbG9iYWxUaGlzLmNocm9tZT8uc3RvcmFnZTtnZXQgaGFzRXh0ZW5zaW9uQXBpKCl7dHJ5e3JldHVybiEhdGhpcy5nZXRFeHRTdG9yYWdlQXBpKCl9Y2F0Y2goZSl7cmV0dXJuIGNvbnNvbGUuZXJyb3IoZSksITF9fWlzV2F0Y2hTdXBwb3J0ZWQ9KCk9PnRoaXMuaGFzRXh0ZW5zaW9uQXBpO2tleU5hbWVzcGFjZT1cIlwiO2lzVmFsaWRLZXk9ZT0+ZS5zdGFydHNXaXRoKHRoaXMua2V5TmFtZXNwYWNlKTtnZXROYW1lc3BhY2VkS2V5PWU9PmAke3RoaXMua2V5TmFtZXNwYWNlfSR7ZX1gO2dldFVubmFtZXNwYWNlZEtleT1lPT5lLnNsaWNlKHRoaXMua2V5TmFtZXNwYWNlLmxlbmd0aCk7c2VyZGU9e3NlcmlhbGl6ZXI6SlNPTi5zdHJpbmdpZnksZGVzZXJpYWxpemVyOkpTT04ucGFyc2V9O2NvbnN0cnVjdG9yKHthcmVhOmU9XCJzeW5jXCIsYWxsQ29waWVkOnQ9ITEsY29waWVkS2V5TGlzdDpzPVtdLHNlcmRlOnI9e319PXt9KXt0aGlzLnNldENvcGllZEtleVNldChzKSx0aGlzLiNhPWUsdGhpcy4jbj10LHRoaXMuc2VyZGU9ey4uLnRoaXMuc2VyZGUsLi4ucn07dHJ5e3RoaXMuaGFzV2ViQXBpJiYodHx8cy5sZW5ndGg+MCkmJih0aGlzLiNlPXdpbmRvdy5sb2NhbFN0b3JhZ2UpfWNhdGNoe310cnl7dGhpcy5oYXNFeHRlbnNpb25BcGkmJih0aGlzLiNyPXRoaXMuZ2V0RXh0U3RvcmFnZUFwaSgpLGwoKT90aGlzLiN0PW0odGhpcy4jclt0aGlzLmFyZWFdLHtleGNsdWRlOltcImdldEJ5dGVzSW5Vc2VcIl0sZXJyb3JGaXJzdDohMX0pOnRoaXMuI3Q9dGhpcy4jclt0aGlzLmFyZWFdKX1jYXRjaHt9fXNldENvcGllZEtleVNldChlKXt0aGlzLiNpPW5ldyBTZXQoZSl9cmF3R2V0QWxsPSgpPT50aGlzLiN0Py5nZXQoKTtnZXRBbGw9YXN5bmMoKT0+e2xldCBlPWF3YWl0IHRoaXMucmF3R2V0QWxsKCk7cmV0dXJuIE9iamVjdC5lbnRyaWVzKGUpLmZpbHRlcigoW3RdKT0+dGhpcy5pc1ZhbGlkS2V5KHQpKS5yZWR1Y2UoKHQsW3Mscl0pPT4odFt0aGlzLmdldFVubmFtZXNwYWNlZEtleShzKV09cix0KSx7fSl9O2NvcHk9YXN5bmMgZT0+e2xldCB0PWU9PT12b2lkIDA7aWYoIXQmJiF0aGlzLmNvcGllZEtleVNldC5oYXMoZSl8fCF0aGlzLmFsbENvcGllZHx8IXRoaXMuaGFzRXh0ZW5zaW9uQXBpKXJldHVybiExO2xldCBzPXRoaXMuYWxsQ29waWVkP2F3YWl0IHRoaXMucmF3R2V0QWxsKCk6YXdhaXQgdGhpcy4jdC5nZXQoKHQ/Wy4uLnRoaXMuY29waWVkS2V5U2V0XTpbZV0pLm1hcCh0aGlzLmdldE5hbWVzcGFjZWRLZXkpKTtpZighcylyZXR1cm4hMTtsZXQgcj0hMTtmb3IobGV0IGEgaW4gcyl7bGV0IGk9c1thXSxuPXRoaXMuI2U/LmdldEl0ZW0oYSk7dGhpcy4jZT8uc2V0SXRlbShhLGkpLHJ8fD1pIT09bn1yZXR1cm4gcn07cmF3R2V0PWFzeW5jIGU9Pihhd2FpdCB0aGlzLnJhd0dldE1hbnkoW2VdKSlbZV07cmF3R2V0TWFueT1hc3luYyBlPT50aGlzLmhhc0V4dGVuc2lvbkFwaT9hd2FpdCB0aGlzLiN0LmdldChlKTplLmZpbHRlcih0aGlzLmlzQ29waWVkKS5yZWR1Y2UoKHQscyk9Pih0W3NdPXRoaXMuI2U/LmdldEl0ZW0ocyksdCkse30pO3Jhd1NldD1hc3luYyhlLHQpPT5hd2FpdCB0aGlzLnJhd1NldE1hbnkoe1tlXTp0fSk7cmF3U2V0TWFueT1hc3luYyBlPT4odGhpcy4jZSYmT2JqZWN0LmVudHJpZXMoZSkuZmlsdGVyKChbdF0pPT50aGlzLmlzQ29waWVkKHQpKS5mb3JFYWNoKChbdCxzXSk9PnRoaXMuI2Uuc2V0SXRlbSh0LHMpKSx0aGlzLmhhc0V4dGVuc2lvbkFwaSYmYXdhaXQgdGhpcy4jdC5zZXQoZSksbnVsbCk7Y2xlYXI9YXN5bmMoZT0hMSk9PntlJiZ0aGlzLiNlPy5jbGVhcigpLGF3YWl0IHRoaXMuI3QuY2xlYXIoKX07cmF3UmVtb3ZlPWFzeW5jIGU9Pnthd2FpdCB0aGlzLnJhd1JlbW92ZU1hbnkoW2VdKX07cmF3UmVtb3ZlTWFueT1hc3luYyBlPT57dGhpcy4jZSYmZS5maWx0ZXIodGhpcy5pc0NvcGllZCkuZm9yRWFjaCh0PT50aGlzLiNlLnJlbW92ZUl0ZW0odCkpLHRoaXMuaGFzRXh0ZW5zaW9uQXBpJiZhd2FpdCB0aGlzLiN0LnJlbW92ZShlKX07cmVtb3ZlQWxsPWFzeW5jKCk9PntsZXQgZT1hd2FpdCB0aGlzLmdldEFsbCgpLHQ9T2JqZWN0LmtleXMoZSk7YXdhaXQgdGhpcy5yZW1vdmVNYW55KHQpfTt3YXRjaD1lPT57bGV0IHQ9dGhpcy5pc1dhdGNoU3VwcG9ydGVkKCk7cmV0dXJuIHQmJnRoaXMuI28oZSksdH07I289ZT0+e2ZvcihsZXQgdCBpbiBlKXtsZXQgcz10aGlzLmdldE5hbWVzcGFjZWRLZXkodCkscj10aGlzLiNzLmdldChzKT8uY2FsbGJhY2tTZXR8fG5ldyBTZXQ7aWYoci5hZGQoZVt0XSksci5zaXplPjEpY29udGludWU7bGV0IGE9KGksbik9PntpZihuIT09dGhpcy5hcmVhfHwhaVtzXSlyZXR1cm47bGV0IGg9dGhpcy4jcy5nZXQocyk7aWYoIWgpdGhyb3cgbmV3IEVycm9yKGBTdG9yYWdlIGNvbW1zIGRvZXMgbm90IGV4aXN0IGZvciBuc0tleTogJHtzfWApO1Byb21pc2UuYWxsKFt0aGlzLnBhcnNlVmFsdWUoaVtzXS5uZXdWYWx1ZSksdGhpcy5wYXJzZVZhbHVlKGlbc10ub2xkVmFsdWUpXSkudGhlbigoW3ksZF0pPT57Zm9yKGxldCBwIG9mIGguY2FsbGJhY2tTZXQpcCh7bmV3VmFsdWU6eSxvbGRWYWx1ZTpkfSxuKX0pfTt0aGlzLiNyLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihhKSx0aGlzLiNzLnNldChzLHtjYWxsYmFja1NldDpyLGxpc3RlbmVyOmF9KX19O3Vud2F0Y2g9ZT0+e2xldCB0PXRoaXMuaXNXYXRjaFN1cHBvcnRlZCgpO3JldHVybiB0JiZ0aGlzLiNjKGUpLHR9OyNjKGUpe2ZvcihsZXQgdCBpbiBlKXtsZXQgcz10aGlzLmdldE5hbWVzcGFjZWRLZXkodCkscj1lW3RdLGE9dGhpcy4jcy5nZXQocyk7YSYmKGEuY2FsbGJhY2tTZXQuZGVsZXRlKHIpLGEuY2FsbGJhY2tTZXQuc2l6ZT09PTAmJih0aGlzLiNzLmRlbGV0ZShzKSx0aGlzLiNyLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihhLmxpc3RlbmVyKSkpfX11bndhdGNoQWxsPSgpPT50aGlzLiNoKCk7I2goKXt0aGlzLiNzLmZvckVhY2goKHtsaXN0ZW5lcjplfSk9PnRoaXMuI3Iub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKGUpKSx0aGlzLiNzLmNsZWFyKCl9YXN5bmMgZ2V0SXRlbShlKXtyZXR1cm4gdGhpcy5nZXQoZSl9YXN5bmMgZ2V0SXRlbXMoZSl7cmV0dXJuIGF3YWl0IHRoaXMuZ2V0TWFueShlKX1hc3luYyBzZXRJdGVtKGUsdCl7YXdhaXQgdGhpcy5zZXQoZSx0KX1hc3luYyBzZXRJdGVtcyhlKXthd2FpdCBhd2FpdCB0aGlzLnNldE1hbnkoZSl9YXN5bmMgcmVtb3ZlSXRlbShlKXtyZXR1cm4gdGhpcy5yZW1vdmUoZSl9YXN5bmMgcmVtb3ZlSXRlbXMoZSl7cmV0dXJuIGF3YWl0IHRoaXMucmVtb3ZlTWFueShlKX19LGc9Y2xhc3MgZXh0ZW5kcyBve2dldD1hc3luYyBlPT57bGV0IHQ9dGhpcy5nZXROYW1lc3BhY2VkS2V5KGUpLHM9YXdhaXQgdGhpcy5yYXdHZXQodCk7cmV0dXJuIHRoaXMucGFyc2VWYWx1ZShzKX07Z2V0TWFueT1hc3luYyBlPT57bGV0IHQ9ZS5tYXAodGhpcy5nZXROYW1lc3BhY2VkS2V5KSxzPWF3YWl0IHRoaXMucmF3R2V0TWFueSh0KSxyPWF3YWl0IFByb21pc2UuYWxsKE9iamVjdC52YWx1ZXMocykubWFwKHRoaXMucGFyc2VWYWx1ZSkpO3JldHVybiBPYmplY3Qua2V5cyhzKS5yZWR1Y2UoKGEsaSxuKT0+KGFbdGhpcy5nZXRVbm5hbWVzcGFjZWRLZXkoaSldPXJbbl0sYSkse30pfTtzZXQ9YXN5bmMoZSx0KT0+e2xldCBzPXRoaXMuZ2V0TmFtZXNwYWNlZEtleShlKSxyPXRoaXMuc2VyZGUuc2VyaWFsaXplcih0KTtyZXR1cm4gdGhpcy5yYXdTZXQocyxyKX07c2V0TWFueT1hc3luYyBlPT57bGV0IHQ9T2JqZWN0LmVudHJpZXMoZSkucmVkdWNlKChzLFtyLGFdKT0+KHNbdGhpcy5nZXROYW1lc3BhY2VkS2V5KHIpXT10aGlzLnNlcmRlLnNlcmlhbGl6ZXIoYSkscykse30pO3JldHVybiBhd2FpdCB0aGlzLnJhd1NldE1hbnkodCl9O3JlbW92ZT1hc3luYyBlPT57bGV0IHQ9dGhpcy5nZXROYW1lc3BhY2VkS2V5KGUpO3JldHVybiB0aGlzLnJhd1JlbW92ZSh0KX07cmVtb3ZlTWFueT1hc3luYyBlPT57bGV0IHQ9ZS5tYXAodGhpcy5nZXROYW1lc3BhY2VkS2V5KTtyZXR1cm4gYXdhaXQgdGhpcy5yYXdSZW1vdmVNYW55KHQpfTtzZXROYW1lc3BhY2U9ZT0+e3RoaXMua2V5TmFtZXNwYWNlPWV9O3BhcnNlVmFsdWU9YXN5bmMgZT0+e3RyeXtpZihlIT09dm9pZCAwKXJldHVybiB0aGlzLnNlcmRlLmRlc2VyaWFsaXplcihlKX1jYXRjaCh0KXtjb25zb2xlLmVycm9yKHQpfX19O2V4cG9ydHtvIGFzIEJhc2VTdG9yYWdlLGcgYXMgU3RvcmFnZX07XG4iLCJjb25zdCBwcm9jZXNzRnVuY3Rpb24gPSAoZnVuY3Rpb25fLCBvcHRpb25zLCBwcm94eSwgdW53cmFwcGVkKSA9PiBmdW5jdGlvbiAoLi4uYXJndW1lbnRzXykge1xuXHRjb25zdCBQID0gb3B0aW9ucy5wcm9taXNlTW9kdWxlO1xuXG5cdHJldHVybiBuZXcgUCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0aWYgKG9wdGlvbnMubXVsdGlBcmdzKSB7XG5cdFx0XHRhcmd1bWVudHNfLnB1c2goKC4uLnJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAob3B0aW9ucy5lcnJvckZpcnN0KSB7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdFswXSkge1xuXHRcdFx0XHRcdFx0cmVqZWN0KHJlc3VsdCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdC5zaGlmdCgpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAob3B0aW9ucy5lcnJvckZpcnN0KSB7XG5cdFx0XHRhcmd1bWVudHNfLnB1c2goKGVycm9yLCByZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhcmd1bWVudHNfLnB1c2gocmVzb2x2ZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMgPT09IHByb3h5ID8gdW53cmFwcGVkIDogdGhpcztcblx0XHRSZWZsZWN0LmFwcGx5KGZ1bmN0aW9uXywgc2VsZiwgYXJndW1lbnRzXyk7XG5cdH0pO1xufTtcblxuY29uc3QgZmlsdGVyQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwaWZ5KGlucHV0LCBvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSB7XG5cdFx0ZXhjbHVkZTogWy8uKyg/OlN5bmN8U3RyZWFtKSQvXSxcblx0XHRlcnJvckZpcnN0OiB0cnVlLFxuXHRcdHByb21pc2VNb2R1bGU6IFByb21pc2UsXG5cdFx0Li4ub3B0aW9ucyxcblx0fTtcblxuXHRjb25zdCBvYmplY3RUeXBlID0gdHlwZW9mIGlucHV0O1xuXHRpZiAoIShpbnB1dCAhPT0gbnVsbCAmJiAob2JqZWN0VHlwZSA9PT0gJ29iamVjdCcgfHwgb2JqZWN0VHlwZSA9PT0gJ2Z1bmN0aW9uJykpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgXFxgaW5wdXRcXGAgdG8gYmUgYSBcXGBGdW5jdGlvblxcYCBvciBcXGBPYmplY3RcXGAsIGdvdCBcXGAke2lucHV0ID09PSBudWxsID8gJ251bGwnIDogb2JqZWN0VHlwZX1cXGBgKTtcblx0fVxuXG5cdGNvbnN0IGZpbHRlciA9ICh0YXJnZXQsIGtleSkgPT4ge1xuXHRcdGxldCBjYWNoZWQgPSBmaWx0ZXJDYWNoZS5nZXQodGFyZ2V0KTtcblxuXHRcdGlmICghY2FjaGVkKSB7XG5cdFx0XHRjYWNoZWQgPSB7fTtcblx0XHRcdGZpbHRlckNhY2hlLnNldCh0YXJnZXQsIGNhY2hlZCk7XG5cdFx0fVxuXG5cdFx0aWYgKGtleSBpbiBjYWNoZWQpIHtcblx0XHRcdHJldHVybiBjYWNoZWRba2V5XTtcblx0XHR9XG5cblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4gPT4gKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJyB8fCB0eXBlb2Yga2V5ID09PSAnc3ltYm9sJykgPyBrZXkgPT09IHBhdHRlcm4gOiBwYXR0ZXJuLnRlc3Qoa2V5KTtcblx0XHRjb25zdCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuXHRcdGNvbnN0IHdyaXRhYmxlT3JDb25maWd1cmFibGVPd24gPSAoZGVzY3JpcHRvciA9PT0gdW5kZWZpbmVkIHx8IGRlc2NyaXB0b3Iud3JpdGFibGUgfHwgZGVzY3JpcHRvci5jb25maWd1cmFibGUpO1xuXHRcdGNvbnN0IGluY2x1ZGVkID0gb3B0aW9ucy5pbmNsdWRlID8gb3B0aW9ucy5pbmNsdWRlLnNvbWUoZWxlbWVudCA9PiBtYXRjaChlbGVtZW50KSkgOiAhb3B0aW9ucy5leGNsdWRlLnNvbWUoZWxlbWVudCA9PiBtYXRjaChlbGVtZW50KSk7XG5cdFx0Y29uc3Qgc2hvdWxkRmlsdGVyID0gaW5jbHVkZWQgJiYgd3JpdGFibGVPckNvbmZpZ3VyYWJsZU93bjtcblx0XHRjYWNoZWRba2V5XSA9IHNob3VsZEZpbHRlcjtcblx0XHRyZXR1cm4gc2hvdWxkRmlsdGVyO1xuXHR9O1xuXG5cdGNvbnN0IGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuXHRjb25zdCBwcm94eSA9IG5ldyBQcm94eShpbnB1dCwge1xuXHRcdGFwcGx5KHRhcmdldCwgdGhpc0FyZywgYXJncykge1xuXHRcdFx0Y29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KHRhcmdldCk7XG5cblx0XHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdFx0cmV0dXJuIFJlZmxlY3QuYXBwbHkoY2FjaGVkLCB0aGlzQXJnLCBhcmdzKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGlmaWVkID0gb3B0aW9ucy5leGNsdWRlTWFpbiA/IHRhcmdldCA6IHByb2Nlc3NGdW5jdGlvbih0YXJnZXQsIG9wdGlvbnMsIHByb3h5LCB0YXJnZXQpO1xuXHRcdFx0Y2FjaGUuc2V0KHRhcmdldCwgcGlmaWVkKTtcblx0XHRcdHJldHVybiBSZWZsZWN0LmFwcGx5KHBpZmllZCwgdGhpc0FyZywgYXJncyk7XG5cdFx0fSxcblxuXHRcdGdldCh0YXJnZXQsIGtleSkge1xuXHRcdFx0Y29uc3QgcHJvcGVydHkgPSB0YXJnZXRba2V5XTtcblxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1leHRlbmQtbmF0aXZlL25vLXVzZS1leHRlbmQtbmF0aXZlXG5cdFx0XHRpZiAoIWZpbHRlcih0YXJnZXQsIGtleSkgfHwgcHJvcGVydHkgPT09IEZ1bmN0aW9uLnByb3RvdHlwZVtrZXldKSB7XG5cdFx0XHRcdHJldHVybiBwcm9wZXJ0eTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KHByb3BlcnR5KTtcblxuXHRcdFx0aWYgKGNhY2hlZCkge1xuXHRcdFx0XHRyZXR1cm4gY2FjaGVkO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNvbnN0IHBpZmllZCA9IHByb2Nlc3NGdW5jdGlvbihwcm9wZXJ0eSwgb3B0aW9ucywgcHJveHksIHRhcmdldCk7XG5cdFx0XHRcdGNhY2hlLnNldChwcm9wZXJ0eSwgcGlmaWVkKTtcblx0XHRcdFx0cmV0dXJuIHBpZmllZDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHByb3BlcnR5O1xuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiBwcm94eTtcbn1cbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tIFwic3RvcmFnZVwiXG5pbXBvcnQgdHlwZSB7IEFQSUxlZXRDb2RlUHJvYmxlbSwgSlNPTkxlZXRDb2RlUHJvYmxlbSB9IGZyb20gXCJ0eXBlc1wiXG5cbmltcG9ydCB7IGdldFByb2JsZW1MaXN0RnJvbUxlZXRDb2RlQVBJIH0gZnJvbSBcIn5iYWNrZ3JvdW5kXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbExlZXRDb2RlUHJvYmxlbXMoXG4gIGRpZmZpY3VsdHk6IHN0cmluZyxcbiAgcHJvYmxlbVNldDogc3RyaW5nXG4pIHtcbiAgdHJ5IHtcbiAgICAvLyBSZW1vdmUgbGctIG9yIGFsbCBmcm9tIHN0cmluZyBmb3IgYmV0dGVyIGxvZ2ljIHByb2Nlc3NpbmdcbiAgICBjb25zdCBsZWV0Q29kZVByb2JsZW1zOiBBUElMZWV0Q29kZVByb2JsZW1bXSA9XG4gICAgICBhd2FpdCBnZXRQcm9ibGVtTGlzdEZyb21MZWV0Q29kZUFQSShcbiAgICAgICAgZGlmZmljdWx0eSxcbiAgICAgICAgcHJvYmxlbVNldD8uc2xpY2UoMykgfHwgXCJcIlxuICAgICAgKVxuICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlZXRDb2RlUHJvYmxlbXMubGVuZ3RoKVxuICAgIHdoaWxlIChsZWV0Q29kZVByb2JsZW1zW3JhbmRvbUluZGV4XS5wYWlkT25seSkge1xuICAgICAgcmFuZG9tSW5kZXgrK1xuICAgICAgcmFuZG9tSW5kZXggPVxuICAgICAgICAobGVldENvZGVQcm9ibGVtcy5sZW5ndGggKyByYW5kb21JbmRleCkgJSBsZWV0Q29kZVByb2JsZW1zLmxlbmd0aFxuICAgIH1cbiAgICBjb25zdCByYW5kb21Qcm9ibGVtID0gbGVldENvZGVQcm9ibGVtc1tyYW5kb21JbmRleF1cbiAgICAvLyBSZXBsYWNlIGFueXRoaW5nIHRoYXQgaXMgbm90IGEgc3RyaW5nIG9yIHdoaXRlc3BhY2Ugd2l0aCBcIlwiIHRoZW4gcmVwbGFjZSBlbXB0eSBzcGFjZXMgd2l0aCBcIi1cIlxuICAgIC8vRXJyb3Igd2l0aCBzb21lIHByb2JsZW1zIHdpdGggc3BlY2lhbCBjaGFyYWN0ZXJzIFRPRE86IEZpeCB0aGlzIGV4OiBub25kcmVjcmVhc2luZyBzdWJlcXVlbmNlIC0+IG5vbi1kZWNyZWFzaW5nLXN1YnNlcXVlbmNlXG4gICAgY29uc3QgcmFuZG9tUHJvYmxlbVVSTCA9XG4gICAgICBcImh0dHBzOi8vbGVldGNvZGUuY29tL3Byb2JsZW1zL1wiICsgcmFuZG9tUHJvYmxlbS50aXRsZVNsdWcgKyBcIi9cIlxuICAgIGNvbnN0IHJhbmRvbVByb2JsZW1OYW1lID0gcmFuZG9tUHJvYmxlbS50aXRsZVxuICAgIC8vIGF3YWl0IHN0b3JhZ2Uuc2V0KFwibG9hZGluZ1wiLCBmYWxzZSlcbiAgICBhd2FpdCBzdG9yYWdlLnN0b3BMb2FkaW5nKClcbiAgICByZXR1cm4geyB1cmw6IHJhbmRvbVByb2JsZW1VUkwsIG5hbWU6IHJhbmRvbVByb2JsZW1OYW1lIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRMZWV0Q29kZVByb2JsZW1Gcm9tUHJvYmxlbVNldChcbiAgZGlmZmljdWx0eTogc3RyaW5nLFxuICBwcm9ibGVtU2V0OiBzdHJpbmdcbikge1xuICB0cnkge1xuICAgIGNvbnN0IGluY2x1ZGVQcmVtaXVtID0gYXdhaXQgc3RvcmFnZS5nZXRJbmNsdWRlUHJlbWl1bSgpXG4gICAgLy8gVE9ETzogTmVlZCB0byBmaW5kIGEgd2F5IHRvIGZpbHRlciBvdXQgcHJlbWl1bSBwcm9ibGVtcyBmb3IgdGhlc2UgSlNPTiBmaWxlc1xuICAgIGNvbnN0IHByb2JsZW1TZXRVUkxzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgICAgYWxsTmVldGNvZGU6IFwibGVldGNvZGUtcHJvYmxlbXMvYWxsUHJvYmxlbXMuanNvblwiLFxuICAgICAgTmVldENvZGUxNTA6IFwibGVldGNvZGUtcHJvYmxlbXMvbmVldENvZGUxNTBQcm9ibGVtcy5qc29uXCIsXG4gICAgICBCbGluZDc1OiBcImxlZXRjb2RlLXByb2JsZW1zL2JsaW5kNzVQcm9ibGVtcy5qc29uXCIsXG4gICAgICBtZXRhVG9wMTAwOiBcImxlZXRjb2RlLXByb2JsZW1zL21ldGFUb3AxMDAuanNvblwiXG4gICAgfVxuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKHByb2JsZW1TZXRVUkxzW3Byb2JsZW1TZXRdKSlcbiAgICBjb25zdCBsZWV0Q29kZVByb2JsZW1zOiBKU09OTGVldENvZGVQcm9ibGVtW10gPSBhd2FpdCByZXMuanNvbigpXG4gICAgY29uc3QgZmlsdGVyZWRMZWV0Q29kZVByb2JsZW1zOiBKU09OTGVldENvZGVQcm9ibGVtW10gPVxuICAgICAgbGVldENvZGVQcm9ibGVtcy5maWx0ZXIoKHByb2JsZW0pID0+IHtcbiAgICAgICAgaWYgKCFwcm9ibGVtLmhyZWYuZW5kc1dpdGgoXCIvXCIpKSB7XG4gICAgICAgICAgcHJvYmxlbS5ocmVmICs9IFwiL1wiXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAoaW5jbHVkZVByZW1pdW0gfHwgIXByb2JsZW0uaXNQcmVtaXVtKSAmJlxuICAgICAgICAgIChkaWZmaWN1bHR5ID09IFwiYWxsXCIgfHxcbiAgICAgICAgICAgIHByb2JsZW0uZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpID09PSBkaWZmaWN1bHR5LnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKFxuICAgICAgTWF0aC5yYW5kb20oKSAqIGZpbHRlcmVkTGVldENvZGVQcm9ibGVtcy5sZW5ndGhcbiAgICApXG4gICAgY29uc3QgcmFuZG9tUHJvYmxlbSA9IGZpbHRlcmVkTGVldENvZGVQcm9ibGVtc1tyYW5kb21JbmRleF1cbiAgICBjb25zdCByYW5kb21Qcm9ibGVtVVJMID0gcmFuZG9tUHJvYmxlbS5ocmVmXG4gICAgY29uc3QgcmFuZG9tUHJvYmxlbU5hbWUgPSByYW5kb21Qcm9ibGVtLnRleHRcbiAgICByZXR1cm4geyB1cmw6IHJhbmRvbVByb2JsZW1VUkwsIG5hbWU6IHJhbmRvbVByb2JsZW1OYW1lIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMubWFwIn0=
 globalThis.define=__define;  })(globalThis.define);