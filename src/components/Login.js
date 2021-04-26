import { reset } from "./Utils.js";


export function Login() {
  reset();
  const login = document.createElement("div");
  login.innerHTML = ` 
    <div id="form-container">
            <h1 class="login-tittle">Login</h1>
            <div class="form">
              <form action=" " autocomplete="off">
                <div>
                  <label for="email">Email address</label>
                  <input type="email" required id="emailSignIn"/>
                </div>  
                <div>
                  <label for="password">Password</label>
                  <input type="password" required id="passwordSignIn"/>
                </div> 
                <div class="button">
                  <button type="submit" id="signIn">Sign In</button>
                </div>
              </form>
              <span>or register with</span>
              <div class="social">
              </div>
            </div>
          </div>`;

  return login;
}

/*export function logInUser () {
  const btnSignIn = document.querySelector('#signIn');
  btnSignIn.addEventListener('click', (e) => {
    e.preventDefault();

    const emailSignIn = document.querySelector('#emailSignIn').value;
    const passwordSignIn= document.querySelector('#passwordSignIn').value;

    auth
      .signInUserWithEmailAndPassword(emailSignIn, passwordSignIn)
      .then (userCredential => {
          console.log('y si me quieres comer sigueme mi amor')
      })
  })  
  
}*/
