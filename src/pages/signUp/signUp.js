//import view from './signUp';
import { register, registerGoogle } from '../../index.js';

// const registroPage = () => {

export function registroPage() {

    const view = `
    <section id="screenRegistration">
        <header>
            <button class="buttonClose" id="btnCloseRegistration" onclick= "window.location='#/'" >X</button>
            <img src="assets/WikiMoms.png" id="imgWikiMoms">
            <h2>Regístrate para hacer parte de nuestra comunidad de Mamás</h2>
        </header>

        <main>
            <div class="containerLogInGoogle">
                <button id="btnGoogle" type="submit"><img id="logoGoogle" src="assets/logoGoogle.png">Registrarte con
                Google</button>
                <img src="assets/imgLineas.png">
            </div>
            <div class="containerRegistration">
                <form id="signUp">
                <input type="text" id="NameUser" placeholder="Nombre de usuario" class="input">
                <input type="email" id="signUpEmail" placeholder="Correo electronico" class="input" required>
                <P class="errorMessage" id="errorEmail"></p>
                <input type="password" id="signUpPassword" placeholder="Contraseña" class="input" required>
                <P class="errorMessage" id="errorPassword"></p>
                <button  class="button" id="Register">Registrarte</button>
                </form>
            </div>
        </main>
     </section>   
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = view;


    return divElement;
}

export function signUp() {
    const button = document.getElementById("Register")
    const signUpForm = document.getElementById("signUp");

    button.addEventListener("click", function () {
        const email = document.getElementById("signUpEmail").value;
        const pass = document.getElementById("signUpPassword").value;
        const errorEmail = document.getElementById("errorEmail");
        const errorPassword = document.getElementById("errorPassword");
        console.log(email, pass);

        document.querySelectorAll(".errorMessage").forEach(function (errorMessage) {
            setTimeout(function () { errorMessage.innerHTML = "" }, 3000);
        });

        if (email.length > 0 && pass.length > 0) {
            register(email, pass)
                .then(userCredential => {
                    console.log('Creaste una nueva cuenta', userCredential)
                    signUpForm.reset();
                    window.location = '#/timeline'
                })
                .catch((e) => {
                    console.log("ingrese correo y pass word ocurrio un error", e.code)
                })

        }
        else {

            console.log("error");
        }
    })

}
export function signUpGoogle() {
    const buttonGoogle = document.getElementById('btnGoogle');
    buttonGoogle.addEventListener('click', function () {
        const googleAccount = new firebase.auth.GoogleAuthProvider
        registerGoogle(googleAccount)
            .then(result => {
                window.location = '#/timeline'
            })
            .catch(err => {
                console.log(err)
            })

    });
}
