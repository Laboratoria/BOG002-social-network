import { Landing, random } from "./Landing.js";
import { Register } from "./Register.js";
import { Login } from "./Login.js"

export function Router() {
    let { hash } = location;

    //console.log(hash);

    /*if (!hash || hash === '#/') {

        const root = document.getElementById("container");
        root.appendChild(Landing());
    } else if (hash === '#/register') {
        document.getElementById("template").innerHTML = "<h2>Sección registro</h2>";
    } else if (hash === '#/login') {
        document.getElementById("template").innerHTML = "<h2>Sección loign</h2>";
    } else {
        document.getElementById("template").innerHTML = "<h2>Se carga lo anterior</h2>";
    }*/

    const root = document.querySelector('#template');
    console.log(root)
    switch (hash) {
        case '':
        case '#/':
            console.log(Landing())
            root.appendChild(Landing());
            random()
            break;
        case '#/register':
            root.appendChild(Register());
            break;
        case '#/login':
            root.appendChild(Login());
            console.log("Login de la ley");
            break;
        default:
            console.log("landing default");
            break;

    }
}