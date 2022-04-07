import { simpleGit, CleanOptions } from "simple-git";

simpleGit().clean(CleanOptions.FORCE);

const options = {
  baseDir: process.cwd(),
  binary: "git",
  maxConcurrentProcesses: 6,
  trimmed: false,
};
const git = simpleGit(options);

// simpleGit().add(".").commit("next commit").push("origin", "main");

const gitAdder = async () => {
  await git.add(".");
  await git.commit("testingGitcommit");
  await git.push("origin", "main");
};

gitAdder();
