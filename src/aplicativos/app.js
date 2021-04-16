// aqui exportaras las funciones que necesites

import {VistaReglas} from "../componentes/reglas.js";

// creando cuenta de usuario
export function registrar() {
  window.location = "#login";
  const email = document.getElementById("usuario");
  const contrasena = document.getElementById("contrasena");

  document.addEventListener("click", (e) => {
    if (e.target.matches("#btnR")) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, contrasena.value)
        .then((userCredential) => {
          // Signed in
          let {user} = userCredential;
          console.log("registrado", user);
        })
        .catch((error) => {
          let errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  });
}

// registro con Google
export function registroGoogle() {
  const botonGoogle = document.getElementById("botonGoogle");

  botonGoogle.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click");
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        console.log("google sign in");
        window.location = "#reglas";
        if (document.getElementById("main").hasChildNodes()) {
          document
            .getElementById("main")
            .removeChild(document.getElementById("main").childNodes[0]);
          document.getElementById("main").appendChild(VistaReglas());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

// registro con Facebook
export function registroFacebook() {
  const botonFacebook = document.getElementById("botonFacebook");

  botonFacebook.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click");
    const provider = new firebase.auth.FacebookAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        console.log("Facebook sign in");
        window.location = "#reglas";
        if (document.getElementById("main").hasChildNodes()) {
          document
            .getElementById("main")
            .removeChild(document.getElementById("main").childNodes[0]);
          document.getElementById("main").appendChild(VistaReglas());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
