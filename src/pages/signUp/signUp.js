//import view from './signUp';
import {register} from '../../index.js';

// const registroPage = () => {

export function registroPage(){

    const view = `
    <section id="screenRegistration">
        <header>
            <button class="buttonClose" id="btnCloseRegistration" onclick= "window.location='#/'" >X</button>
            <img src="assets/WikiMoms.png" id="imgWikiMoms">
            <h2>Regístrate para hacer parte de nuestra comunidad de Mamás</h2>
        </header>

        <main>
            <div class="containerLogInGoogle">
                <button id="btnGoogle" type="submit"><img id="logoGoogle" src="assets/logoGoogle.png">Iniciar sesión con
                Google</button>
                <img src="assets/imgLineas.png">
            </div>
            <div class="containerRegistration">
                <form id="signUp">
                <input type="email" id="signUpEmail" placeholder="Correo electronico" class="input" required>
                <input type="password" id="signUpPassword" placeholder="Contraseña" class="input" required>
                <button  class="button" id="Register">Registrarte</button>
                </form>
            </div>
        </main>
     </section>   
    `    
    const divElement = document.createElement('div');
    divElement.innerHTML = view;   

    // // const botonPrueba = divElement.querySelector('#Register')
    // // botonPrueba.addEventListener('click', () => {
    // //     console.log('Hola me hicieron Click, soy registro')
    // // })

    return divElement;
}

export function signUp() {
    const button = document.getElementById("Register")
    const signUpForm = document.getElementById("signUp");

    button.addEventListener("click", function () {
        const email = document.getElementById("signUpEmail").value;
        const pass = document.getElementById("signUpPassword").value;
        console.log(email, pass);
        if (email.length > 0 && pass.length > 0) {
            register(email, pass)
                .then(userCredential => {
                    console.log('Creaste una nueva cuenta')
                    signUpForm.reset();
                })
                .catch(() => {
                    console.log("ingrese correo y pass word ocurrio un error")
                })
                button.onclick = "window.location='#/timeline'"
        }
        else {
            if(email.length>0){
                const divError = document.createElement("div");
                divError.innerHTML= `<p class="mensajeError"> El correo es inválido </p>`;
                signUpForm.appendChild(divError)
            
                // appendChild(document.createTextNode("Por favor ingrese un correo electronico"));
                console.log("soy error ingresar contraseña")
            }
            if(pass.length>0){
                div.appendChild(document.createTextNode("Por favor ingrese una contraseña"));
                console.log("soy error ingresar email")
            }
            
        }
    })

}


// export default registroPage; 