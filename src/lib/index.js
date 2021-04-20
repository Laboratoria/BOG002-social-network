function llamarlibreria() {
  const firebaseConfig = {
    apiKey: 'AIzaSyCNJzDnQucoug5jUE-5pEodaacilcQTyAw',
    authDomain: 'nomadas-3c02d.firebaseapp.com',
    databaseURL: 'https://nomadas-3c02d.firebaseio.com',
    projectId: 'nomadas-3c02d',
    storageBucket: 'nomadas-3c02d.appspot.com',
    messagingSenderId: '189718883297',
    appId: '1:189718883297:web:c200b22cbcb8c28c4a80a0',
  };

  firebase.initializeApp(firebaseConfig);
}

export const Information = (email, password) => new Promise((resolve, reject) => {
  llamarlibreria();
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
