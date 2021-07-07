import {PrintCollection} from '../Pages/post.js'
// *********************** AGREGAR PUBLICACIONES A LA COLECCION *********************** 
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
// *********************** AGREGAR USUARIOS A LA COLECCION *********************** 
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
       db.collection('publicaciones').orderBy("fecha", "desc").onSnapshot((querySnapshot) =>  {
         
        Publicar.innerHTML = ``;
        querySnapshot.forEach((doc) => {

         let ID          = doc.id;
         let NombreUser  = doc.data().nombre;
         let Descripcion = doc.data().descripcion;
         let Fecha       = doc.data().fecha;
         let Lugar       = doc.data().lugar;
         
         PrintCollection (Publicar, ID, NombreUser, Descripcion, Fecha, Lugar);
         
});
eliminar();
});
}
   // *********************** Eliminando  los documentos de la coleccion por id ******************
  
function eliminar(){

   let btnsBorrar = document.querySelectorAll("button.basura");
   console.log(btnsBorrar);

   btnsBorrar.forEach((btn) =>{
      btn.addEventListener("click",() => {
         // const node= this.closest(".post") Llamar alpadre post 
         console.log(this)
// con el padre tomaremos su id 
         db.collection("publicaciones").doc("id").delete()

         .then(() => {
            console.log("Borrado");
         })
         .catch((error) => {
            console.error("Error removing document: ", error);
         });
      }
   )})
}

 // *********************** editar los documentos de la coleccion por id ******************
export function editar(){
   const db = firebase.firestore(); 
         db.collection("publicaciones").doc("id").update({
      //  Lugar: 
      //  Descripcion: 
      //  ID: postID,
      //  Nombre: 
      //  Fecha:
   })
   .then(() => {
       //console.log("documento editado!");
       location.reload();
   })
   .catch((error) => {
       console.error("Ocurrió algún error al editar el post: ", error);
   });
}



