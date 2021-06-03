export const registroUsuario = (correo, contrasena) => {
  console.log(correo, contrasena);
  firebase.auth().createUserWithEmailAndPassword(correo, contrasena)
    .then((userCredential) => {
    // Signed in
      console.log('Usuario registrado', userCredential.user);
    // ...
    })
    .catch((error) => {
      console.log('error', error.message);
    // ..
    });
};
export const loginUsuario = (correo, contrasena) => {
  console.log(correo, contrasena);
  firebase.auth().signInWithEmailAndPassword(correo, contrasena)
    .then((userCredential) => {
    // Signed in
      console.log('Usuario logueado', userCredential.user);
    // ...
    })
    .catch((error) => {
      console.log('error', error.message);
    });
};

export const logoutUsuario = (correo, contrasena) => {
  console.log(correo, contrasena);
  firebase.auth().sigOut()
    .then(() => {
      console.log('Sesion Cerrada');
    });
};
