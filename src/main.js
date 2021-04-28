// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import {FormularioDeRegistro} from './lib/SingUp.js';
myFunction();


const submit = document.querySelector("#signUp");
submit.addEventListener("click", MostrarRegistro)

function MostrarRegistro(){
    
    const prueba = FormularioDeRegistro
    // console.log(prueba)
    return prueba
 }

 