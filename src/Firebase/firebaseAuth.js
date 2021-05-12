// se trae desde main js 
import {modalError, modalErrorLogin} from  '../Pages/error.js'


// crear cuenta de usuario

export const autenticacionUsuario =(email, password)=>{

  auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    userCredential.user;
    console.log( userCredential.user)
    // ...
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
      userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log('error',error);
      modalErrorLogin(error);
    });
  }
