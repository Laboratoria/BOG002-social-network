// aqui exportaras las funciones que necesites
export const pantallaInicio = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
let inicio = document.createElement("div");//
let logo = document.createElement("img");
let textoCervecero=document.createElement("p");
let btnIniciarSesion= document.createElement("button");
let btnCrearSesion= document.createElement("button");
inicio.className="contenedorInicio"
logo.src="Imagenes/logoBeer.png";
logo.className="logo";
textoCervecero.textContent="Para los verdaderos amantes de la cerveza";
textoCervecero.className="textoCervecero";
btnIniciarSesion.textContent="Iniciar Sesión";
btnCrearSesion.textContent="Regístrate";
inicio.appendChild(logo);
inicio.appendChild(textoCervecero);
inicio.appendChild(btnIniciarSesion);
inicio.appendChild(btnCrearSesion);
return inicio;
};