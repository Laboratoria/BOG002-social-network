// Add a new document with a generated id.
export const SavePublicaciones=(publicaciones)=> {

db.collection("publicaciones").add({
    publicaciones
})
.then((docRef) => {
    console.log( docRef.id);

    // meter coleccion
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

   	//******Esta funcion trae toda la 
    //coleccion de firebase y la pinta al inicio, nos falta organizar por fecha****** 

export function MostrarPublicaciones(){

     const Publicar = document.getElementById("publicaciones")
    
    db.collection("publicaciones").get().then((querySnapshot) => {
         Publicar.innerHTML = ``;
         querySnapshot.forEach((doc) => {

      Publicar.innerHTML += `	
    	<div class="post">
         <span class="nombre-usuario" > ${doc.data().publicaciones.nombre }</span>
         <span class="lugar">${doc.data().publicaciones.lugar }</span>
         <div class="contenido">${doc.data().publicaciones.descripcion } </div>
         
      <div>`
    
  });
});}
