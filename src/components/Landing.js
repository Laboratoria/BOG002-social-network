import { reset } from "./Utils.js";

export function Landing() {
  reset();
  const template = document.createElement("div");
  template.insertAdjacentHTML(
    "afterbegin",
    `<div id="container" class"form">
      <img class="logo" src="./assets/gleam.svg" alt="Gleam logo">
        <p class="copy"> Welcome, we're the best and inclusive app in the world just 
        created for your Freedom, inclusion, and love. </p>
      <div class="btns-container-mobile">
          <button id="signUp" class="button_general">Enjoy Gleam</button>
          <button id="logIn">Log In</button>
      </div>
    </div> `;
  );
  return template;
}

export function random() {
  const btnRegister = document.getElementById("signUp");
  btnRegister.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("#/register");
  });

  const btnLogin = document.getElementById("logIn");
  btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("#/login");
  });
}
