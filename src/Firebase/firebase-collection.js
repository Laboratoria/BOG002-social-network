// Add a new document with a generated id.
export const SavePublicaciones=(publicaciones)=> {
 
db.collection("publicaciones").add({
    publicaciones
})
        .then((docRef) => {
           console.log("enviado")
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


export  function MostrarPublicaciones(){

     const  Publicar = document.getElementById("publicaciones");
     db.collection("publicaciones").onSnapshot((querySnapshot) => {

        Publicar.innerHTML = ``;
        querySnapshot.forEach((doc ) => {
         
        Publicar.innerHTML += `	
              	<div class="post" data-id="${doc.id}">
                    <span class="nombre-usuario" > ${doc.data().publicaciones.nombre} </span>
                    <span class="contenido">${doc.data().publicaciones.descripcion } </span>
                    <div id="fecha-lugar">
                       <span class="fecha" > ${doc.data().publicaciones.fecha }</span>
                       <span class="lugar"> <img src="./imagenes/Location-1.svg">${doc.data().publicaciones.lugar }</span>
                    </div>
                    <div class="interaciones">
                        <img src="./imagenes/Star-1.svg"> 
                        <img src="./imagenes/More Square.png">
                        <i class="far fa-edit" ></i>
                        <span class="basura">
                        <i class="fas fa-trash-alt" ></i>
                        </span>
                    </div>
                 <div>`
                
  });
});}

   // *********************** eliminando  los documentos de la coleccion ******************
   export function eliminar (){
     const  Publicar = document.getElementById("publicaciones");
     const btnsBorrar = Publicar.querySelectorAll(".basura");

btnsBorrar.forEach((btn) =>
         btn.addEventListener("click",  () => {

            db.collection("publicaciones").doc(id).delete()

            .then(() => {
                   console.log("Document successfully deleted!");
})
            .catch((error) => {
                   console.error("Error removing document: ", error);
});
}))
}
