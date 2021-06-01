export const registroUsuario = (correo, contrasena) => {
  console.log(correo, contrasena);
  firebase.auth().createUserWithEmailAndPassword(correo, contrasena)
    .then((userCredential) => {
    // Signed in
      console.log(userCredential.user);
    // ...
    })
    .catch((error) => {
      console.log('error', error.message);
    // ..
    });
};
// export const loginUsuario = (correo, contrasena) => {
//   console.log(correo, contrasena);
//   firebase.auth().signInWithEmailAndPassword(correo, contrasena)
//     .then((userCredential) => {
//     // Signed in
//       console.log(userCredential.user);
//     // ...
//     })
//     .catch((error) => {
//       console.log('error', error.message);
//     });
// };
