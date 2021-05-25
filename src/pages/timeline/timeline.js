import {
  signOut,
  collectionPost,
  deletePosts,
  editPosts,
  getPosts,
  setLikesPost,
  getLikesPost,
  deleteLikes,
} from '../../index.js';

const auth = firebase.auth();

// Template screen muro
export function timelinePage() {
  const view = `
        <section id="screenWall">
                   
            <header>
                <div class="headerWall">
                    <img id="WikiBlack" src="assets/WikiMomsNegro.png">
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
                  <h3 id= "errorInputPost"></h3>
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

// Template funcion modal eliminar post
export function modalDelete(idPost) {
  const modal = `<section>
          <div id="modal_container" class="modal-container">
          <div class="modal">
            <p id="modal">¿Estas segura de eliminar esta publicación?</p>
            <button type="button"id="delete" data-id="${idPost}">Cancelar</button>
            <button type="button" id="buttonModalDeletePost" data-id="${idPost}"> Aceptar </button>
          </div>
        </div>
      </section>
    `;
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
        window.location.hash = '#/';
      })
      .catch(() => {
      });
  });
  return true;
}

// Función enviando datos al FireBase
export function newCollectionPost() {
  const btnPosts = document.getElementById('btnPost');
  btnPosts.addEventListener('click', () => {
    const newPost = document.getElementById('inputPost').value;
    const userMail = auth.currentUser;
    const user = userMail.email;
    const date = new Date();
    const userID = userMail.uid;
    if (newPost.length === 0) {
      const errorInput = document.getElementById('errorInputPost');
      errorInput.innerHTML = 'Ingresa un texto para completar tu publicación';
      setTimeout(() => {
        errorInput.innerHTML = '';
      }, 3000);
    } else {
      collectionPost(user, newPost, date, userID);
    }
  });
}

// Función mostrar Posts
function showPosts(doc) {
  const postlist = document.getElementById('listPost');
  let html = '';
  getLikes(doc.id);
  const post = doc.data();
  const idPost = post.Uid;
  const idUser = auth.currentUser.uid;
  console.log(idPost, idUser)
    if (idPost === idUser) { //Mostrar botones editar y eliminar publicacion del mismo usuario
      const li = `
        <li id="${doc.id}" >
          <div id="containerTitlePost">
            <img id="imgUserMobile" src="assets/IconoUsuario.png">
            <h3 id="titlePost">${post.Title}</h3>
            <button type="button" class="btnEditPost" data-id="${doc.id}"><img id="imageEdit" src="assets/logoEditar.png"></button>
            <button type="button" class="btnDeletePost" data-id="${doc.id}"><img id="imageDelete" src="assets/logoEliminar.png"></button>
          </div> 
        <p id="datePost">${(new Date(post.Date.seconds * 1000)).toLocaleDateString('es-CO')}</p>                
        <input value='${post.Contents}' id="textPost${doc.id}" disabled = "true" ></input>
        <div id="containerLikes"
          <span class="likesCounter" id="likePost${doc.id}">0</span>
          <button type="button" class="btnlikesPost" id="btnLikes${doc.id}" data-id="${doc.id}"><img id="imageLike" src="assets/IconoCorazon2.png"></button>
          <button type="button" class="btnDislikesPost" id="btnDisLikes${doc.id}" data-id="${doc.id}"><img id="imageDisLike" src="assets/IconoCorazonLinea.png"></button>
        </li>
        `;
    html += li;
    postlist.insertAdjacentHTML('afterbegin', html);
    } else {  //Mostrar publicacion sin botones de editar y eliminar 
      const li = `
        <li id="${doc.id}" >  
          <div id="containerTitlePost">
            <img id="imgUserMobile" src="assets/IconoUsuario.png">
            <h3 id="titlePost">${post.Title}</h3> 
          </div> 
          <p id="datePost">${(new Date(post.Date.seconds * 1000)).toLocaleDateString('es-CO')}</p>                
          <input value='${post.Contents}' id="textPost${doc.id}" disabled = "true" ></input>
          <div id="containerLikes"
            <span class="likesCounter" id="likePost${doc.id}">0</span>
            <button type="button" class="btnlikesPost" id="btnLikes${doc.id}" data-id="${doc.id}"><img id="imageLike" src="assets/IconoCorazon2.png"></button>
            <button type="button" class="btnDislikesPost" id="btnDisLikes${doc.id}" data-id="${doc.id}"><img id="imageDisLike" src="assets/IconoCorazonLinea.png"></button>
          </div>
        </li>
        `;
    html += li;
    postlist.insertAdjacentHTML('afterbegin', html);
  }
}

// Función modal para eliminar Publicaciones
function deleteColletionPosts() {
  const buttonModalDeletePost = document.querySelector('#buttonModalDeletePost');
  buttonModalDeletePost.addEventListener('click', () => {
    const mostrarModal = document.querySelector('#modal_container');
    mostrarModal.classList.add('show');
    const deleteP = deletePosts(buttonModalDeletePost.dataset.id);
    deleteP.then(() => {
      document.getElementById(buttonModalDeletePost.dataset.id).remove();
    });
    mostrarModal.classList.remove('show');
  });
}

function cancelModal() {
  const buttoncancelModal = document.querySelector('#delete');
  buttoncancelModal.addEventListener('click', () => {
    const mostrarModal = document.querySelector('#modal_container');
    mostrarModal.classList.add('show');
    mostrarModal.classList.remove('show');
  });
}

// Función eliminando publicaciones
function modalDeleteColletionPosts() {
  const btnDeletePosts = document.querySelectorAll('.btnDeletePost');
  btnDeletePosts.forEach((button) => {
    button.addEventListener('click', () => {
      const modalCreate = document.getElementById('modalCreate');
      const modal = modalDelete(button.dataset.id);
      modalCreate.innerHTML = '';
      modalCreate.appendChild(modal);
      const mostrarModal = document.querySelector('#modal_container');
      mostrarModal.classList.add('show');
      deleteColletionPosts();
      cancelModal();
    });
  });
}

// Función editando publicaciones
function editColletionPosts() {
  const buttonEditPosts = document.querySelectorAll('.btnEditPost');
  buttonEditPosts.forEach((button) => {
    button.addEventListener('click', () => {
      const buttonAux = button;
      buttonAux.innerHTML = '<img id="imageSave" src="assets/logoGuardar.png">';
      const inputText = document.getElementById(`textPost${button.dataset.id}`).value;
      const newInput = document.getElementById(`textPost${button.dataset.id}`);
      const idPost = button.dataset.id;
      newInput.disabled = false;

      buttonAux.onclick = () => {
        editPosts(idPost, inputText)
          .then(() => {
            buttonAux.innerHTML = '<img id="imageSave" src="assets/logoEditar.png">';
            newInput.disabled = true;
          })
          .catch(() => { });
      };
    });
  });
}

// Función enviando datos a la collección Likes  en FireBase
function newCollectionLikes(idPost) {
  const btnLikes = document.getElementById(`btnLikes${idPost}`);
  btnLikes.addEventListener('click', () => {
    const user = auth.currentUser;
    const postID = btnLikes.dataset.id;
    const userID = user.uid;
    setLikesPost(postID, userID);
    getLikes(postID);
    btnLikes.style.display = 'none';

  });
}

function getLikes(idPost) {
  const datalikes = [];
  let likes = 0;
  getLikesPost(idPost)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        datalikes.push(doc.data());
        if (doc.data().Uid === auth.currentUser.uid) {
          const idBtnLikes = document.getElementById(`btnDisLikes${idPost}`);
          const btnLikes = document.getElementById(`btnLikes${idPost}`);
          idBtnLikes.addEventListener('click', () => {
            deleteLikes(doc.id);
            console.log(doc.id)
            idBtnLikes.style.display = 'none';
            btnLikes.style.display = 'block';

          })

        } else {

        }
      });
      likes = datalikes.length;
      const likePost = document.getElementById(`likePost${idPost}`);
      likePost.innerHTML = likes;
    })
}

// Funcion publicaciones en pantalla
export function postsTimeline() {
  // Eventos actualizar y publicar post verificando si el usuario esta en su sesión
  auth.onAuthStateChanged((user) => {
    const postlist = document.getElementById('listPost');
    if (user) {
      getPosts((snapshot) => {
        if (snapshot.docChanges().length === 0) {
          postlist.innerHTML = '<p>No hay publicaciones</p>';
        }
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            showPosts(change.doc);
            modalDeleteColletionPosts();
            editColletionPosts();
            newCollectionLikes(change.doc.id);
          }
        });
      });
    } else {
      postlist.innerHTML = '<h1>No hay publicaciones, Inicia sesión o registrarte para ver las publicaciones </h1>';
    }
  });
}
