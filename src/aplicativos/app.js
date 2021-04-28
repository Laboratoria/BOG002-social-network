import { providerFacebook, providerGoogle } from "../firebaseController/firebaseFunctions.js";
import { irReglas } from "./redireccion.js";

// creando cuenta de usuario
export function registrar() {
  const informacion = document.getElementsByClassName('formInformacion');

  document.addEventListener('click', (e) => {
    if (e.target.matches('#btnR')) {
      crearUsuario(informacion[0][1].value, informacion[0][2].value)
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
  document.addEventListener("click", (e) => {
    if (e.target.matches("#botonGoogle")) {
      e.preventDefault();
      const provider = new firebase.auth.GoogleAuthProvider();
      providerGoogle(provider)
        .then(() => {
          irReglas();
        })
        .catch(() => {
        });
    };
  })
}

// registro con Facebook
export function registroFacebook() {
  document.addEventListener("click", (e) => {
    if (e.target.matches("#botonFacebook")) {
      e.preventDefault();
      const provider = new firebase.auth.FacebookAuthProvider();
      providerFacebook(provider)
        .then(() => {
          irReglas();
        })
        .catch(() => {
        });
    };
  })
}
