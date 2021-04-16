/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
import { VistaReglas } from "../componentes/reglas.js";

export function ingresar() {
  const email = document.getElementById("usuario");
  const contrasena = document.getElementById("contrasena");
  // eslint-disable-next-line spaced-comment
  //ingreso con correo y contraseña
  document.addEventListener("click", (e) => {
    if (e.target.matches("#btnI")) {
      e.preventDefault();
      // console.log("click");
      // Autenticación del usuario
      // eslint-disable-next-line no-undef
      auth
        .signInWithEmailAndPassword(email.value, contrasena.value)
        .then((userCredential) => {
          // eslint-disable-next-line no-var
          var { user } = userCredential;
          // console.log("Puede ingresar", user);
          window.location = "#reglas";
          if (document.getElementById("main").hasChildNodes()) {
            document
              .getElementById("main")
              .removeChild(document.getElementById("main").childNodes[0]);
            document.getElementById("main").appendChild(VistaReglas());
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-var
          var errorMessage = error.message;
          // console.log(errorMessage);
          // ..
        });
    }
  });
}
