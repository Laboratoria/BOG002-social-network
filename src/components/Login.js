// eslint-disable-next-line quotes
import { reset } from "./Utils.js";
import { authGoogle, login, authFacebook } from "../Firebase/Services.js";

export function Login() {
  reset();
  const login = document.createElement("div");
  login.innerHTML = ` 
  <div class="container">
    <a href="#/"><img class="back" src=./assets/back.svg alt="arrow"></a>
    <h1 class="register-tittle"> Login </h1>
  </div>
    <div id="form-container">
    <div class="form">
              <form action=" " autocomplete="off" id="formRegister">
                <div class="form_styles">
                  <label for="email">Email address</label>
                  <input type="email"  id="email"/>
                  <div class="input__indicator"></div>
                </div> 
                <div class="form_styles">
                  <label for="password">Password</label>
                  <input type="password"  id="password"/>
                  <div class="input__indicator"></div>
                </div> 
                <div class="button">
                  <button type="submit" id="signIn" class="button_general">Login</button>
                </div>
              </form>
              <span>or login with</span>
              <div class="social">
                <!-- botones para ingreso con fb y gmail -->
                <button><img id="logoFb" src=./assets/logo-fb.svg></button>
                <button><img id="logoGoogle" src=./assets/logo-google.svg></button>
              </div>
              <span> Don’t have have an Account?
                  <a href="#/register">Sign In</a>
              </span>
            </div>`;

  return login;
}

export function logInUser() {
  const btnSignIn = document.querySelector("#signIn");
  btnSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    login(email, password);
  });
  // logo google
  const btnGoogle = document.querySelector("#logoGoogle");
  btnGoogle.addEventListener("click", (e) => {
    e.preventDefault();
    authGoogle();
  });
  const btnFb = document.querySelector("#logoFb");
  btnFb.addEventListener("click", (e) => {
    e.preventDefault();
    authFacebook();
  });
}
