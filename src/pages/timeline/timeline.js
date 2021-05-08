import { signOut, collectionPost, deletePosts } from '../../index.js';

const fireStore = firebase.firestore();
const auth = firebase.auth();

export function timelinePage() {
  const view = `
        <section id="screenWall">
            <header>
                <div class="headerWall">
                    <img src="assets/WikiMomsNegro.png">
                    <img id="imgUser" src="assets/IconoUsuario.png">
                </div>
            </header>
            <main>
                <div class = "container" id = "containerPosts">
                  <form id="logOut">
                    <button class="button" id="btnLogOut">Cerrar sesion</button>
                  </form>
                  <input id="inputPost" class="input" type="text" placeholder="¿Qué nos quieres compartir?">
                  <button id="btnPost" class="button">Publicar</button>
                       <div id ="posts">
                          <ul id = "listPost" >
                          </ul>
                      </div>
                  <div id="modalCreate"></div>
                </div>
                
            </main>
        </section>       
    `;

  const divElement = document.createElement('div');
  divElement.innerHTML = view;

  return divElement;
}

//Template funcion modal eliminar post
export function modalDelete(idPost) {
  const modal =
    `<section>
          <div id="modal_container" class="modal-container">
          <div class="modal">
            <p id="modal">¿Estas segura de eliminar esta publicación?</p>
            <button type="button"id="delete" data-id="${idPost}">Cancelar</button>
            <button type="button" id="buttonModalDeletePost" data-id="${idPost}"> Aceptar </button>
          </div>
        </div>
      </section>
    `
  const divModal = document.createElement('div');
  divModal.innerHTML = modal;
  return divModal;
}

// Funcion cerrar sesión 
export function signOutGoogle() {
  const buttonSignOut = document.getElementById('btnLogOut');
  buttonSignOut.addEventListener('click', () => {
    signOut()
      .then(() => {
        console.log('cerraste sesión');
        window.location = '#/';
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return true;
}

// funcion publicaciones en pantalla
export function postsTimeline() {
  const postlist = document.getElementById('listPost');
  const setPost = (data) => {
    if (data.length > 0) {
      let html = '';
      data.forEach((doc) => {
        const post = doc.data();
        const li = `
          <li id="${doc.id}" > 
            <button type ="button" class="btnDeletePost" data-id="${doc.id}">X</button>
            <h3>${post.Title}</h3> 
            <p>${(new Date(post.Date.seconds * 1000)).toLocaleDateString("es-CO")}</p>                
            <p>${post.Contents}</p>
                        
          </li>
          `;
        html += li;
      });
      postlist.innerHTML = html;
    }
  };

  // Eventos actualizar y publicar post verificando si el usuario esta en su sesión

  auth.onAuthStateChanged((user) => {
    if (user) {
      fireStore.collection('posts')
        .orderBy('Date', 'desc')
        .onSnapshot((snapshot) => {
          if (snapshot.docChanges().length == 0) {
            postlist.innerHTML = '<p>No hay publicaciones</p>'
          }
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              setPost(snapshot.docs)
              modalDeleteColletionPosts()
            }
            if (change.type === 'removed') {
              document.getElementById(change.doc.id).remove()
            }
          })
        })
    } else {
      postlist.innerHTML = '<h1>No hay publicaciones</h1>' + '<h3>Inicia sesión o registrarte para ver las publicaciones </h3>'
    }
  });
}

// funcion enviando datos al FireBase 
export function newCollectionPost() {
  const btnPosts = document.getElementById('btnPost');
  btnPosts.addEventListener('click', () => {
    const newPost = document.getElementById('inputPost').value;
    const userMail = auth.currentUser;
    const user = userMail.email;
    const date = new Date()
    collectionPost(user, newPost, date)
  });
}


// Funcion eliminando publicaciones 

export function modalDeleteColletionPosts() {
  const btnDeletePosts = document.querySelectorAll('.btnDeletePost');
  btnDeletePosts.forEach((button) => {
    button.addEventListener('click', () => {   
      const modalCreate = document.getElementById('modalCreate');
      const modal = modalDelete(button.dataset.id);
      innerHTML.modal="";
      modalCreate.appendChild(modal);
      const mostrarModal = document.querySelector('#modal_container');
      mostrarModal.classList.add("show")
      deleteColletionPosts()
      cancelModal()
    });
  })
}
function deleteColletionPosts() {
  const buttonModalDeletePost = document.querySelector('#buttonModalDeletePost');
  buttonModalDeletePost.addEventListener('click', () => {
    const mostrarModal = document.querySelector('#modal_container');
    deletePosts(buttonModalDeletePost.dataset.id)
    modal_container.classList.remove("show");
  });
}


function cancelModal() {
  const buttoncancelModal = document.querySelector('#delete');
  buttoncancelModal.addEventListener('click', () => {
    const mostrarModal = document.querySelector('#modal_container');
    modal_container.classList.remove("show");
  });
}
