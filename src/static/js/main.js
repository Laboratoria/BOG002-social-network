import { init } from './model/router.js'
import { logInGoogle, logInFacebook, logInEmail, signUpEmail } from './model/login.js'

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('hashchange', init);

window.onload = function () {
    //Iniciar sesión con Google
    const googleBtn = document.querySelector('#googleLogin')
    googleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        logInGoogle();
    })

    //Iniciar sesión con Facebook
    const fbBtn = document.querySelector('#facebookLogin')
    fbBtn.addEventListener('click', (e) => {
        e.preventDefault();
        logInFacebook();
    });

    // Creación de cuenta con email y password 
    const signupForm = document.querySelector('#signup-form');
    const signupEmail = document.querySelector('#signup-email').value;
    const signupPassword = document.querySelector('#signup-password').value;
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        signUpEmail(signupEmail, signupPassword, signupForm)
    });

    // Inicio de sesión con email y password
    const signinForm = document.querySelector('#signin-form')
    const signinEmail = document.querySelector('#signin-email').value;
    const signinPassword = document.querySelector('#signin-password').value;
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        logInEmail(signinEmail, signinPassword, signinForm)
    })
}
