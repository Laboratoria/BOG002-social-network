// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
// import {FormularioDeRegistro} from './lib/SingUp.js';
myFunction();


const submit = document.querySelector("#signUp");
submit.addEventListener("hashchange", MostrarRegistro)

function MostrarRegistro(){
    
    // FormularioDeRegistro();
  console.log("Haz dado click en resgistrar")
 }

 function FormularioDeRegistro(){
     console.log("Hola")
     let vaciar =  document.getElementById("Body") 
     vaciar.innerHTML = ""
    const NewForm = document.createElement("form");

    // const Main = document.getElementsByTagName("main")
    // const Formulario = 
    
    NewForm.innerHTML= `
    
    <h1> Created account </h1>
    
    <input type="text" class="input" placeholder="User name"> 
    <input type="email" class="input" placeholder="email"> 
    <input type="password" class="input" placeholder="password> 
    
    <button type="submit" id="Register" class="btn" > <a href="#Register"> REGISTER</a></button>
    
    `;
   document.getElementById("Body").appendChild(NewForm)
  
}

