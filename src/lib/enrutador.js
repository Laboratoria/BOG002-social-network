// aqui exportaras las funciones que necesites

import { formularioRegistro,formularioInicio } from './vistas.js';
import { registro,google} from './registrar.js';
import { ingreso } from './acceder.js';

const idRegistro = document.querySelector('#registro');
const logo=document.querySelector("#logo");
const idInicio = document.querySelector('#inicio');

export const router = (route,componenteHtml) => {
  
  idRegistro.innerHTML = '';
  console.log(route);
  switch (route) {
    case '#/inicio':
      idInicio.style.display = 'block';
      logo.style.display = 'none';
      componenteHtml.style.display="none"; 
      idInicio.innerHTML = '<formulario-inicio></formulario-inicio>';
      formularioInicio();
      ingreso();
      break;
    case '#/registro':
      logo.style.display="none";
      componenteHtml.style.display="none"; 
    idRegistro.innerHTML=`<formulario-registro></formulario-registro>`
    formularioRegistro();
    registro();
    google();
    break;
    default:
      return console.log('si funciona pero  esta enlazando la principal');
  }
};
