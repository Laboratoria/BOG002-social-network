// aqui exportaras las funciones que necesites
import { formularioRegistro} from './vistas.js';

const idRegistro = document.querySelector('#registro');

export const router = (route) => {
  idRegistro.innerHTML = '';
  console.log(route);
  switch (route) {
    case '#/inicio':
      console.log('aiuda');
      break;
    case '#/registro': 
      idRegistro.innerHTML=`<formulario-registro></formulario-registro>`;
      formularioRegistro();
    break;
    default:
      return console.log('si funciona pero  esta enlazando la principal');
  }
};

