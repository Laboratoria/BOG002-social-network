import { CrearItem } from "../Pages/inicio.js";

// Add a new document with a generated id.
export const SavePublicaciones=(publicaciones)=> {

db.collection("publicaciones").add({
    publicaciones
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    CrearItem();
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
}

export const SaveUser = (user) => {
    db.collection("usuarios").add({
       user
    })
    .then((docRef) => {
      console.log("Enviado a la consola firestore ", docRef.id);
      window.location.hash ='#/profile';
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
    
    
  }
   // *********************** accediendo a todos los documentos de la coleccion ******************
db.collection("publicaciones").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    let span = document.createElement("span");
        span.classList.add("nombre-usuario");
  
 
  let div = document.createElement("div");
      div.classList.add("post");// doc.data() is never undefined for query doc snapshots
      console.log( doc.data().publicaciones);
      // doc.id, " => ",
 
    
  });
});