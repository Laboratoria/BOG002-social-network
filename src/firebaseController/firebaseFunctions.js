export function crearUsuario (email,password){
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      return true;
    })
    .catch((error) => {
      const errorMessage = error.message;
      return errorMessage;
})
}
