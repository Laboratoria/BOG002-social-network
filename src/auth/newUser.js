export const Information = (email, password) => new Promise((resolve, reject) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
    const userc = userCredential.user;
    // console.log(userc);
    resolve(userc);
  })
    .catch((error) => {
      const errorCode = error.code;
      reject(errorCode);
    });
});
