// Inicio de sesión con Google
export const logInGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            var credential = result.credential;
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
        })
        .catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        })
};

// Inicio de sesión con Facebook

export const logInFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            var credential = result.credential;
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
        })
        .catch(error => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        })
};

// Inicio de sesión con email y password
export const logInEmail = (email, password,signinForm) => {
    auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            signinForm.reset();
            console.log('signin')
        })
}

// Creación de cuenta con email y password 
export const signUpEmail = (email, password,signupForm) => {
    //Comprobar que el email no esté duplicado
    firebase.database()
        .ref('usuarios')
        .orderByChild('usuario')
        .equalTo(user)
        .on('value', function(snapshot) {
            console.log(snapshot.exists() ? 'user exist' : 'user non existent');
        }, function(error) {
            console.log(error);
       });
    //Si existe, escribe en consola User Exist. Si no, User non existent 
    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            signupForm.reset();
        });
}
