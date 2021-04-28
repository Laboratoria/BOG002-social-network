// LOGIN CON GOOGLE
export function registroGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

// LOGIN CON FACEBOOK

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
  const botonGoogle = document.getElementById('botonGoogle');

  botonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    providerGoogle(provider)
      .then(() => {
        irReglas();
      })
      .catch(() => {
      });
  });
}

// export function logout() {
//   firebase
//     .auth()
//     .signOut()
//     .then(function () {
//       // Sign-out successful.
//     })
//     .catch(function (error) {
//       // An error happened.
//       // console.log(error);
//     });
// }

  botonFacebook.addEventListener('click', (e) => {
    e.preventDefault();
    const provider = new firebase.auth.FacebookAuthProvider();
    providerFacebook(provider)
      .then(() => {
        irReglas();
      })
      .catch(() => {
      });
  });
}
