import { savePost, getPost, onGetPost } from '../firebase/firebaseStorage.js';

export function vistaPost() {
  const viewsPost = `
  <div>
    <form id="formPost">
      <div class="form-group">
        <input type="text" id="postTitle" placeholder="titulo publicacion" class="form-control" autofocus>
      </div>
      <div class="form-group">
        <textarea id="postDescription" rows="5" placeholder="Descripcion publicación" class="form-control"></textarea>
      </div>
      <button class="btn-Guardar">Guardar</button>
    </form>
  </div>
  <div id="postContainer">
  </div>
  `;
  const formulario = document.createElement('div');
  formulario.innerHTML = viewsPost;
  return formulario;
}

export function postEvento() {
  const formPost = document.getElementById('formPost');
  const postContainer = document.getElementById('postContainer');
  
  formPost.addEventListener('submit', async (e) => {
  e.preventDefault();
    
    const title = document.getElementById('postTitle');
    const description = document.getElementById('postDescription');
    
    await savePost(title.value, description.value);
  
    await getPost();
    formPost.reset();
    title.focus();
    // console.log(title, description);
  });

  window.addEventListener('DOMContentLoaded', async (e) => {
    // console.log(e);
    // const posts -> querySnapshot (objeto que podemos recorrer)
    // const querySnapshot = await getPost();
    // console.log(posts);
    onGetPost((querySnapshot) => {
      postContainer.innerHTML = '';
      querySnapshot.forEach((doc) => {
      console.log(doc.data());
      const post = doc.data();
      postContainer.innerHTML += `
      
      <div>
        <textarea>
        ${post.title}
        ${post.description}
        </textarea>
        <div>
        <button class="btn-Borrar">Borrar</button> 
        <button class="btn-Editar">Editar</button>
        </div>
      </div>
      
      `;
      });
    });
  });
}
