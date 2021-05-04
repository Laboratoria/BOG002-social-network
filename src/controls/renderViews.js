import { renderFormRegister } from '../views/RegisterForm.js';
import { renderFormLogin } from '../views/LogInForm.js';
import { gridImage } from '../components/image-grid.js';
import { card } from '../components/register-login_card.js';
import { userRegistration } from './Register.js';
import { visibility } from '../components/visibilityPassword.js';
import { userLogIn } from './LogIn.js';
import { LogInGoogle } from '../auth/logInUser.js';
import { RetrieveData } from '../controls/prueba.js'
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

export function renderHome($containerGeneral, db) {
  const mql = window.matchMedia('(max-width: 768px)');
  const desktop = document.createElement('desktop-menu');
  const mobile = document.createElement('mobile-menu');
  const postCard = document.createElement('post-card');
  function pantalla(mobileView, value) {
    if (mobileView) {
      if (value) $containerGeneral.removeChild(desktop);
      // console.log("pantalla pequeña");
      $containerGeneral.appendChild(mobile);
      $containerGeneral.appendChild(postCard);
    } else {
      if (value) $containerGeneral.removeChild(mobile);
      $containerGeneral.appendChild(desktop);
      $containerGeneral.appendChild(postCard);
    }
  }
  mql.addEventListener('change', (e) => {
    const mobileView = e.matches;
    pantalla(mobileView, true);
  });
  const mobileView = mql.matches;
  pantalla(mobileView, false);
  RetrieveData(db);
}
