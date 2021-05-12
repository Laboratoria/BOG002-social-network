// se trae desde main js 
import {modalError, modalErrorLogin} from  './Pages/error.js'
import {inicio} from './Pages/inicio.js'


// crear cuenta de usuario

export const autenticacionUsuario =(email, password)=>{

  auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    userCredential.user;
    // console.log( userCredential.user)
    inicio();
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
      inicio();
     console.log(inicio())
    })
    .catch((error) => {
      console.log('error',error);
      modalErrorLogin(error);
    });
  }
