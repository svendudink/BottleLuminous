import { simpleGit, CleanOptions } from "simple-git";

simpleGit().clean(CleanOptions.FORCE);

const options = {
  baseDir: process.cwd(),
  binary: "git",
  maxConcurrentProcesses: 6,
  trimmed: false,
};

simpleGit().add(".").commit("next commit").push("origin", "main");
