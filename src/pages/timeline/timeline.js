import { signOut, collectionPost } from '../../index.js';

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
                        <ul id = "listPost">
                        </ul>
                    </div>
                
                </div>
                
            </main>
        </section>       
    `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;

  return divElement;
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
    if (data.length) {
      let html = '';
      data.forEach((doc) => {
        const post = doc.data();
        const li = `
          <li> 
            <h3>${post.Title}</h3> 
            <p>${(new Date(post.Date.seconds * 1000)).toLocaleDateString("es-CO")}</p>                
            <p>${post.Contents}</p>
                        
          </li>
        `;
        html += li;
      });
      postlist.innerHTML = html;
    } else {
      postlist.innerHTML = '<p>No hay publicaciones</p>';
    }
  };

  // Eventos actualizar y publicar verificando si el usuario esta

  auth.onAuthStateChanged((user) => {
    if (user) {
      fireStore.collection('posts')
        .orderBy('Date', 'desc')
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            //if (change.type === 'added'){}
            setPost(snapshot.docs)

          })
          //console.log(snapshot.docChanges())
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
      .then((docRef) => {
        window.reload = '#/timeline'
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  });
}

