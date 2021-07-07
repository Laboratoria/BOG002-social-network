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
<<<<<<< HEAD
      // Signed in
      userCredential.user.currentUser;
=======
      console.log( "id de usuario: " + userCredential.user.uid)
    
>>>>>>> 7fa67bbcb42b65b71fb0ca4395da8ee172efac38
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
// Actualizar perfil del usuario
/* user.updateProfile({
  displayName: "Jane Q. User",
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
  */
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