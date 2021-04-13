// Este es el punto de entrada de tu aplicacion
import {crearHeader} from './componentes/header.js'
import { CrearFormulario} from './componentes/formulario.js'
import {registrar} from './lib/app.js'

const main = document.getElementById('main');
main.appendChild( CrearFormulario());

registrar();
