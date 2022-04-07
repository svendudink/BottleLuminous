import simpleGit from "simple-git";

import jsonfile from "jsonfile";

simpleGit().add(".").commit("next commit").push("origin", "main");
