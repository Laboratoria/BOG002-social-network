// Este es el punto de entrada de tu aplicacion

import {router} from './routes.js';
import {DatosDelRegistro} from './Pages/SingUp.js';
import {AutenticacionDeUsuario} from './firebaseAuth.js';


window.addEventListener('load',() => {
  router(window.location.hash);
}); 
router(window.location.hash);

window.addEventListener('hashchange', () => {
  router(window.location.hash);
}); 
  

// enlazando el formulario de registro con Firebase

  Register.addEventListener('submit',(e) => {
   e.preventDefault();
  const Email    = document.getElementById("EmailUser").value;
  const Password = document.getElementById("PasswordUser").value;
  console.log(AutenticacionDeUsuario(Email,Password));

})
