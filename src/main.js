import { myFunction } from './lib/index.js';
import { changeSettings } from './view/settingsPad.js';

const inicio = document.getElementById('inicio');
const muro = document.getElementById('muro');
const settings = document.getElementById('settings');

document.getElementById('settPic').addEventListener('click', changeSettings.picture);
document.getElementById('settName').addEventListener('click', changeSettings.name);
document.getElementById('settMail').addEventListener('click', changeSettings.email);
document.getElementById('settPassword').addEventListener('click', changeSettings.password);*/
document.getElementById('btn-sing-in').addEventListener('click',() => Continue(muro));
document.getElementById('icon-settings').addEventListener('click',() => Continue(settings));
document.getElementById('icon-home').addEventListener('click',() => Continue(muro));

function Hide(){
    inicio.style.display = 'none'
    muro.style.display = 'none'
    settings.style.display = 'none'
}

function Continue(section) {
  Hide();
  section.style.display = 'block';
}

//Iniciar sesión con Google
const googleBtn = document.querySelector('#googleLogin')

googleBtn.addEventListener('click',e =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            var credential = result.credential;
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        })
})

//Iniciar sesión con Facebook
const fbBtn = document.querySelector('#facebookLogin')

fbBtn.addEventListener('click',e =>{
    e.preventDefault();
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            var credential = result.credential;
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
        })
        .catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        })


// SING UP WHITH EMAIL AND PASSWORD //
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const signupEmail = document.querySelector('#signup-email').value;
  const signupPassword = document.querySelector('#signup-password').value;

  auth
    .createUserWithEmailAndPassword(signupEmail, signupPassword)
    .then(userCredential => {
      signupForm.reset();
    });
});
 
// SIGN IN WHITH EMAIL AND PASSWORD //
const signinForm = document.querySelector('#signin-form');
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const signinEmail = document.querySelector('#signin-email').value;
  const signinPassword = document.querySelector('#signin-password').value;
  
  auth
    .signInWithEmailAndPassword(signinEmail, signinPassword)
    .then(userCredential => {
      signupForm.reset();
      console.log('signin')
    });
})