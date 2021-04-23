import { reset } from "./Utils.js";
export function Landing() {
  const template = document.createElement("div");
  template.insertAdjacentHTML(
    "afterbegin",
    `<div id="container">
      <img src="./assets/gleam.svg" alt="Gleam logo">
      <div class="btns-container-mobile">
          <button id="signUp">Enjoy Gleam</button>
          <button id="logIn">Log In</button>
      </div>
    </div>
    `
  );
  return template;
}

export function random() {
  const btnRegister = document.getElementById("signUp");
  btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("#/register");
  });
}
