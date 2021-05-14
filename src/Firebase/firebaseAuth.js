// se trae desde main js 

import {modalError, modalErrorLogin} from  '../Pages/error.js'


// *****************crear cuenta de usuario*****************

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

// *****************  ingresando usuario  ******************

export const LoginUsuario = (email,password) =>{
        firebase.auth()

  .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      window.location.hash ='#/release'
    })
    .catch((error) => {
      console.log('error',error);
      modalErrorLogin(error);
    });
  }

  // *********************** solo usuarios logeados ******************

 export function SoloUsuarios(){
   
  let user = firebase.auth().currentUser;
    return user;
}
// ************************ cerrar sesion ******************************
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
