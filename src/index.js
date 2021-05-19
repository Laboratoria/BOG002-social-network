// Function Register
export const register = (email, password) => {
  const registerNewUser = firebase.auth().createUserWithEmailAndPassword(email, password);
  return registerNewUser;
};

// Función Login
export const Login = (email, password) => {
  const loginUser = firebase.auth().signInWithEmailAndPassword(email, password);
  return loginUser;
};

// Función Register Google
export const registerGoogle = (provider) => {
  const registerUserWithGoogle = firebase.auth().signInWithPopup(provider);
  return registerUserWithGoogle;
};

// Función Sing Out
export const signOut = () => {
  const signOutUser = firebase.auth().signOut();
  return signOutUser;
};

// Funcion subir publicaciones

export const collectionPost = (email, input, date, uid) => {
  const fireStoreCollection = firebase.firestore().collection('posts');
  return fireStoreCollection.add({
    Title: email,
    Contents: input,
    Date: date,
    Uid: uid,
  });
};
export const getPosts = (callback) => {
  firebase.firestore().collection('posts')
    .orderBy('Date', 'desc')
    .onSnapshot(callback);
};

// Funcion eliminar publicaciones
export const deletePosts = (id) => {
  const fireStoreCollection = firebase.firestore().collection('posts');
  return fireStoreCollection.doc(id).delete();
};

// Funcion editar publicaciones
export const editPosts = (id, input) => {
  const fireStoreCollection = firebase.firestore().collection('posts');
  return fireStoreCollection.doc(id).update({
    Contents: input,
  });
};
