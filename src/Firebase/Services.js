/**
 *
 * @param {string} email
 * @param {string} password
 */
export const singUp = (email, password) => {
  const auth = firebase.auth();
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      formRegister.reset();
      window.location = "#/home";
    })
    .catch((error) => {
      console.log(error);
    });
};

export const authGoogle = () => {
  const auth = firebase.auth();
  const google_provider = new firebase.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(google_provider)
    .then((result) => {
      window.location = "#/home";
    })
    .catch((error) => {
      console.log(error);
    });
};

export const authFacebook = () => {
  const auth = firebase.auth();
  const providerFb = new firebase.auth.FacebookAuthProvider();
  auth
    .signInWithPopup(providerFb)
    .then((result) => {
      window.location = "#/home";
    })
    .catch((error) => {
      console.log(error);
    });
};

// Login
export const login = (email, password) => {
  const auth = firebase.auth();
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      // eslint-disable-next-line no-undef
      formRegister.reset();
      console.log(userCredential);
      window.location = "#/home";
      // ...
    })
    .catch((error) => {
      console.log(error);
    });
};

// sign out button
export const signOut = () => {
  const auth = firebase.auth();
  auth
    .signOut()
    .then(() => {
      console.log("sign out");
      window.location = "#/landing";
      // Sign-out successful.
    })
    .catch((error) => {
      console.log(error);
      // An error happened.
    });
};
