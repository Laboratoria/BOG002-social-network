// Este es el punto de entrada de tu aplicacion

import {router} from './routes.js';


window.addEventListener('load',() => {
  router(window.location.hash);
}); 
router(window.location.hash);

window.addEventListener('hashchange', () => {
  router(window.location.hash);
}); 
  
