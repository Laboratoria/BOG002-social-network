import login from '../../index.js';
export function loginPage () {
//const loginPage = () => {

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
                    <input type="password" id="signInpassword" placeholder="Contraseña" class="input" required>
                    <button class="button" id="btnLogIn" onclick= "window.location='#/timeline'">Iniciar Sesión</button>
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


export function login () {
    const btnSignIn = document.getElementById("btnLogIn");
btnSignIn.addEventListener('click', () => {
    let email = document.getElementById('signInEmail').value
    let password = document.getElementById('signInpassword').value
    if (email.length>0 && password.length>0) {
        
        login(email, password)
            .then(() => {
                
            })
            .catch(() => {
                console.log("ocurrio un error")
            })
    }
    else {
        console.log("error ingresar email")
    }

})
}

//export default loginPage