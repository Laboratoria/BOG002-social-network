// aqui exportaras las funciones que necesites

import { formularioRegistro} from './vistas.js';
import { registro} from './registrar.js';

const idRegistro = document.querySelector('#registro');

export const router = (route,componenteHtml) => {
  idRegistro.innerHTML = '';
  console.log(route);
  switch (route) {
    case '#/inicio':
      console.log('aiuda');
      break;
    case '#/registro': 
    componenteHtml.style.display="none";  
    idRegistro.innerHTML=`<formulario-registro></formulario-registro>`
    formularioRegistro();
    registro();
    break;
    default:
      return console.log('si funciona pero  esta enlazando la principal');
  }
};