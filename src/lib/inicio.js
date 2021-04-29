<<<<<<< HEAD:src/lib/index.js
=======
export const pantallaInicio = () => {

let inicio = document.createElement("div");
let logo = document.createElement("img");
let textoCervecero=document.createElement("p");
let btnIniciarSesion= document.createElement("button");
let btnRegistarte= document.createElement("button");
inicio.className="contenedorInicio"
logo.src="Imagenes/logoBeer.png";
logo.id="logoInicio";

textoCervecero.textContent="Para los verdaderos amantes de la cerveza";
textoCervecero.className="textoCervecero";

btnIniciarSesion.textContent= "Iniciar Sesión";
btnIniciarSesion.id = "btnIniciarSesion";
btnIniciarSesion.className = "botonesInicio"
btnRegistarte.textContent="Regístrate";
btnRegistarte.id="btnRegistrate";
btnRegistarte.className = "botonesInicio";

inicio.appendChild(logo);
inicio.appendChild(textoCervecero);
inicio.appendChild(btnIniciarSesion);
inicio.appendChild(btnRegistarte);

return inicio;
};
>>>>>>> 9c5b6688166743931cdc64cb13b76a9fd561860d:src/lib/inicio.js
