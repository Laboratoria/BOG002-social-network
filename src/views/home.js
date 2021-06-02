import { registroUsuario } from '../firebaseAuth.js';

export function vistaRegistro() {
    const viewHome = `
    <h1>Explora el universo Marvel</h1>
    <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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