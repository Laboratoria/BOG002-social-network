// Add a new document with a generated id.
export const SavePublicaciones=(publicaciones)=> {
 
db.collection("publicaciones").add(
    publicaciones
)
        .then((docRef) => {
           console.log("enviado")
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
   // *********************** accediendo a todos los documentos de la coleccion ******************

   db.collection("publicaciones") .orderBy("fecha", "desc");
export async function MostrarPublicaciones(){

     const Publicar = document.getElementById("publicaciones")
     db.collection("publicaciones").onSnapshot((Snapshot) => {
  
        Publicar.innerHTML = ``;
        Snapshot.forEach((doc ) => {
          
        Publicar.innerHTML += `	
              	<div class="post">
                    <span class="nombre-usuario" > <a href="#profile">${doc.data().publicaciones.nombre}</a> </span>
                    <span class="contenido">${doc.data().publicaciones.descripcion } </span>
                    <div id="fecha-lugar">
                       <span class="fecha" > ${doc.data().publicaciones.fecha }</span>
                       <span class="lugar"> <img src="./imagenes/Location-1.svg">${doc.data().publicaciones.lugar }</span>
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