import { reset } from "./Utils.js";
import { recover } from "../Firebase/Services.js"

export function Password() {
    reset();
    const templateForgot = document.createElement("div");
    templateForgot.setAttribute("id", "home");
    templateForgot.insertAdjacentHTML(
        "afterbegin",
        `
            <div id="textRecover">
            <h1> Recover Your Password </h1>
            </div>
            <p> Enter your email address to recover your password. </p>
            <input type="email" id="recoveryEmail" placeholder="Email Address">
            <button id="recoveryPassword"> Recover Password </button>
            <a href="#/login"> Sign In </a> 
        </div>`
    );
    return templateForgot;
}

export function recoverPassword () {
    const btnRecovery = document.querySelector('#recoveryPassword');
    btnRecovery.addEventListener('click', (e) => {
        e.preventDefault();
        const recoveryEmail = document.querySelector('#recoveryEmail').value;
        recover(recoveryEmail);
    })
}