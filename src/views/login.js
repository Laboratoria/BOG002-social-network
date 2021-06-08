import { loginUsuario } from '../firebase/firebaseAuth.js';

export function vistaLogin() {
    const viewsLogin = `
    <div class="container-login">
      <h3 class="inicioSesion">Inicio Sesion</h3>
        <form id="formLogin">
            <input class="labelCorreo" type="text" placeholder="Ingrese correo" id="correoLogin">
            <input type="password" placeholder="Ingrese contraseña" id="contrasenaLogin">
            <button class="buttonContinuar" type="submit">Continuar</button>
            <p class="textoO">O</p>
            <button class="button" id="googleLogin"><span><i class="fab fa-google"></i></span>Ingresar con Google</button>
            <button class="buttonFacebook blue" id="facebookLogin"><span><i class="fab fa-facebook"></i></span>Ingresar con Facebook</button>
            <p class="centrado">¿Quieres ser miembro?<a href="#/Registro">Regístrate</a></p>
        </form>
    </div>
    `;

    const elemento2 = document.createElement('div');
    elemento2.innerHTML = viewsLogin;
    return elemento2;
}

export function loginEvento() {
    const formLogin = document.getElementById('formLogin');
    formLogin.addEventListener('submit', (event) => {
        const correoLogin = document.getElementById('correoLogin').value;
        const contrasenaLogin = document.getElementById('contrasenaLogin').value;
        event.preventDefault();
        loginUsuario(correoLogin.trim(), contrasenaLogin.trim());
    });
    console.log(firebase);
}