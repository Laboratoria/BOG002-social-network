// aqui exportaras las funciones que necesites

import irReglas from './redireccionReglas.js';

// creando cuenta de usuario
export function registrar() {
  const informacion = document.getElementsByClassName('formInformacion');

  document.addEventListener('click', (e) => {
    if (e.target.matches('#btnR')) {
      // console.log(errorUsuario);
      firebase
        .auth()
        .createUserWithEmailAndPassword(informacion[0][1].value, informacion[0][2].value)
        .then(() => {
          // Signed in

          irReglas();
        })
        .catch((error) => {
          const errorMessage = error.message;
          document.getElementById('errorRegistro').innerHTML = errorMessage;
        });
    }
  });
}

// registro con Google
export function registroGoogle() {
  const botonGoogle = document.getElementById('botonGoogle');

  botonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('click');
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(() => {
        // console.log(result);
        // console.log('google sign in');
        irReglas();
      })
      .catch(() => {
        // console.log(err);
      });
  });
}

// registro con Facebook
export function registroFacebook() {
  const botonFacebook = document.getElementById('botonFacebook');

  botonFacebook.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('click');
    const provider = new firebase.auth.FacebookAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(() => {
        // console.log(result);
        // console.log('Facebook sign in');
        irReglas();
      })
      .catch(() => {
        // console.log(err);
      });
  });
}
