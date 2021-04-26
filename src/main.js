

import { router} from './lib/enrutador.js';

const init = () => {
   
    window.addEventListener('hashchange', () => {
      
      var componenteInicio = document.querySelector(".opcionesInicio");
      var componenteRegistro = document.querySelector(".opcionesRegistro");
        router(window.location.hash,componenteRegistro,componenteInicio);
      });
}
init();








