// Este es el punto de entrada de tu aplicacion
// import { services } from './firebase/services.js';
import { configurationFireBase } from './firebase/config.js';
import { router } from './controls/router.js';

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

changePages(); */

configurationFireBase();

// document.addEventListener('DOMContentLoaded', renderLogin());

// console.log(hash);

const init = () => {
  let hash = window.location.hash.substring(1);
  const $containerGeneral = document.createElement('div');
  $containerGeneral.classList.add('bigContainer');
  document.querySelector('.body').appendChild($containerGeneral);
  document.querySelector('.bigContainer').innerHTML = '';
  router(hash, $containerGeneral);

  window.addEventListener('hashchange', () => {
    hash = window.location.hash.substring(1);
    document.querySelector('.bigContainer').innerHTML = '';
    router(hash, $containerGeneral);
  });
};

init();
