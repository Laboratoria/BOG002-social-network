// Función que guarda una publicación y retorna una promesa

export const guardarPost = (title, description) => {
  console.log(title, description);
  const db = firebase.firestore();
  db.collection('Publicaciones').doc().set({
    title,
    description,
  });
};
// Función obtener publicaciones
// export const getPublicaciones = () => {
//       db.collection('Publicaciones').get();
//       window.addEventListener('DOMContentLoaded', async (e) => {
//       e.preventDefault();
//       const querySnapshot = await getPublicaciones();
  
//       querySnapshot.forEach((doc) => {
//         console.log(doc.data());
//         contenedorPost.innerHTML += `
//         <div>
//         ${doc.data().title}
//         </div>
//         `;
//       });
//     });
// }  
//     formPost.addEventListener('submit', async (e) => {
//       e.preventDefault();
  
//       // Se guarda el elemento en las constantes
//       const title = document.getElementById('postTitle');
//       const description = document.getElementById('postDescription');
  
//       // Utiliza la función para guardar publicacion
//       await guardarPost(title.value, description.value);
//       formPost.reset();
//       title.focus();
  
//       console.log(title, description);
//       console.log('Enviando...');
//     });
//   }
  