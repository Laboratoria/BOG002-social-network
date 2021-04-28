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

btnIniciarSesion.textContent="Iniciar Sesión";
btnRegistarte.textContent="Regístrate";
btnRegistarte.id="btnRegistrate";


inicio.appendChild(logo);
inicio.appendChild(textoCervecero);
inicio.appendChild(btnIniciarSesion);
inicio.appendChild(btnRegistarte);



return inicio;
};
