import { db } from './firebaseConfig.js';

export const registroUsuario = (correo, contrasena) => {
    console.log(correo, contrasena);
    firebase.auth().createUserWithEmailAndPassword(correo, contrasena)
        .then((userCredential) => {
            // Signed in
            console.log('Usuario registrado', userCredential.user);
            // ...
        })
        .catch((error) => {
            console.log('error', error.message);
            // ..
        });
};
export const loginUsuario = (correo, contrasena) => {
    console.log(correo, contrasena);
    firebase.auth().signInWithEmailAndPassword(correo, contrasena)
        .then((userCredential) => {
            // Signed in
            console.log('Usuario logueado', userCredential.user);
            // ...
        })
        .catch((error) => {
            console.log('error', error.message);
        });
};

export const logoutUsuario = (correo, contrasena) => {
    console.log(correo, contrasena);
    firebase.auth().sigOut()
        .then(() => {
            console.log('Sesion Cerrada');
        });
};


// logeandonos con google
export function loginGoogle() {
    const googleButton = document.getElementById('googleLogin');
    googleButton.addEventListener('click', () => {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    });
}


// logeamos con Facebook
export function loginFacebook() {
    const facebookButton = document.getElementById('facebookLogin');
    facebookButton.addEventListener('click', (e) => {
        e.preventDefault();
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                console.log(result)
                console.log('facebook sin ing');
            })
            .catch((err) => {
                console.log(err);
            })
    })
}

export const savePost = (title, description) => {
    db.collection('Publicaciones').doc().set({
      title,
      description,
    });
  };
