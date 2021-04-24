import { myFunction } from './lib/index.js';
import { changeSettings } from './view/settingsPad.js';

const inicio = document.getElementById('inicio');
const muro = document.getElementById('muro');
const settings = document.getElementById('settings');

document.getElementById('settPic').addEventListener('click', changeSettings.picture);
document.getElementById('settName').addEventListener('click', changeSettings.name);
document.getElementById('settMail').addEventListener('click', changeSettings.email);
document.getElementById('settPassword').addEventListener('click', changeSettings.password);

function Hide() {
  inicio.style.display = 'none';
  muro.style.display = 'none';
  settings.style.display = 'none';
}

function Continue(section) {
  Hide();
  section.style.display = 'block';
}

document.getElementById('btnSing-in').addEventListener('click', () => Continue(muro));
document.getElementById('icon-settings').addEventListener('click', () => Continue(settings));

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