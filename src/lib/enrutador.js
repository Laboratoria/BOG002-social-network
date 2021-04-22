// aqui exportaras las funciones que necesites
import { formularioRegistro} from './vistas.js';

const idregistro = document.querySelector('#registro');

export const router = (route) => {
  idregistro.innerHTML = '';
  console.log(route);
  switch (route) {
    case '#/inicio':
      console.log('aiuda');
      break;
    case '#/registro': 
      formularioRegistro();
    break;
    default:
      return console.log('si funciona pero  esta enlazando la principal');
  }
};

