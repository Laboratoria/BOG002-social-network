import { renderFormRegister } from '../views/RegisterForm.js';
import { renderFormLogin } from '../views/LogInForm.js';
import { gridImage } from '../components/image-grid.js';
import { card } from '../components/register-login_card.js';
import { userRegistration } from './Register.js';
import { visibility } from '../components/visibilityPassword.js';
import { userLogIn } from './LogIn.js';
import { LogInGoogle } from '../auth/logInUser.js';

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

export function renderHome($containerGeneral) {
  const container = '<p> esto es home </p>';
  document.querySelector('.body').insertAdjacentHTML('afterbegin', container);
}

//export function renderHome() {
//  const container = home();
//  document.querySelector('.body').insertAdjacentHTML('afterbegin', container);
//}
