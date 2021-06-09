import { guardarPost } from '../firebase/firebaseStorage.js';

export function vistaPost() {
  const viewsPost = `
    <form id="formPost">
    <div>
    <input type="text" id="postTitle" placeholder="titulo publicacion" autofocus>
    </div>
    <div>
    <textarea id="postDescription" rows="3" placeholder="Descripcion publicación"></textarea>
    </div>
    <button id="btnFormPost">Guardar</button>
    </form>
    <div id="contenedorPost">
    </div>
    `;

  const formPost = document.createElement('div');
  formPost.innerHTML = viewsPost;
  return formPost;
}

export function eventoGuardarPost() {
  const formPost = document.getElementById('formPost');
  // const contenedorPost = document.getElementById('contenedorPost');

  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    // Se guarda el elemento en las constantes
    const title = document.getElementById('postTitle');
    const description = document.getElementById('postDescription');

    // Utiliza la función para guardar publicacion
    await eventoGuardarPost(title.value, description.value);
    formPost.reset();
    title.focus();
    guardarPost(title.trim(), description.trim());

    // console.log(title, description);
    // console.log('Enviando...');
  });
}


//   // Función obtener publicaciones
  
//   const getPublicaciones = () =>
//     db.collection('Publicaciones').get();
//   window.addEventListener('DOMContentLoaded', async (e) => {
//     e.preventDefault();
//     const querySnapshot = await getPublicaciones();

//     querySnapshot.forEach((doc) => {
//       console.log(doc.data());
//       contenedorPost.innerHTML += `
//       <div>
//       ${doc.data().title}
//       </div>
//       `;
//     });
//   });


