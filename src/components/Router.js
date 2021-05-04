import { Landing, random } from "./Landing.js";
import { Register, addUser } from "./Register.js";
import { Home } from "./Home.js";
import { Login } from "./Login.js";

export function Router() {
    const { hash } = location;
    const root = document.querySelector("#template");
    switch (hash) {
        case "":
        case "#/":
            root.appendChild(Landing());
            random();
            break;
        case "#/register":
            root.appendChild(Register());
            addUser();
            break;
        case "#/login":
            root.appendChild(Login());
            break;
        default:
            break;
        case "#/home":
            root.appendChild(Home());
            break;
    }
}