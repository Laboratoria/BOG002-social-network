import {modalError, modalErrorLogin} from  '../Pages/error.js'

// *****************crear cuenta de usuario*****************

export const autenticacionUsuario =(email, password, Name)=>{

  auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
          // Signed in 
          window.location.hash ='#/release'
          return result.user.updateProfile({
                  displayName: Name
    })
      .catch((error) => {
        console.log("error", error)
        modalError(error);
  });
})}


// *****************  ingresando usuario  ******************

export const LoginUsuario = (email,password) =>{
        firebase.auth()

  .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      userCredential.user;
      console.log(userCredential.user)
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

const db = firebase.firestore();

export const SaveUser = (user) => {
  db.collection("usuarios").add({
     user
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
  
  
}