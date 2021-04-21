// aqui exportaras las funciones que necesites

import { crearUsuario } from '../firebaseController/firebaseFunctions.js';
import irReglas from './redireccionReglas.js';

// creando cuenta de usuario
export function registrar() {
  const informacion = document.getElementsByClassName('formInformacion');
  const errorUsuario = document.getElementsByClassName('errorRegistro');
  document.addEventListener('click', (e) => {
    if (e.target.matches('#btnR')) {
      if (crearUsuario(informacion[0][1].value, informacion[0][2].value)){
        console.log(crearUsuario(informacion[0][1].value, informacion[0][2].value));
        irReglas();
      }
     else {
      document.getElementById('errorRegistro').innerHTML = crearUsuario(informacion[0][1].value, informacion[0][2].value);
     console.log ("esto no debe estar pasando");
     }
}
})
}

// registro con Google
export function registroGoogle() {
  const botonGoogle = document.getElementById('botonGoogle');

  botonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        console.log('google sign in');
        irReglas();
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

// registro con Facebook
export function registroFacebook() {
  const botonFacebook = document.getElementById('botonFacebook');

  botonFacebook.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    const provider = new firebase.auth.FacebookAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        console.log('Facebook sign in');
        irReglas();
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
