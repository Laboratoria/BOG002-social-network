export const Information = (email, password, username) => new Promise((resolve, reject) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
    const userc = userCredential.user;
    userc.updateProfile({
      displayName: username,
    }).then(() => {
      resolve(userc);
    });
  })
    .catch((error) => {
      const errorCode = error.code;
      reject(errorCode);
    });
});
/*
export const assignName = (username) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user.updateProfile({
        displayName: username,
      });
    }
    // console.log(user);
  });
}; */
/*
export const LogIn = (email, password) => new Promise((resolve, reject) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      resolve(user);
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      reject(errorCode);
    });
});

export const LogInGoogle = () => new Promise((resolve) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then(() => {
    /** @type {firebase.auth.OAuthCredential} */
// const credential = result.credential;
// const token = credential.accessToken;
// const user = result.user;
// console.log(user);
// resolve(window.location.hash = '#home');
/* Queda pendiente validar el error de login con otro proveedor */
// user.unlink(provider).then(() => {
//   // Auth provider unlinked from account
//   console.log("deslinkeado de Google")
// }).catch((error) => {
//   // An error happened
//   // ...
// });
// });
/* .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      // const email = error.email;
      // const credential = error.credential;
      // console.log(errorMessage);
      reject(errorMessage);
    }); */
// });
