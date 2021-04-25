s/* eslint-disable import/named */
// Este es el punto de entrada de tu aplicacion
import { router} from './lib/enrutador.js';
//import { formularioRegistro} from './lib/vistas.js';

const init = () => {
    //pintar la vista en la que estoy
    window.addEventListener('hashchange', () => {
      var componente=document.getElementById("opcionesInicio");
        router(window.location.hash,componente);
      });
}
init();


//formularioRegistro();








