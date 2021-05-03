// Este es el punto de entrada de tu aplicacion

//import {home,BotondeLogin,BotondeCrearCuenta,BotondeCrearCuentaconGoogle} from './Pages/Home.js';
import {router} from './routes.js';

/* home(); //Esta es la vista principal
BotondeLogin(); // cuando se da click muestra el formulario de login
BotondeCrearCuenta(); // cuando se da click muestra el formulario Create account
BotondeCrearCuentaconGoogle(); // cuando de da click genera el login con google */



window.addEventListener('load',() => {
  router(window.location.hash);
}); 
router(window.location.hash);

window.addEventListener('hashchange', () => {
  router(window.location.hash);
}); 
  


