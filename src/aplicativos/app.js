// aqui exportaras las funciones que necesites
import firebaseInitialize from '../firebaseController/firebaseConfig.js';

import { crearUsuario, providerFacebook, providerGoogle } from '../firebaseController/firebaseFunctions.js';
import irReglas from './redireccionReglas.js';

// Inicializando firebase
firebaseInitialize();

// creando cuenta de usuario
export function registrar() {
  const informacion = document.getElementsByClassName('formInformacion');
  document.addEventListener('click', (e) => {
    if (e.target.matches('#btnR')) {
      crearUsuario(informacion[0][1].value, informacion[0][2].value)
        .then(() => {
          irReglas();
          const mesaggeUserNew = document.createTextNode("¡Registro exitoso!");
          document.getElementById("main").insertBefore(mesaggeUserNew, document.getElementById("main").childNodes[0]);
        })
        .catch((error) => {
          document.getElementById('errorRegistro').innerHTML = `Ocurrio un error: ${error.message}`;
        });
    }
  });
}

// registro con Google
export function registroGoogle() {
  const botonGoogle = document.getElementById('botonGoogle');

  botonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    providerGoogle()
      .then(() => {
        irReglas();
      })
      .catch((err) => {
        const errorMensagge = document.createTextNode(`Ocurrio un error: ${err.message}`);
        document.getElementById("main").appendChild(errorMensagge);
      });
  });
}

// registro con Facebook
export function registroFacebook() {
  const botonFacebook = document.getElementById('botonFacebook');

  botonFacebook.addEventListener('click', (e) => {
    e.preventDefault();
    providerFacebook()
      .then(() => {
        irReglas();
      })
      .catch((err) => {
        const errorMensagge = document.createTextNode(`Ocurrio un error: ${err.message}`);
        document.getElementById("main").appendChild(errorMensagge);
      });
  });
}
