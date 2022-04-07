import { simpleGit, CleanOptions } from "simple-git";

simpleGit().clean(CleanOptions.FORCE);

simpleGit().add(".").commit("next commit").push("origin", "main");
