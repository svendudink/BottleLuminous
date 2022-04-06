import { simpleGit, CleanOptions } from "simple-git";
import dateFormat, { masks } from "dateformat";
import fs from "fs";

let newData = "";

const options = {
  baseDir: process.cwd(),
  binary: "git",
  maxConcurrentProcesses: 6,
  trimmed: false,
};
const git = simpleGit(options);

const interval = 28800000;
//get random number
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const readWrite = async () => {
  fs.readFile("date.txt", "utf-8", (err, data) => {
    if (data === NaN) {
      console.log(crash);
    }
    if (err) throw err;
    newData = Math.round(Number(data) + getRandomArbitrary(0, interval));
    console.log("checksum", newData);
    fs.writeFile("date.txt", newData.toString(), (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
      console.log(dateFormat(newData, "ddd mmm d H:MM:ss yyyy"));
    });
  });
};

const commitMessage = "new commit";
const branch = "mainPage";
const push = "false";

readWrite();

setTimeout(() => {
  const DATE = dateFormat(newData, "ddd mmm d H:MM:ss yyyy");
  console.log("testable date", DATE);
  const commitMessage = "this commit";

  const commitDate = `${commitMessage}

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      ${DATE} +0200
#
# On branch main
# Your branch is up to date with 'origin/main'.
#
# No changes`;

  fs.writeFile("./.git/COMMIT_EDITMSG", commitDate, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });

  const gitAdder = async () => {
    console.log("test");
    if (push) {
      await git.add(".");
      await git.commit("next commit bugfix", { "--date": DATE });
      await git.push("origin", branch);
    } else {
      console.log("push is off");
    }
  };

  setTimeout(() => {
    gitAdder();
  }, 500);
}, 500);
