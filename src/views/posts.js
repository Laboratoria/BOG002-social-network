import { savePost } from '../firebase/firebaseAuth.js';

export function vistaPost() {
  const viewsPost = `
  
  <div class="container">
  <div class="row">
      <div class="card">
          <div>
              <form id="formPost">
                  <div class="form-group">
                      <input type="text" id="postTitle" placeholder="titulo publicacion" class="form-control" autofocus>
                  </div>
                  <div class="form-group">
                      <textarea id="postDescription" rows="5" placeholder="Descripcion publicación" class="form-control"></textarea>
                  </div>
                  <button class="btn-Guardar" id="btnFormPost">Guardar</button>
              </form>
           </div>
       </div>
   </div>
 </div>
  `;
  const formPost = document.createElement('div');
  formPost.innerHTML = viewsPost;
  return formPost;
}

export function postEvento() {
  const formPost = document.createElement('div');
  
  formPost.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const title = document.getElementById('postTitle').value;
    const description = document.getElementById('postDescription').value;
    console.log(title, description);
    await savePost(title, description);
    
  });
}
