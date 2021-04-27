

import { router} from './lib/enrutador.js';


const init = () => {
   
    window.addEventListener('hashchange', () => {
      var componente=document.getElementById("opcionesInicio");
        router(window.location.hash,componente);
      });
}
init();








