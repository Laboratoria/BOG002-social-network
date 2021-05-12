import { reset } from "./Utils.js";
// import { signOut } from "../Firebase/Services.js";

export function Home() {
  reset();
  const template = document.createElement("div");
  template.setAttribute("id", "home");
  template.insertAdjacentHTML(
    "afterbegin",
    `<header class="headerHome">
      <div>
        <img class="logoHome" src="./assets/LogoHome.svg" alt="Gleam logo">
      </div>
      <div id="hamburger_menu">
        <button>
          <span class="top_line"></span>
          <span class="middle_line"></span>
          <span class="bottom_line"></span>
        </button>
      </div>
    </header>
    <div id="container" class="posts"> 
    </div>
    <footer class="navBar">
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

// export function userOut() {
//   const logOut = document.querySelector("#signOut");
//   logOut.addEventListener("click", (e) => {
//     e.preventDefault();
//     signOut();
//   });
// }

export function homeListener() {
  const nav = document.querySelector("#hamburger_menu button");
  nav.addEventListener("click", (e) => {
    nav.classList.toggle("open");
  });
}
