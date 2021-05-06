import { reset, showPassword, hidePassword } from "./Utils.js";
import { singUp, authGoogle, authFacebook } from "../Firebase/Services.js";

export function Register() {
    reset();
    const register = document.createElement("div");
    register.innerHTML = ` 
        <div class="container">
          <a href="#/"><img class="back" src=./assets/back.svg alt="arrow"></a>
          <h1 class="register-tittle"> Enjoy Gleam </h1>
        </div>
            <div class="form">
              <form action=" " autocomplete="off" id="formRegister">
                <div class="form_styles">
                  <label for="email">Email address</label>
                  <input type="email" required id="email"/>
                  <div class="input__indicator"></div>
                </div> 
                <div class="form_styles">
                  <label for="text">Full name</label>
                  <input type="text" required id="name"/>
                  <div class="input__indicator"></div>
                </div> 
                <div class="form_styles">
                  <label for="date">Date of birth</label>
                  <input type="date" required id="date"/>
                  <div class="input__indicator"></div>
                </div> 
                <div class="form_styles">
                  <label for="password">Password</label>
                  <input type="password" required id="password"/>
                  <img class="show" src=./assets/show.svg alt="eye">
                  <img class="hide" src=./assets/hide.svg alt="eye">
                  <div class="input__indicator"></div>
                </div> 
                <div class="button">
                  <button type="submit" id="register" class="button_general">Create Account</button>
                </div>
              </form>
              <span>or register with</span>
              <div class="social">
                <!-- botones para ingreso con fb y gmail -->
                <button><img id="logoFb" src=./assets/logo-fb.svg></button>
                <button><img id="logoGoogle" src=./assets/logo-google.svg></button>
              </div>
              <span>Already have an Account?
                  <a href="#/login">Sign Up</a>
              </span>
            </div>`;

    return register;
}

export function addUser() {
    const btnContinue = document.querySelector("#register");
    const btnFb = document.querySelector("#logoFb");
    const btnGoogle = document.querySelector("#logoGoogle");
    btnContinue.addEventListener("click", (e) => {
        e.preventDefault();
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        singUp(email, password);
    });

    btnGoogle.addEventListener("click", (e) => {
        e.preventDefault();
        authGoogle();
    });

    btnFb.addEventListener("click", (e) => {
        e.preventDefault();
        authFacebook();
    });
    // toggle
    const passwordField = document.querySelector('#password');
    const show = document.querySelector('.show');
    const hide = document.querySelector('.hide');

    show.addEventListener('click', () => {
        showPassword(passwordField, show, hide);
    });
    hide.addEventListener('click', () => {
        hidePassword(passwordField, hide, show);
    });
}