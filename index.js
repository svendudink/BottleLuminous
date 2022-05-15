import simpleGit from "simple-git";

import jsonfile from "jsonfile";

simpleGit()
  .add("C:/Users/Razer Blade/Documents/gitf/Bottle-Luminous")
  .commit("next commit")
  .push("origin", "start");
