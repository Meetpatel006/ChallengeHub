import { useStorage } from "@plasmohq/storage/hook";

import {
  handleRedirectRule,
  toggleUrlListener,
  updateStorage,
} from "~background";
import BackIcon from "./BackIcon";
import SettingLabel from "./SettingLabel";
import { useEffect } from "react";
import { getDifficulty } from "~storage";

const SettingDrawer = ({ close, setClose }) => {
  // Storage hooks for various settings
  const [problemSets, setProblemSets] = useStorage<string>("problemSets", "all");
  const [difficulty, setDifficulty] = useStorage<string>("difficulty", "all");
  const [codeforcesDifficulty, setCodeforcesDifficulty] = useStorage<string>("codeforcesDifficulty", "all");
  const [leetcodeProblemSolved] = useStorage<boolean>("leetCodeProblemSolved");
  const [includePremium, setIncludePremium] = useStorage<boolean>("includePremium", false);
  const [enableRedirect, setEnableRedirect] = useStorage<boolean>("enableRedirectOnEveryProblem");
  const [hyperTortureMode, setHyperTortureMode] = useStorage<boolean>("hyperTortureMode");
  const [, setHTcurrentStreak] = useStorage<number>("HT_currentStreak");
  const [problemsToSolve, setProblemsToSolve] = useStorage<number>("problemsToSolve", 1); // Default to 1 problem to solve

  // Prevent mouse scroll wheel from changing number input
  useEffect(() => {
    const input = document.querySelector("input[type='number']");
    if (input) {
      const preventScroll = (e) => e.preventDefault();
      input.addEventListener("wheel", preventScroll);
      return () => input.removeEventListener("wheel", preventScroll);
    }
  }, []);

  // Function to check if the value is positive
  const checkPositiveValue = (value) => {
    const parsedValue = Number(value);
    return parsedValue >= 1 ? parsedValue : 1; // Return 1 if the value is less than 1
  };

  // Function to save settings
  const saveSettings = async () => {
    const validProblemsToSolve = checkPositiveValue(problemsToSolve);
    await Promise.all([
      setProblemsToSolve(validProblemsToSolve),
      updateStorage(difficulty),
      setEnableRedirect(enableRedirect),
      setIncludePremium(includePremium),
      setHyperTortureMode(hyperTortureMode),
      setDifficulty(difficulty),
      setCodeforcesDifficulty(codeforcesDifficulty),
      setProblemSets(problemSets),
    ]);

    alert("All settings saved!");
  };

  // Function to reset settings to default values
  const resetSettings = async () => {
    const defaultValues = {
      problemSets: "all",
      difficulty: "all",
      codeforcesDifficulty: "all",
      includePremium: false,
      enableRedirect: false,
      hyperTortureMode: false,
      problemsToSolve: 1,
    };

    await Promise.all([
      setProblemSets(defaultValues.problemSets),
      setDifficulty(defaultValues.difficulty),
      setCodeforcesDifficulty(defaultValues.codeforcesDifficulty),
      setIncludePremium(defaultValues.includePremium),
      setEnableRedirect(defaultValues.enableRedirect),
      setHyperTortureMode(defaultValues.hyperTortureMode),
      setProblemsToSolve(defaultValues.problemsToSolve),
    ]);

    alert("Settings have been reset to default values!");
  };

  const settingList = [
    {
      name: "Disable the torture",
      description: "Click to disable/enable redirects",
      checkboxProps: {
        checked: enableRedirect ?? false,
        handleChange: async (e) => {
          setEnableRedirect(e.target.checked);
          handleRedirectRule();
        },
      },
    },
    {
      name: "Problem Sets",
      description: "Choose the Leetcode and Codeforces problems you'd like",
      dropdownProps: {
        options: {
          all: "All Leetcode Problems",
          allNeetcode: "All Neetcode Problems",
          NeetCode150: "Neetcode 150",
          Blind75: "Blind 75",
          metaTop100: "Meta Top 100",
          "lg-5htp6xyg": "LeetCode Curated SQL 70",
          "lg-79h8rn6": "Top 100 Liked Questions",
          "lg-wpwgkgt": "Top Interview Questions",
          "lg-o9exaktc": "Tayomide's Questions",
          codeforcesProblem: "Codeforces Problem",  // New option
        },
        defaultValue: problemSets,
        handleChange: async (e) => {
          setProblemSets(e.target.value);
          if (!leetcodeProblemSolved) {
            await updateStorage(await getDifficulty());
          }
        },
      },
    },
    {
      name: "Problem Difficulty",
      description: "Choose the Leetcode difficulty you'd like",
      dropdownProps: {
        options: {
          all: "All difficulties",
          EASY: "Easy",
          MEDIUM: "Medium",
          HARD: "Hard",
        },
        defaultValue: difficulty,
        handleChange: async (e) => {
          setDifficulty(e.target.value);
          if (!leetcodeProblemSolved) {
            await updateStorage(await getDifficulty());
          }
        },
      },
    },
    {
      name: "Codeforces Difficulty",
      description: "Choose the Codeforces difficulty you'd like",
      dropdownProps: {
        options: {
          all: "All difficulties",
          easy: "Easy",
          medium: "Medium",
          hard: "Hard",
        },
        defaultValue: codeforcesDifficulty,
        handleChange: async (e) => {
          setCodeforcesDifficulty(e.target.value);
          if (!leetcodeProblemSolved) {
            await updateStorage(await getDifficulty());
          }
        },
      },
    },
    {
      name: "Include Premium Problems",
      description: "Toggle whether to include premium problems",
      checkboxProps: {
        checked: includePremium ?? false,
        handleChange: async (e) => {
          setIncludePremium(e.target.checked);
          if (!leetcodeProblemSolved) {
            await updateStorage(await getDifficulty());
          }
        },
      },
    },
    {
      name: 'Enable "Hyper Torture" mode 🤓',
      description: "Toggle mode that forces you to solve a problem every time you open a new page",
      checkboxProps: {
        checked: hyperTortureMode ?? false,
        handleChange: async (e) => {
          setHTcurrentStreak(0);
          setHyperTortureMode(e.target.checked);
          await updateStorage(await getDifficulty());
          await toggleUrlListener(e.target.checked);
        },
      },
    },
    {
      name: "Number of problems to solve",
      description: "Choose the amount of Leetcode problems you'd like to solve before being able to access websites",
      inputProps: {
        type: "number",
        value: problemsToSolve ?? 1, // Default to 1 if not set
        min: 1, // Set HTML min attribute to prevent negative values
        handleChange: async (e) => {
          const value = e.target.value;
          setProblemsToSolve(checkPositiveValue(value)); // Ensure positive value
          await updateStorage(await getDifficulty());
        },
      },
    },
  ];

  return (
    <div className={["drawer", close ? "" : "opened"].join(" ")}>
      <nav>
        <button onClick={() => setClose(!close)}>
          <BackIcon />
        </button>
        <h1>Settings</h1>
      </nav>
      <ul className="setting-labels">
        {leetcodeProblemSolved && !hyperTortureMode && (
          <p className="settings-problem-solved">
            Congrats you solved your problem today, these settings will be applied tomorrow
          </p>
        )}
        {settingList.map((settingProps, key) => (
          <li key={key}>
            <SettingLabel {...settingProps} />
          </li>
        ))}
      </ul>
      <div className="button-container">
        <button className="save-button" onClick={saveSettings}>
          Save
        </button>
        <button className="reset-button" onClick={resetSettings}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default SettingDrawer;
