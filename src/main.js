import { registrar } from "./aplicativos/app";

document.addEventListener("DOMContentLoaded", (event) => {
  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyA2m-bpDqmXGFYJbMrfjW2J77TVNXINzS0",
    authDomain: "social-network-lab-2030d.firebaseapp.com",
    projectId: "social-network-lab-2030d",
    storageBucket: "social-network-lab-2030d.appspot.com",
    messagingSenderId: "394433220416",
    appId: "1:394433220416:web:c1629dcc59e45f53bd74a5",
    measurementId: "G-LMMGYHH9BN",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  CrearFormulario();

  // BOTON QUE CREA CUENTA
  document.getElementById("btnI").addEventListener("click", () => {
    const mail = document.getElementById("usuario").value;
    const pwd = document.getElementById("contrasena").value;
    registrar(mail, pwd);
  });
});

// BOTON LOGIN CON GOOGLE
document.getElementById("google-login").addEventListener("click", googleLogin)
  
// BOTON LOGIN CON FACEBOOK
document.getElementById("facebook-login").addEventListener("click", facebookLogin)

// BOTON PARA LOGIN CON EMAIL Y PASSWORD
document.getElementById("login-btn").addEventListener("click", ()=> {
  const email = document.getElementById("login-mail").value;
  const password = document.getElementById("login-pwd").value;
  emailLogin(email, password);
})
