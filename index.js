import { simpleGit, CleanOptions } from "simple-git";

simpleGit().clean(CleanOptions.FORCE);

const options = {
  baseDir: process.cwd(),
  binary: "git",
  maxConcurrentProcesses: 6,
  trimmed: false,
};
const git = simpleGit(options);

`Merge branch 'main' of https://github.com/svendudink/BottleLuminous

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Wed May 18 12:19:33 2022 +0200
#
# On branch main
# Your branch is up to date with 'origin/main'.
#
# No changes`;

const gitAdder = async () => {
  console.log("test");
  await git.add(".");
  await git.commit("testingGitcommit");
  await git.push("origin", "main");
};

gitAdder();
