import { signUpGoogle, signUpFacebook, logInEmail, signUpEmail } from '../model/login.js'

export const renderLogin = () => {
    let html = `
    <section id="inicio">

        <div id="Presentation">
        <h1>WALKTER</h1>
        <h2 class="slogan">Apostemos por vías más seguras para todos.</h2>
        <img class="img-login" src="static/images/Web image.png" att="app">
        </div>

        <div id="register">
        <form id="signin-form">
            <h1>WALKTER</h1>
            <input type="email" class="input-email" id="signin-email" placeholder="Correo electrónico">
            <input type="password" class="input-password" id="signin-password" placeholder="Contraseña">
            <p><a href="#" class="link-forgetMyPassword" type="button">Olvide la contraseña</a></p>
            <button id="btn-sign-in" name="boton" type="submit">Iniciar sesión</button>
            <span class="line"></span>
        </form>

        <div class="container-new-user">
            <p class="title-Newaccount">¿No tienes una cuenta?</p>
            <form id="signup-form">
            <p class="snRegister">Registrarme con:</p>
            <input type="email" class="input-signup-email" id="signup-email" placeholder="Correo electrónico">
            <input type="password" class="input-signup-password" id="signup-password" placeholder="Contraseña">
            <p id = error></p>
            <button id="btn-create-account" name="boton" type="submit">Crear cuenta</button>
            <span class="line">o</span>
            <img class="icon-gmail" id="googleSignUp" type="button" src="static/images/icons/icon-google.png" alt="Gmail">
            <img class="icon-facebook" id="facebookSignUp" type="button" src="static/images/icons/icon-facebook.png" alt="Facebook">
            </form>
        </div>
        </div>

    </section>`;

    let div = document.createElement('div');
    div.innerHTML = html;
        
    return div
}

export function afterRenderLogin() {
    //Crear cuenta con Google
    const googleSignUpBtn = document.querySelector('#googleSignUp')
    googleSignUpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        signUpGoogle();
        signupForm.reset();
    });

    //Crear cuenta con Facebook
    const fbSignUpBtn = document.querySelector('#facebookSignUp')
    fbSignUpBtn.addEventListener('click', (e) => {
        e.preventDefault();
        signUpFacebook();
        signupForm.reset();
    });

    // Creación de cuenta con email y password 
    const signUpBtn = document.querySelector('#btn-create-account')
    const signupForm = document.querySelector('#signup-form');
    const signupEmail = document.querySelector('#signup-email').value;
    const signupPassword = document.querySelector('#signup-password').value;
    const error = document.querySelector('#error')
    signUpBtn.addEventListener('submit', (e) => {
        e.preventDefault();
        signUpEmail(signupEmail, signupPassword);
        signupForm.reset();
    });

    // Inicio de sesión con email y password
    const signInBtn = document.querySelector('#btn-sign-in')
    const signinForm = document.querySelector('#signin-form')
    const signinEmail = document.querySelector('#signin-email').value;
    const signinPassword = document.querySelector('#signin-password').value;
    signInBtn.addEventListener('submit', (e) => {
        e.preventDefault();
        logInEmail(signinEmail, signinPassword);
        signinForm.reset();
    })
}
