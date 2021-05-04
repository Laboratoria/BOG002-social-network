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
            var user = userCredential.user;
            console.log(user, "pruebaUser");
            formRegister.reset();
            window.location = '#/home';
        })
        .catch((error) => {
            console.log(error);
        });
}

export const authGoogle = () => {
    const google_provider = new firebase.auth.GoogleAuthProvider();
    const auth = firebase.auth();
    auth
        .signInWithPopup(google_provider)
        .then((result) => {
            window.location = '#/home';
        })
        .catch((error) => {
            console.log(error);
        });
}

export const authFacebook = () => {
    const providerFb = new firebase.auth.FacebookAuthProvider();
    const auth = firebase.auth();
    auth
        .signInWithPopup(providerFb)
        .then((result) => {
            window.location = '#/home';
        })
        .catch((error) => {
            console.log(error);
        });
}