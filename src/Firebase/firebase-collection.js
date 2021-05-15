// Add a new document with a generated id.
export const SavePublicaciones=(publicaciones)=> {

db.collection("publicaciones").add({
publicaciones
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
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
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
    
    
  }