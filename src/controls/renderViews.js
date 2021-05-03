import { renderFormRegister } from '../views/RegisterForm.js';
import { renderFormLogin } from '../views/LogInForm.js';
import { gridImage } from '../components/image-grid.js';
import { card } from '../components/register-login_card.js';
import { userRegistration } from './Register.js';
import { visibility } from '../components/visibilityPassword.js';
import { userLogIn } from './LogIn.js';
import { LogInGoogle } from '../auth/logInUser.js';
import '../components/menu-mobile.js';
import '../components/menu-desktop.js';

function gridAndCard() {
  const $containerGeneral = document.createElement('div');
  $containerGeneral.classList.add('bigContainer');
  $containerGeneral.setAttribute('id','idBigContainer');
  document.querySelector('.body').appendChild($containerGeneral);
  document.querySelector('.bigContainer').innerHTML = '';
  const $containerRegisterLogin = document.createElement('div');
  $containerRegisterLogin.classList.add('root-container');
  gridImage($containerRegisterLogin);
  $containerGeneral.appendChild($containerRegisterLogin);
  const $newDiv = $containerRegisterLogin.appendChild(card());
  return $newDiv;
}

export function renderLogin() {
  gridAndCard().innerHTML += renderFormLogin();
  document.querySelector('.formHome').addEventListener('submit', userLogIn);
  visibility();
  document.querySelector('.buttonInicioGoogle').addEventListener('click', LogInGoogle);
  // console.log('ingresa render login');
}

export function renderRegister() {
  gridAndCard().innerHTML += renderFormRegister();
  document.querySelector('.formRegister').addEventListener('submit', userRegistration); 
  visibility();
}

export function renderHome() {
  const mql = window.matchMedia('(max-width: 768px)'); 
  const desktop = document.createElement("desktop-menu");
  const mobile = document.createElement("mobile-menu");
  function pantalla(mobileView, value){
    if (mobileView) {
      if(value){ document.querySelector('.body').removeChild(desktop); }
      console.log("pantalla pequeña");
      document.body.appendChild(mobile);
    } else {
      if(value){ document.querySelector('.body').removeChild(mobile); }
      console.log("pantalla grande");      
      document.body.appendChild(desktop);
    }
  }
  mql.addEventListener('change', (e) => { 
    const mobileView = e.matches;
    pantalla(mobileView, true);
  });  
  const mobileView = mql.matches;
  pantalla(mobileView, false);
}
