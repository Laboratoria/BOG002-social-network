export const Information = (email, password) => new Promise((resolve, reject) => {
  // llamarlibreria();
  firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // console.log(typeof(user));
    resolve(user);
  })
    .catch((error) => {
      const errorCode = error.code;
      reject(errorCode);
    });
});

export const assignName = (username) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user.updateProfile({
        displayName: username,
      });
    }
    // console.log(user);
  });
};
