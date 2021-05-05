import { reset } from "./Utils.js";
import { signOut } from "../Firebase/Services.js";

export function Home() {
  reset();
  const template = document.createElement("div");
  template.insertAdjacentHTML(
    "afterbegin",
    `<div id="container" class"form">
        <img class="logo" src="./assets/gleam.svg" alt="Gleam logo">
        <p class="copy">Posting...</p>
        <div class="btns-container-mobile">
          <button id="signOut" class="button_general">Vemos!!</button>
      </div>
    </div>`
  );
  return template;
}
export function userOut() {
  const logOut = document.querySelector("#signOut");
  logOut.addEventListener("click", (e) => {
    e.preventDefault();
    signOut();
  });
}
