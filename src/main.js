// importamos las funciones que crear los elementos y las llamamos con los addeventlistener asi interactuamos con el DOM

import { pantallaInicio } from './lib/inicio.js';
import { registroUsuario } from './lib/RegistroUsuario.js';
import { inicioSesion } from './lib/inicioSesion.js';

let rootHtml = document.getElementById("root");

//Funcion que permite ver la pantalla de Inicio.
// function cargarPantalla() {
    let appenPantallaInicio = rootHtml.appendChild(pantallaInicio());
// }
// window.onload = cargarPantalla();
window.onload = appenPantallaInicio;

// //prueba con document.elemet si no funciona hacerlo en inciio.add...
// const bntRegistro = document.getElementById("btnRegistrate");
// const btnIniciarSesion = document.getElementById("btnIniciarSesion");

// // function loadRegistroUsuario (){
//     let appePantallaRegistro = rootHtml.appendChild(registroUsuario());
//     let appPantallaLogin = rootHtml.appendChild(inicioSesion());
// // }

// let mostrarRegistro = () => {
//     appenPantallaInicio.style.display = "none";
//     appePantallaRegistro.style.display = "flex";
//     appPantallaLogin.style.display = "none";
// }
// let mostrarLogin = () => {
//     appenPantallaInicio.style.display = "none";
//     appePantallaRegistro.style.display = "none";
//     appPantallaLogin.style.display = "flex";
// }
// bntRegistro.addEventListener("click",mostrarRegistro);
// btnIniciarSesion.addEventListener("click",mostrarLogin);

