// import { db } from './firebaseConfig.js';

const db = firebase.firestore();

export const savePost = (title, description) => {
  db.collection('Publicaciones').doc().set({
    title,
    description,
  });
};

// funcion que trae todas las publicaciones de una collection
export const getPost = () => db.collection('Publicaciones').get();

// funcion que actualiza cada vez que existen cambios

export const onGetPost = (callback) => db.collection('Publicaciones').onSnapshot(callback);
