import { registroUsuario } from '../firebase/firebaseAuth.js';

export function vistaRegistro() {
    const viewHome = `
    <h1>Explora el universo Marvel</h1>
    <p>En este párrafo se supone que explicaremos de que se trata nuestro proyecto
    pero mientras se nos ocurre algo este texto se quedará ahí
    .</p>
      <form id="formRegistro">
         <h2>Bienvenid@s a Universo Marvel</h2>
         <h2>Crear Cuenta</h2> 
         <label for="usuario">Usuario</label>
         <input type="text" placeholder="Ingrese usuario" id="usuario">
         <label for="correo">Correo</label>
         <input type="text" placeholder="Ingresa un correo válido" id="correo">
         <label for="contrasena">Contraseña</label>
         <input type="password" placeholder="Crea una Contraseña" id="contrasena">
         <button type="submit">Registrar</button>
         <p>O</p>
         <input type="button" value="registrarse con Google">
         <p>¿Ya eres miembro? <a href="">Inicia Sesión</a></p>
      </form>
 `;
    const elemento = document.createElement('div');
    elemento.innerHTML = viewHome;
    return elemento;
}
export function registroEvento() {
    const formRegistro = document.getElementById('formRegistro');
    formRegistro.addEventListener('submit', (event) => {
        const correo = document.getElementById('correo').value;
        const contrasena = document.getElementById('contrasena').value;
        event.preventDefault();
        registroUsuario(correo.trim(), contrasena.trim());
    });
}