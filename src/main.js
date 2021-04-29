// importamos las funciones que crear los elementos y las llamamos con los addeventlistener asi interactuamos con el DOM
import { pantallaInicio} from './lib/index.js';
let rootHtml = document.getElementById("root");
// rootHtml.addEventListener("onload", cargarPantalla())
window.onload=cargarPantalla;
console.log(typeof cargarPantalla)
function cargarPantalla (){
rootHtml.appendChild(pantallaInicio());
}