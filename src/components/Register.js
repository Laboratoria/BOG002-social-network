import { reset } from "./Utils.js";
import { google_provider } from '../index.js';

export function Register() {
  reset();
  const register = document.createElement("div");
  register.innerHTML = ` 
    <div id="form-container">
            <h1 class="register-tittle">Register</h1>
            <div class="form">
              <form action=" " autocomplete="off" id="formRegister">
                <div>
                  <label for="email">Email address</label>
                  <input type="email"  id="email"/>
                </div> 
                <div>
                  <label for="text">First name</label>
                  <input type="text"  id="name"/>
                  <label for="text">Last name</label>
                  <input type="text"  id="text"/>
                </div> 
                <div>
                  <label for="date">Date of birth</label>
                  <input type="date"  id="date"/>
                </div> 
                <div>
                  <label for="password">Password</label>
                  <input type="password"  id="password"/>
                </div> 
                <div class="button">
                  <button type="submit" id="register">Create Account</button>
                </div>
              </form>
              <span>or register with</span>
              <div class="social">
                <!-- botones para ingreso con fb y gmail -->
                <button><img id="logoFb" src=./assets/logo-fb.svg></button>
                <button><img id="logoGoogle" src=./assets/logo-google.svg></button>
              </div>
            </div>
          </div>`;

  return register;
}

export function addUser() {
  
  const btnContinue = document.querySelector('#register');
  const formRegister = document.querySelector('#formRegister');
  const btnFb = document.querySelector('#logoFb');
  const btnGoogle = document.querySelector('#logoGoogle');
  btnContinue.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const auth = firebase.auth();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        formRegister.reset()
        console.log('3312 3312 tenemos un 3312')
      })

  })

/*btnGoogle.addEventListener('click', (e) => {
  google_provider;
  auth.signWithPopup(google_provider)
})*/

/*btnFb.addEventListener('click', (e) => {
  const providerFb = firebase.auth.FacebookAuthProvider();
})*/

}


