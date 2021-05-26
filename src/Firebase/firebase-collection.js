

// Add a new document with a generated id.
export const SavePublicaciones=(publicaciones)=> {
 
db.collection("publicaciones").add(
    publicaciones
)
        .then((docRef) => {
        console.log('enviado a la consola de firestore')
})
        .catch((error) => {
           console.error("Error adding document: ", error);
});
}

export const SaveUser = (user) => {
  const usuariosRef =  db.collection("usuarios")
  .add(
       user
    )
        .then((docRef) => {
          console.log("Enviado a la consola firestore ", docRef.id);
          window.location.hash ='#/profile';
    })
        .catch((error) => {
         console.error("Error adding document: ", error);
    });
    
    
  }
   
  //Delete
/* 
  const desertRef = storageRef.child('images/desert.jpg');

// Delete the file
desertRef.delete().then(function() {
  // File deleted successfully
}).catch(function(error) {
  // Uh-oh, an error occurred!
}); */


//contar los like
/* function toggleStar(postRef, uid) {
  postRef.transaction((post) => {
    if (post) {
      if (post.stars && post.stars[uid]) {
        post.starCount--;
        post.stars[uid] = null;
      } else {
        post.starCount++;
        if (!post.stars) {
          post.stars = {};
        }
        post.stars[uid] = true;
      }
    }
    return post;
  });
}
 */
   // *********************** accediendo a todos los documentos de la coleccion ******************
   const usuarioID =userCredential.user.uid
   db.collection("publicaciones") .orderBy("fecha", "desc");
export async function MostrarPublicaciones(){

     const Publicar = document.getElementById("publicaciones")
     db.collection("publicaciones").onSnapshot((Snapshot) => {
  
        Publicar.innerHTML = ``;
        Snapshot.forEach((doc ) => {
          
        Publicar.innerHTML += `	
              	<div class="post">
                    <span class="nombre-usuario" > <a href="#profile">${doc.data().nombre}</a> </span>
                    <span class="contenido">${doc.data().descripcion } </span>
                    <div id="fecha-lugar">
                       <span class="fecha" > ${doc.data().fecha }</span>
                       <span class="lugar"> <img src="./imagenes/Location-1.svg">${doc.data().lugar }</span>
                    </div>
                    <div class="interaciones">
                    <img src="./imagenes/Star-1.svg"> 
                    <img src="./imagenes/More Square.png">
                    </div>
                 <div>`
                
  });
});}

   // *********************** eliminando  los documentos de la coleccion ******************

// db.collection("cities").doc("DC").delete().then(() => {
//   console.log("Document successfully deleted!");
// }).catch((error) => {
//   console.error("Error removing document: ", error);
// });

// Actualizacion de Usuario
usuariosRef.doc('ETgI7y2sV97wnUDlngKG')
.update({
  nombre: 'Carlos',
  apellido: 'Perez',
  descripcion: 'guia'
})
