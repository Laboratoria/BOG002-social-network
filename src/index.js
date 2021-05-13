// Function Register
export const register = (email, password) => {
  const auth = firebase.auth();
  return auth.createUserWithEmailAndPassword(email, password);
};

// Función Login
export const Login = (email, password) => {
  const auth = firebase.auth();
  return auth.signInWithEmailAndPassword(email, password);
};

// Función Register Google
export const registerGoogle = (provider) => {
  const auth = firebase.auth();
  return auth.signInWithPopup(provider);
};

// Función Sing Out
export const signOut = () => {
  const auth = firebase.auth();
  return auth.signOut();
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

export const editPosts = (id, input) => {
  const fireStoreCollection = firebase.firestore().collection('posts');
  return fireStoreCollection.doc(id).update({
    Contents: input,
  });
};
