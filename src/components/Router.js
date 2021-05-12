import { Loading } from "./Loading.js";
import { Landing, random } from "./Landing.js";
import { Register, addUser } from "./Register.js";
import { Home, homeListener } from "./Home.js";
import { Login, logInUser } from "./Login.js";

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
    default:
      break;
    case "#/home":
      root.appendChild(Home());
      // userOut();
      homeListener();
      break;
  }
}
