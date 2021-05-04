import { Login } from '../../index.js';

export function loginPage() {

    const view = `
        <section id="screenLogIn">
            <header>
                <img src="assets/LogowikimomsMobile.png">
                <h2>WikiMoms te ayuda a compartir experiencias en tus etapas de embarazo, lactancia y postparto.</h2>
            </header>

            <main>
                <div class="containerLogIn">
                    <form id="signIn">
                    <input type="email" id="signInEmail" placeholder="Correo electronico" class="input" required>
                    <P class="errorMessage" id="errorEmail"></p>
                    <input type="password" id="signInpassword" placeholder="Contraseña" class="input" required>
                    <P class="errorMessage" id="errorPassword"></p>
                    <button type= "button" class="button" id="btnLogIn">Iniciar Sesión</button>
                    <img src="assets/imgLineas1.png">
                    <button id="btnGoogle" type="submit"><img id="logoGoogle" src="assets/logoGoogle.png">Iniciar sesión con
                    Google</button>
                    </form>
                </div>
                <div class="containerCreateAccount">
                    <button class="button" id="btnCreateAccount" onclick= "window.location='#/registration'">Crear Cuenta</button>
                </div>
            </main>
        </section>    
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    return divElement;
}


export function logIn() {
    const btnSignIn = document.getElementById("btnLogIn");
    btnSignIn.addEventListener('click', () => {
        let email = document.getElementById('signInEmail').value
        let password = document.getElementById('signInpassword').value
        const errorEmail = document.getElementById("errorEmail");
        const errorPassword = document.getElementById("errorPassword");
        
        document.querySelectorAll(".errorMessage").forEach(function(errorMessage) {
            setTimeout(function(){ errorMessage.innerHTML=""}, 3000);
        });


        if (email.length == 0 ) {
            errorEmail.innerHTML=`Ingrese un correo válido`
            return false;
        }
        if (password.length == 0) {
            errorPassword.innerHTML=`Ingrese la contraseña`
            return false
        }
    
        Login(email, password)
            .then(() => {
            window.location='#/timeline'
            })
            .catch((err) => {
                console.log(err);

                if (err.code=="auth/user-not-found"){
                errorEmail.innerHTML=`El correo electronico no posee una cuenta válida`
                return false;
                }
                if (err.code=="auth/wrong-password") {
                errorPassword.innerHTML=`La contraseña no es válida`
                return false
                }
                if (err.code=="auth/too-many-requests") {
                    errorPassword.innerHTML=`El acceso a esta cuenta se ha desactivado temporalmente debido a muchos intentos fallidos de inicio de sesión. `
                    return false
                }
                errorPassword.innerHTML=err.message
            })

            
    })
}
