export const login = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);

};

