// se trae desde main js 
<<<<<<< HEAD:src/firebaseAuth.js
import {modalError, modalErrorLogin} from  './Pages/error.js'
import {FormularioDeIngreso,DatosDeLogin} from './Pages/Login.js';


=======
import {modalError, modalErrorLogin} from  '../Pages/error.js'
>>>>>>> 2debc0dceec3d8a3d6532df1d9fb66a5cf78ae3f:src/Firebase/firebaseAuth.js


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
  if (user) {
    let content = document.getElementById('root');
      content.innerHTML = 
          contenido
  }               else {
      content.innerHTML = 
      FormularioDeIngreso();
      DatosDeLogin();
   // No user is signed in.
  }
  
}