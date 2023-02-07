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
    if (err) throw err;
    newData = Math.round(Number(data) + getRandomArbitrary(0, interval));
    console.log("checksum", newData);
    fs.writeFile("date.txt", newData.toString(), (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
      console.log(dateFormat(newData, "ddd mmm d H:MM:ss yyyy"));
    });
  });

  console.log("testnew");
};

readWrite();

console.log(dateFormat(1649330110000, "ddd mmm d h:MM:ss yyyy"));
const commitMessage = "this commit";

const commmitDate = `${commitMessage}

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      ${newData} +0200
#
# On branch main
# Your branch is up to date with 'origin/main'.
#
# No changes`;

const gitAdder = async () => {
  console.log("test");
  await git.add(".");
  await git.commit("new file commit");
  await git.push("origin", "main");
};

gitAdder();

setTimeout(() => {}, 2000);
