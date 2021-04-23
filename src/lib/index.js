// aqui exportaras las funciones que necesites
import { formularioRegistro } from './vistas.js';

const idregistro = document.getElementById('registro');

const router = (route) => {
  idregistro.innerHTML = '';
  console.log(route);
  switch (route) {
    case '#/inicio':
      return console.log('aiuda');
    case '#/registro': {
      return idregistro.appendChild(formularioRegistro());
    }
    default:
      return console.log('si funciona pero  esta enlazando la principal');
  }
};

export const myFunction = () => {
  window.addEventListener('hashchange', () => {
    router(window.location.hash);
  });
};
