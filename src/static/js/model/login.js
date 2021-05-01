
//Inicio de sesión con Google
export const logInGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
};



// Inicio de sesión con Facebook

export const logInFacebook = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // The signed-in user info.
            var user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = credential.accessToken;

            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            // ...
        });
}

// Inicio de sesión con email y password
export const logInEmail = (email, password, signinForm) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            signinForm.reset();
            console.log('signin')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}

// Creación de cuenta con email y password 
export const signUpEmail = (email, password, signupForm) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            signupForm.reset();
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}
