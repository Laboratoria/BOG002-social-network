import { reset } from "./Utils.js";

export function Loading() {
  reset();
  const template = document.createElement("div");
  const grid = document.querySelector(".grid");
  grid.setAttribute("id", "template");
  template.setAttribute("id", "load");
  setTimeout(function () {
    window.location = "#/landing";
  }, 2000);
  return template;
}
