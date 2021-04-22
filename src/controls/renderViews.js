import { renderFormRegister } from '../views/RegisterForm.js';
import { renderFormLogin } from '../views/LogInForm.js';
import { gridImage } from '../components/image-grid.js';
import { card } from '../components/register-login_card.js';


export function renderLogin($containerGeneral){    
    gridImage($containerGeneral);
    const $newDiv = $containerGeneral.appendChild(card());
    renderFormLogin($newDiv); 
     console.log("ingresa render login");
}

export function renderRegister($containerGeneral){
  console.log($containerGeneral);
  gridImage($containerGeneral);
  const $newDiv = $containerGeneral.appendChild(card());
  renderFormRegister($newDiv);
 // document.querySelector('.formRegister').addEventListener('submit', userRegistration());
}

export function renderProfile($containerGeneral){
  const container = `<p> esto es profile </p>`;
  document.querySelector('.body').insertAdjacentHTML('beforeend', container);
}