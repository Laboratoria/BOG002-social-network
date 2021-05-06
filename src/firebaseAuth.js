// se trae desde main js 
console.log(auth)
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
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // ..
  });
} 