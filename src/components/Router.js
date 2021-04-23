import { Landing, random } from "./Landing.js";
import { Register } from "./Register.js";
import { Login } from "./Login.js";

export function Router() {
  let { hash } = location;
  const root = document.querySelector("#template");
  switch (hash) {
    case "":
    case "#/":
      root.appendChild(Landing());
      random();
      break;
    case "#/register":
      root.appendChild(Register());
      break;
    case "#/login":
      root.appendChild(Login());
      break;
    default:
      break;
  }
}
