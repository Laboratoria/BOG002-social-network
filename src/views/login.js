import { loginUsuario } from '../firebase/firebaseAuth.js';

export function vistaLogin() {
    const viewsLogin = `
        <form id="formLogin">
            <label for="correo">correo</label>
            <input type="text" placeholder="Ingrese correo" id="correoLogin">
            <label for="contrasena">Contraseña</label>
            <input type="password" placeholder="Ingrese contraseña" id="contrasenaLogin">
            <button type="submit">Continuar</button>
            <p>O</p>
            <input type="button" value="Ingresar con Google" id="googleLogin">
            <p>¿Quieres ser miembro? <a href="">Regístrate</a></p>
        </form>
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