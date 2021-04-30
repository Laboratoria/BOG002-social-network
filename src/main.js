// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import {FormularioDeRegistro} from './lib/SingUp.js';
import {FormularioDeIngreso} from './lib/Login.js';
  
myFunction();


//  capturamos el valor de los inputs de registro 





// Mostrando pantallas de registro e inicio

const Registro = document.querySelector("#signUp");
      Registro .addEventListener("click", MostrarRegistro)

const ingresoUsuario = document.querySelector("#login");
      ingresoUsuario .addEventListener("click", MostrarIngreso);

function MostrarRegistro(){
    
    FormularioDeRegistro();
    console.log("Haz dado click en registrar")
 }

 function MostrarIngreso(){
    
  FormularioDeIngreso();
  console.log("Haz dado click en Login")
}