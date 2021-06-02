// Este es el punto de entrada de tu aplicacion

import { router } from './router/index.routes.js';
import { registroUsuario } from './firebaseAuth.js';

router(window.location.hash);
window.addEventListener('hashchange', () => {
    router(window.location.hash);
});

const formRegistro = document.getElementById('formRegistro');
// const formLogin = document.getElementById('formLogin');

formRegistro.addEventListener('submit', (event) => {
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    event.preventDefault();
    registroUsuario(correo.trim(), contrasena.trim());
});

// formLogin.addEventListener('submit', (event) => {
//     const correoLogin = document.getElementById('correoLogin').value;
//     const contrasenaLogin = document.getElementById('contrasenaLogin').value;
//     event.preventDefault();
//     loginUsuario(correoLogin.trim(), contrasenaLogin.trim());
// });
// Console.log(firebase);