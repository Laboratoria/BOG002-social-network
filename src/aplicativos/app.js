/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
// aqui exportaras las funciones que necesites

import { VistaReglas } from "../componentes/reglas";

// creando cuenta de usuario
export function registrar() {
  window.location = "#login";
  const email = document.getElementById("usuario");
  const contrasena = document.getElementById("contrasena");

  document.addEventListener("click", (e) => {
    if (e.target.matches("#btnR")) {
      // eslint-disable-next-line no-undef
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, contrasena.value)
        .then((userCredential) => {
          // Signed in
          // eslint-disable-next-line prefer-const
          let { user } = userCredential;
          // console.log("registrado", user);
        })
        .catch((error) => {
          // eslint-disable-next-line prefer-const
          let errorMessage = error.message;
          // console.log(errorMessage);
        });
    }
  });
}

// registro con Google
export function registroGoogle() {
  const botonGoogle = document.getElementById("botonGoogle");

  botonGoogle.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log("click");
    // eslint-disable-next-line no-undef
    const provider = new firebase.auth.GoogleAuthProvider();
    // eslint-disable-next-line no-undef
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result);
        // console.log("google sign in");
        window.location = "#reglas";
        if (document.getElementById("main").hasChildNodes()) {
          document
            .getElementById("main")
            .removeChild(document.getElementById("main").childNodes[0]);
          document.getElementById("main").appendChild(VistaReglas());
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  });
}

// registro con Facebook
export function registroFacebook() {
  const botonFacebook = document.getElementById("botonFacebook");

  botonFacebook.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log("click");
    // eslint-disable-next-line no-undef
    const provider = new firebase.auth.FacebookAuthProvider();
    // eslint-disable-next-line no-undef
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result);
        // console.log("Facebook sign in");
        window.location = "#reglas";
        if (document.getElementById("main").hasChildNodes()) {
          document
            .getElementById("main")
            .removeChild(document.getElementById("main").childNodes[0]);
          document.getElementById("main").appendChild(VistaReglas());
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  });
}
