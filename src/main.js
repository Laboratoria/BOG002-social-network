// Este es el punto de entrada de tu aplicacion
import { CrearFormulario } from "./componentes/formulario.js";
import {
  registrar,
  registroGoogle,
  registroFacebook,
} from "./aplicativos/app.js";
import {ingresar} from "./aplicativos/ingreso.js"

const main = document.getElementById("main");
main.appendChild(CrearFormulario());

registrar();
registroGoogle();
registroFacebook();
ingresar();
