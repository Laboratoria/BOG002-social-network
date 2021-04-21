import { auth } from "./firebaseConfig.js";

export const crearUsuario = (email, password) => auth
  .createUserWithEmailAndPassword(email, password);

export const nuevoIngreso = (email, password) => auth
  .signInWithEmailAndPassword(email, password);

export const providerGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const providerFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
