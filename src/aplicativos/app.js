// aqui exportaras las funciones que necesites

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
          const user = userCredential.user;
          //console.log('registrado');
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //console.log(errorMessage);
          // ..
        });
    }
  });
}

export function registroGoogle() {
  const botonGoogle = document.getElementById("botonGoogle");

  botonGoogle.addEventListener("click", (e) => {
    e.preventDefault();
    //console.log('click');
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        //console.log(result);
        //console.log('google sign in');
      })
      .catch((err) => {
        //console.log(err);
      });
  });
}

//registro con Facebook

export function registroFacebook() {
  const botonFacebook = document.getElementById('botonFacebook');

  botonFacebook.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    const provider = new firebase.auth.FacebookAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        console.log('Facebook sign in');
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
