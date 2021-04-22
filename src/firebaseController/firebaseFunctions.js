export const crearUsuario = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const nuevoIngreso = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const providerGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const providerFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
