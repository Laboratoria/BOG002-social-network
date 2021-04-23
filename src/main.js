import CrearFormulario from "./componentes/formulario.js";
import {
  registrar,
  registroGoogle,
  registroFacebook,
} from "./aplicativos/app.js";
import ingresar from "./aplicativos/ingreso.js";
import CrearRegistro from "./componentes/registro.js";

const main = document.getElementById("main");
main.appendChild(CrearFormulario());

registrar();
registroGoogle();
registroFacebook();
ingresar();

document.addEventListener("DOMContentLoaded", (event) => {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAzb47AU23OXlHs6sjt-uGq9ZcbwuaBVTg",
    authDomain: "red-social-profesores.firebaseapp.com",
    databaseURL: "https://red-social-profesores.firebaseio.com",
    projectId: "red-social-profesores",
    storageBucket: "",
    messagingSenderId: "847131414857",
  };
  firebase.initializeApp(config);
  loginPage();

  // BOTON LOGIN CON GOOGLE
  document
    .getElementById("google-login")
    .addEventListener("click", googleLogin);

  // BOTON LOGIN CON FACEBOOK
  document
    .getElementById("facebook-login")
    .addEventListener("click", facebookLogin);

  // BOTON PARA LOGIN CON EMAIL Y PASSWORD
  document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("login-mail").value;
    const password = document.getElementById("login-pwd").value;
    emailLogin(email, password);
  });

  // BOTON QUE VUELVE AL LOGIN
  document.getElementById("volver").addEventListener("click", loginPage);
});
