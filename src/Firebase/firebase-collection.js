// Add a new document with a generated id.
db.collection("Publicaciones").add({
    nombre: "Tokyo",
    foto:"",
    descripcion: "Japan",
    lugar:""
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});