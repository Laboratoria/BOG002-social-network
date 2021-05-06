// aqui exportaras las funciones que necesites

import { formularioRegistro,formularioInicio } from '../HTMLscreens/formularios.js';
import { registro,google} from '../initpage/registrar.js';
import { ingreso } from '../initpage/acceder.js';
import{templateMovil} from '../HTMLscreens/baseMovil.js';

const idRegistro = document.querySelector('#registro');
const logo=document.querySelector("#logo");
const idInicio = document.querySelector('#inicio');
const basePrimera= document.querySelector('#basePrimera');
const forminicio=document.querySelector('#inicio');
const barras=document.querySelector('#baseMovil')
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

      case '#/principal':
        // console.log("listo,enlazo");
        console.log(forminicio)
        forminicio.style.display="none";
        basePrimera.innerHTML=`<base-movil></base-movil>`
        templateMovil();

        break
  }
};
