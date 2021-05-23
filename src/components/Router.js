import { Loading } from "./Loading.js";
import { Landing, random } from "./Landing.js";
import { Register, addUser } from "./Register.js";
import { Home, menu, renderPosts, userOut } from "./Home.js";
import { Login, logInUser } from "./Login.js";
import { Post, menuHam, postFb, userOutPost } from "./Post.js";
import { Password, recoverPassword } from "./Password.js";

export function Router() {
  const { hash } = location;
  const root = document.querySelector("#template");
  switch (hash) {
    case "":
    case "#/":
      root.appendChild(Loading());
      break;
    case "#/landing":
      root.appendChild(Landing());
      random();
      break;
    case "#/register":
      root.appendChild(Register());
      addUser();
      break;
    case "#/login":
      root.appendChild(Login());
      logInUser();
      break;
    case "#/home":
      root.appendChild(Home());
      renderPosts();
      userOut();
      menu();
      break;
    case "#/post":
      root.appendChild(Post());
      menuHam();
      postFb();
      userOutPost();
      break;
    default:
      break;
    case "#/password":
      root.appendChild(Password());
      recoverPassword();
      break;
  }
}
