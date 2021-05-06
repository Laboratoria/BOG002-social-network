// se trae desde main js 

export function AutenticacionDeUsuario (email, password){
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential.user) ;
    // ...
  })
  .catch((error) => {
    // ..
  });
} 