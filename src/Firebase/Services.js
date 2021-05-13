/**
 *
 * @param {string} email
 * @param {string} password
 */
export const singUp = (email, password, errorInput) => {
    const auth = firebase.auth();
    return auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            window.location = "#/home";
            return user.email;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                errorInput.textContent = 'The password is too weak'
            } else {
                errorInput.textContent = errorMessage
            }
            console.log(error);
        });
};

export const authGoogle = () => {
    const auth = firebase.auth();
    const google_provider = new firebase.auth.GoogleAuthProvider();
    return auth
        .signInWithPopup(google_provider)
        .then((result) => {
            window.location = "#/home";
            return result
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
            return error;
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
export const login = (email, password, errorInput) => {
    const auth = firebase.auth();
    return auth
        .signInWithEmailAndPassword(email, password)
        .then((user) => {

            window.location = "#/home";
            return user.email;

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode == 'auth/user-not-found') {
                errorInput.textContent = 'The given email not corresponding'
            } else if (errorCode == 'auth/wrong-password') {
                errorInput.textContent = 'The password is invalid'
            } else {
                errorInput.textContent = errorMessage
            }
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
            window.location = "#/";
            // Sign-out successful.
        })
        .catch((error) => {
            console.log(error);
            // An error happened.
        });
};