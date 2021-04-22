import { Landing } from "./Landing.js";
import { Register } from "./Register.js";

export function Router() {
    let { hash } = location;
    console.log(hash);

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

    const routes = {
        '#/': Landing,
        '#/register': Register,
        //'#/login': Login
    };

    const root = document.querySelector('#template');
    console.log(root)
    switch (hash) {
        case '':
        case '#/':
            //return Landing()
            root.appendChild(Landing());




            break;
        case '#/register':
            root.appendChild(Register());
            console.log("landing");
            break;



        default:
            console.log("landing default");
            break;

    }
}