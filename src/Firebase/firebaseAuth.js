// se trae desde main js 


/* import { CerrarSesion } from '../Pages/inicio.js'; */
import {FormularioDeIngreso,DatosDeLogin} from '../Pages/Login.js';
import {modalError, modalErrorLogin} from  '../Pages/error.js'


// crear cuenta de usuario

export const autenticacionUsuario =(email, password)=>{

  auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    userCredential.user;
    window.location.hash ='#/release'
  })
  .catch((error) => {
    console.log("error", error)
    modalError(error);
  });
} 

// ingresando usuario

export const LoginUsuario = (email,password) =>{
        firebase.auth()

  .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      window.location.hash ='#/release'
      //  userCredential.user;
 
    })


    .catch((error) => {
      console.log('error',error);
      modalErrorLogin(error);
    });
  }

  // solo usuarios logeados

 export function SoloUsuarios(contenido){
  var user = firebase.auth().currentUser;
  let content = document.getElementById('root');
  if (user) {
       content.innerHTML = 
          contenido
  }else {
      content.innerHTML = 
      FormularioDeIngreso();
      DatosDeLogin();
   // No user is signed in.
  }
  
}
// cerrar sesion
export function Salir(){
  
  firebase.auth().signOut()
  .then(() => {
    // Sign-out successful.
    window.location.hash = "#/login"
  }).catch((error) => {
    // An error happened.
    console.log('no se pudo cerrar sesion')
  });
}
