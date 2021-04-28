// importamos las funciones que crear los elementos y las llamamos con los addeventlistener asi interactuamos con el DOM

import { pantallaInicio} from './lib/inicio.js';
// import { registroUsuario, } from './lib/RegistroUsuario.js';
let rootHtml = document.getElementById("root");
// rootHtml.addEventListener("onload", cargarPantalla())

// function cargarPantalla (){
rootHtml.appendChild(pantallaInicio());
// }
// console.log(cargarPantalla());
// window.onload = cargarPantalla;

//prueba con document.elemet si no funciona hacerlo en inciio.add...
// const bntRegistro = document.getElementById("btnRegistrate");
// function loadRegistroUsuario (){
//     rootHtml.appendChild(registroUsuario());
// }
// bntRegistro.addEventListener("click",loadRegistroUsuario);