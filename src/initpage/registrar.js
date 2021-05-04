
import {registroFirebaseEmail,googleFirebase} from '/firebase/firebase.js'

export function registro(){
 let form= document.querySelector('#formularioRegistro');


form.addEventListener('submit', (e)=>{
    e.preventDefault() ;
    var email=document.getElementById("email").value;
    var password=document.getElementById("psw").value; 
    registroFirebaseEmail(email,password)
})}
export function google() {
  let googleInicio = document.querySelector('#google');
  googleInicio.addEventListener('click', () => {
     googleFirebase();
     
   });
}
