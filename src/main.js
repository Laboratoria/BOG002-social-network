import { logInGoogle, logInFacebook, logInEmail, signUpEmail } from "./model/login.js";

const inicio = document.getElementById('inicio');
const muro = document.getElementById('muro');
const settings = document.getElementById('settings');

/*document.getElementById('settPic').addEventListener('click', changeSettings.picture);
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
googleBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    logInGoogle();
})

//Iniciar sesión con Facebook
const fbBtn = document.querySelector('#facebookLogin')
fbBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    logInFacebook();
});


// Creación de cuenta con email y password 
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const signupEmail = document.querySelector('#signup-email').value;
    const signupPassword = document.querySelector('#signup-password').value;
    signUpEmail(signupEmail,signupPassword,signupForm)
});
 
// Inicio de sesión con email y password
const signinForm = document.querySelector('#signin-form');
signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const signinEmail = document.querySelector('#signin-email').value;
    const signinPassword = document.querySelector('#signin-password').value;
    logInEmail(signinEmail,signinPassword,signinForm)
})