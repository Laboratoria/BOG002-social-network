export const crearUsuario = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const nuevoIngreso = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const providerGoogle = (provider) => firebase.auth().signInWithPopup(provider);

export const providerFacebook = (provider) => firebase.auth().signInWithPopup(provider);
