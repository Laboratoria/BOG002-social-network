// aqui exportaras las funciones que necesites
import {registro} from './vistas.js';

let idregistro= document.getElementById("registro")

const router = (route)=>{
  idregistro.innerHTML="";
  console.log(route) 
  switch (route){
    case '#/inicio':
        return console.log ("aiuda")
   case '#/registro':{
     return idregistro.appendChild(registro())
   }
       default:
           return console.log("si funciona pero  esta enlazando la principal")
      
}
};

export const myFunction = () => {
  window.addEventListener('hashchange',()=>{
    router(window.location.hash);
    
  });
};