export function ingreso() {
    const botonAcceder = document.getElementById("botonAcceder");
    botonAcceder.addEventListener('click', () => {
      const email = document.getElementById("usser").value;
      const password = document.getElementById("password").value;
  
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    });
  }
  function observador() {
    firebase.auth().onAuthStateChanged((user2) => {
      if (user2) {
        console.log("existe usuario");
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user2.uid;
        // ...
      } else {
        console.log("no existe usuario");
        // User is signed out
        // ...
      }
    });
  }
  observador();