import { reset, homeListener } from "./Utils.js";

export function Post() {
  reset();
  const templatePost = document.createElement("div");
  templatePost.setAttribute("id", "home");
  templatePost.insertAdjacentHTML(
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
      <nav class="menuppal">
        <ul>
          <li><a href="#">Opcion 1</a></li>
          <li><a href="#">Opcion 2</a></li>
          <li><a href="#">Opcion 3</a></li>
          <li><a href="#">Opcion 4</a></li>
        </ul>
      </nav>
    </header>
    <div id="container" class="posts">
    <div class="posts"> 
        <label id="labelPost"><button id="btnArrow"><img id="arrow" src = "./assets/post-arrow.svg"></button> Post </label>
        <input type = "file" id = "file" hidden>
        <label for="file" id = "labelImage"> <img id="upload" src = "./assets/logo-image.svg"> Upload Image </label>
        <textarea  placeholder = "Tell us what you have in mind …" id = "addText"></textarea>
        <button id = "addPost"> Add Post </button>
    </div>
    </div>
    <footer class="navBar">
        <div>
          <a href="#/home"><img class="logo-Home" src=./assets/Home.svg alt="arrow"></a>
        </div>
        <div>
          <a href="#/post"><img class="logo-Post" src=./assets/Post.svg alt="arrow"></a>
        </div>
        <div>
          <a href="#/"><img class="logo-Profile" src=./assets/Profile.svg alt="arrow"></a>
        </div>
    </footer>`
  );
  return templatePost;
}

export function menuHam() {
  const nav = document.querySelector("#hamburger_menu button");
  nav.addEventListener("click", (e) => {
    homeListener(nav);
  });
}
