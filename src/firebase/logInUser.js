export const LogIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const LogInGoogleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const LogOutAuth = () => {
  return firebase.auth().signOut();
}

export const createUser = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};


