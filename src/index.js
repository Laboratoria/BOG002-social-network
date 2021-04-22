// import { services } from './firebase/services.js';

// Este es el punto de entrada de tu aplicacion

// import { Information, assignName } from './auth/newUser.js';
import { renderFormRegister } from './views/Register.js';
// import { renderLogin } from './views/LogIn.js'
import { gridImage } from './components/image-grid.js'
import { renderFormLogin } from './views/LogIn.js'
import { card } from './components/register-login_card.js'
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
let arrayUser;
/*

document.querySelector('.formRegister').addEventListener('submit', userRegistration);

document.querySelector('.buttonVisibility').addEventListener('click', () => {
  const changeType = document.getElementById('userPassword');
  if (changeType.type === 'password') {
    changeType.type = 'text';
    document.getElementById('visibility').style.display = 'block';
    document.getElementById('noVisibility').style.display = 'none';
  } else {
    changeType.type = 'password';
    document.getElementById('visibility').style.display = 'none';
    document.getElementById('noVisibility').style.display = 'block';
  }
});
document.querySelector('.formHome').addEventListener('submit', userRegistration);

document.querySelector('.buttonVisibilityHome').addEventListener('click', () => {
  const changeType = document.getElementById('userPassword');
  if (changeType.type === 'password') {
    changeType.type = 'text';
    document.getElementById('visibilityHome').style.display = 'block';
    document.getElementById('noVisibilityHome').style.display = 'none';
  } else {
    changeType.type = 'password';
    document.getElementById('visibilityHome').style.display = 'none';
    document.getElementById('noVisibilityHome').style.display = 'block';
  }
});

function changePages() {
  const inicioHome = document.getElementById('linkRegister');
  inicioHome.onclick = () => {
    document.querySelector('.divSignIn').style.display = 'none';
    document.querySelector('.divFormRegister').style.display = 'block';
    document.querySelector('.imgLogo').style.display = 'block';
    document.querySelector('.imgTrama').style.display = 'block';
  };
}

changePages();*/

const rootContainer = document.getElementById('root');
let hash = window.location.hash.substring(1);
document.addEventListener('DOMContentLoaded', renderRegister());
window.addEventListener('hashchange', () => {
  let hash = window.location.hash.substring(1);
  Router(hash)}) 
// console.log(hash);
  function Router(hash){
    console.log(hash);
    switch(hash){
      case 'LogInToRegister':
        renderRegister();
        break;
      case 'profile':
        renderProfile();
        break;
      case 'post':
        renderPost();
        break;
      case 'login':
        // renderLogin();
        break;
      default:
        break;  
    }
  }
function renderLogin(){
    const $divg = document.createElement("div"); 
    $divg.classList.add('register-login-container');
    document.querySelector('.body').appendChild($divg);
    gridImage($divg);
    const $newDiv = $divg.appendChild(card());
    renderFormLogin($newDiv); 
    console.log("ingresa render login");
}

function renderRegister(){
  const $divg = document.createElement("div"); 
  $divg.classList.add('register-login-container');
  document.querySelector('.body').appendChild($divg);
  gridImage($divg);
  const $newDiv = $divg.appendChild(card());
  renderFormRegister($newDiv);
}

function renderProfile(){
  const container = `<p> esto es profile </p>`;
  document.querySelector('.body').insertAdjacentHTML('beforeend', container);
}

