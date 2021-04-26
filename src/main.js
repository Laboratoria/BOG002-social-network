// Este es el punto de entrada de tu aplicacion
import CrearFormulario from "./componentes/formulario.js";
import {
  registrar,
  registroGoogle,
  registroFacebook,
} from "./aplicativos/app.js";
import ingresar from "./aplicativos/ingreso.js";
import CrearRegistro from "./componentes/registro.js";
import firebaseInitialize from "./firebaseController/firebaseConfig.js";

firebaseInitialize();

const main = document.getElementById("main");
main.appendChild(CrearFormulario());

registrar();
registroGoogle();
registroFacebook();
ingresar();

document.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    // window.location.assign('registro');
    CrearRegistro();
  }
});

// BOTON QUE VUELVE AL LOGIN
document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches("#volver")) {
    main.innerHTML = "";
    window.location = "#login";
    main.appendChild(CrearFormulario());
  }
});
