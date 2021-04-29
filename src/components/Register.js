import { reset } from "./Utils.js";
//import { google_provider } from '../index.js';

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
                  <input type="email"  id="email"/>
                </div> 
                <div class="form_styles">
                  <label for="text">Full name</label>
                  <input type="text"  id="name"/>
                </div> 
                <div class="form_styles">
                  <label for="date">Date of birth</label>
                  <input type="date"  id="date"/>
                </div> 
                <div class="form_styles">
                  <label for="password">Password</label>
                  <input type="password"  id="password"/>
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
                  <a href="#">Sign Up</a>
              </span>
            </div>`;

  return register;
}

export function addUser() {
  const auth = firebase.auth();
  // const firestore = firebase.firestore(); --> TODO FIRESTORE
  const btnContinue = document.querySelector("#register");
  const formRegister = document.querySelector("#formRegister");
  const btnFb = document.querySelector("#logoFb");
  const btnGoogle = document.querySelector("#logoGoogle");
  btnContinue.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        formRegister.reset();
        console.log("estas registrado");
      });
  });

  btnGoogle.addEventListener("click", (e) => {
    const google_provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(google_provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        let credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
        // ...
      });
  });

  btnFb.addEventListener("click", (e) => {
    const providerFb = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(providerFb)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        let credential = result.credential;

        // The signed-in user info.
        let user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        let accessToken = credential.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;

        // ...
      });
  });
}
