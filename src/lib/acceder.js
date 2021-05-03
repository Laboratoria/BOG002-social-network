//import { formularioInicio } from "./vistas";

export function ingreso() {
    const form = document.getElementById("formularioInicio");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
      const mail = document.getElementById("usser").value;
      const contraseña = document.getElementById("password").value;
      
firebase.auth().signInWithEmailAndPassword(mail, contraseña)
      .then((inicio) => {
        // Signed in
        var user = inicio.user;
        console.log("hace alguna cosa plis :/")
        // ...
      })
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
    });
  }
 
 

  function observador() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("existe usuario y es: " +user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        
        // ...
      } else {
        console.log("no existe usuario");
        // User is signed out
        // ...
      }
    });
  };
  observador();

