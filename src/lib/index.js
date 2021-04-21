// aqui exportaras las funciones que necesites
import {vistas} from './vistas.js';

const idregistro= document.getElementById("registro")

const router = (route)=>{
  console.log(route)
  switch (route){
    case '#/inicio':
        return console.log ("aiuda")
   case '#/registro':{
     return idregistro.appendChild(vistas())
   }
       default:
           return console.log("si funciona pero  esta enlazando la principal")
      
}
};

export const myFunction = () => {
  // aqui tu codigo

  window.addEventListener('hashchange',()=>{
    router(window.location.hash);
    
  });
};