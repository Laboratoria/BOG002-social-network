// import { auth } from './config.js'; 

// const login = (email, password) => {
//     return firebase.auth().signInWithEmailAndPassword(email, password);
//   };

//   //Registro de usuarios
// const signUpForm = document.querySelector('#signUp');
// signUpForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const signEmail = document.querySelector('#signUpEmail').value
//     const signPassword = document.querySelector('#signUpPassword').value

//     console.log(signEmail, signPassword)

//     auth
//         .createUserWithEmailAndPassword(signEmail, signPassword)
//         .then(userCredential => {
//             console.log('Creaste una nueva cuenta')
//             signUpForm.reset();
//         })
// })

// // Inicio de sesión 
// const signInForm = document.querySelector('#signIn');
// signInForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const signInEmail = document.querySelector('#signInEmail').value
//     const signInPassword = document.querySelector('#signInpassword').value
//     console.log(signInEmail, signInPassword)

//     auth
//         .signInWithEmailAndPassword(signInEmail, signInPassword)
//         .then(userCredential => {
//             console.log('Ingresaste a tu cuenta')
//             signInForm.reset();
//         })
// })

// // Cerrar sesión 
// const logOut = document.querySelector('#logOut');
// logOut.addEventListener('submit', (e) => {
//     e.preventDefault();
//     auth
//         .signOut().then(() => {
//             console.log('Cerraste Sesión')
//         })
// })

