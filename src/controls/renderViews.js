import { renderFormRegister } from '../views/RegisterForm.js';
import { renderFormLogin } from '../views/LogInForm.js';
import { gridImage } from '../components/image-grid.js';
import { card } from '../components/register-login_card.js';
import { userRegistration } from './Register.js';
import { visibility } from '../components/visibilityPassword.js';
import { userLogIn } from './LogIn.js';
import { LogInGoogle } from '../controls/LogIn.js';
import { RetrieveData } from '../controls/prueba.js'
import { HomeDesktop } from '../views/homeDesktop.js';
import { HomeMobile } from '../views/homeMobile.js';
import { post } from '../views/post.js';
import { profile } from '../views/profile.js'
import '../components/menu-mobile.js';
import '../components/menu-desktop.js';
import '../components/post-card.js';

function gridAndCard($containerGeneral) {
  const $containerRegisterLogin = document.createElement('div');
  $containerRegisterLogin.classList.add('root-container');
  gridImage($containerRegisterLogin);
  $containerGeneral.appendChild($containerRegisterLogin);
  const $newDiv = $containerRegisterLogin.appendChild(card());
  return $newDiv;
}

export function renderLogin($containerGeneral) {
  gridAndCard($containerGeneral).innerHTML += renderFormLogin();
  document.querySelector('.formHome').addEventListener('submit', userLogIn);
  visibility();
  document.querySelector('.buttonInicioGoogle').addEventListener('click', LogInGoogle);
  // console.log('ingresa render login');
}

export function renderRegister($containerGeneral) {
  gridAndCard($containerGeneral).innerHTML += renderFormRegister();
  document.querySelector('.formRegister').addEventListener('submit', userRegistration);
  visibility();
}

export function renderPost($containerGeneral, nameUser){
  Menu($containerGeneral);
  document.querySelector('.body_container').innerHTML += post(); 
  const p = document.createElement('p');
  p.textContent = "Prueba2";
  const wcPost = document.querySelector("post-card");
  wcPost.shadowRoot.querySelector(".ubication-container").appendChild(p);
}

export function renderProfile($containerGeneral, nameUser){
  Menu($containerGeneral);
  console.log("profile");
  profile();
}

export function renderError($containerGeneral){
  $containerGeneral.innerHTML = "Página no encontrada";
}

export function renderHome($containerGeneral, db){
  // const postCard = document.createElement('post-card'); 
  const postCard = `<post-card src="assets/imagesIcon/LikeBlueV.png">
  <span slot="headerPostTitle">nombre usuario</span>
  <span slot="descriptionPost">lugar</span>
  </post-card>`;
  //const headerPostTitle = `<span slot="headerPostTitle">nombre usuario</span>`;
  //const descriptionPost = `<span slot="descriptionPost">lugar</span>`;
  Menu($containerGeneral);
  document.querySelector('.body_container').innerHTML+= postCard; 
  //postCard.innerHTML+=headerPostTitle;
  //postCard.innerHTML+=descriptionPost;
  console.log("home");
  // RetrieveData(db);
  // home();
}

function Menu($containerGeneral) {
  const mql = window.matchMedia('(max-width: 768px)');
  function pantalla(mobileView) {
   // $containerGeneral.innerHTML= HomeMobile();
    if (mobileView) {
      $containerGeneral.innerHTML= HomeMobile();    
    } else {
      $containerGeneral.innerHTML= HomeDesktop();
    }
  }
  mql.addEventListener('change', (e) => {
    const mobileView = e.matches;
    pantalla(mobileView);
    location.reload();
  });
  const mobileView = mql.matches;
  pantalla(mobileView);
}

