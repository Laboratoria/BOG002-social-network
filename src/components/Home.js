import { reset } from "./Utils.js";
import { signOut } from "../Firebase/Services.js";

export function Home() {
  reset();
  const template = document.createElement("div");
  template.insertAdjacentHTML(
    "afterbegin",
    `<header class="headerHome">
      <div>
      <img class="logoHome" src="./assets/LogoHome.svg" alt="Gleam logo">
      </div>
      <div>
      <img class="logoMenu" src="./assets/Menu.svg" alt="Gleam logo">
      </div>
     </header>
      <div id="container" class="posts"> 
      </div>
      <footer class="navBar">
      <!-- nav bar -->
      <div>
      <a href="#/"><img class="logo-Home" src=./assets/Home.svg alt="arrow"></a>
      </div>
      <div>
      <a href="#/"><img class="logo-Post" src=./assets/Post.svg alt="arrow"></a>
      </div>
      <div>
      <a href="#/"><img class="logo-Profile" src=./assets/Profile.svg alt="arrow"></a>
      </div>
      </footer>
    `
  );
  return template;
}
/*<div class="btns-container-mobile">
          <button id="signOut" class="button_general">LogOut</button>
        </div>*/

export function userOut() {
  const logOut = document.querySelector("#signOut");
  logOut.addEventListener("click", (e) => {
    e.preventDefault();
    signOut();
  });
}
