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
import crearPost from "./componentes/post.js";

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
  if (e.target.matches("#volver")) {
    main.innerHTML = "";
    window.location = "#login";
    main.appendChild(CrearFormulario());
  }
});

// Formulario para publicaciones
document.addEventListener("click", (e) => {
  if (e.target.matches("#btnC")) {
    main.innerHTML = "";
    window.location = "#crear-publicacion";
    main.appendChild(crearPost());
  }
});

// document.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const title = taskForm["task-title"].value;
//   const description = taskForm["task-description"].value;

//   console.log(title, description);
// });