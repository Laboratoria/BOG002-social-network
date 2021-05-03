export const registerUSer = (emailRegistro, passwordRegistro) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailRegistro, passwordRegistro)
    .then((userCredential) => {
    // Signed in
      console.log(userCredential.user);
      // var user = userCredential.user;
    })
    .catch((error) => {
      console.log('error', error.message);
      // var errorCode = error.code;
      // var errorMessage = error.message;
    });
};

export const loginUSer = (emailLogin, passwordLogin) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(emailLogin, passwordLogin)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential.user);
      // var user = userCredential.user;
    })
    .catch((error) => {
      console.log('error', error.message);
    // var errorCode = error.code;
    // var errorMessage = error.message;
    });
};
