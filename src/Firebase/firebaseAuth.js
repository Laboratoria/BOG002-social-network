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
        modalError(error);
});
})}
// *****************  ingresando usuario  ******************

export const LoginUsuario = (email,password) =>{
        firebase.auth()

  .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log( "id de usuario: " + userCredential.user.uid)
      window.location.hash ='#/release'
})
    .catch((error) => {
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
    console.log('no se pudo cerrar sesion')
  });
}
