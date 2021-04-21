import { login } from './lib/index.js';


//FireBase - Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB610T5XvYzsuL11TBeaOpn2Qldm51r5a8",
    authDomain: "social-network-wikimoms.firebaseapp.com",
    projectId: "social-network-wikimoms",
    storageBucket: "social-network-wikimoms.appspot.com",
    messagingSenderId: "544470390806",
    appId: "1:544470390806:web:cdf6888956a3a1400a7d37"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const fireStore = firebase.firestore();


//Registro de usuarios
const signUpForm = document.querySelector('#signUp');
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const signEmail = document.querySelector('#signUpEmail').value
    const signPassword = document.querySelector('#signUpPassword').value

    console.log(signEmail, signPassword)

    auth
        .createUserWithEmailAndPassword(signEmail, signPassword)
        .then(userCredential => {
            console.log('Creaste una nueva cuenta')
            signUpForm.reset();
        })
})

// Inicio de sesión 
const signInForm = document.querySelector('#signIn');
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const signInEmail = document.querySelector('#signInEmail').value
    const signInPassword = document.querySelector('#signInpassword').value
    console.log(signInEmail, signInPassword)

    auth
        .signInWithEmailAndPassword(signInEmail, signInPassword)
        .then(userCredential => {
            console.log('Ingresaste a tu cuenta')
            signInForm.reset();
        })
})

// Cerrar sesión 
const logOut = document.querySelector('#logOut');
logOut.addEventListener('submit', (e) => {
    e.preventDefault();
    auth
        .signOut().then(() => {
            console.log('Cerraste Sesión')
        })
})

// Este es el punto de entrada de tu aplicacion


//Hide the 2nd screen
document.getElementById("screenLogIn").style = "display:normal"
document.getElementById("screenRegistration").style = "display:none"
document.getElementById("screenWall").style = "display:none"


//Button (crear Cuenta)
const btnCreateAccount = document.getElementById("btnCreateAccount");
btnCreateAccount.addEventListener('click', () => {
    document.getElementById("screenLogIn").style = "display:none"
    document.getElementById("screenRegistration").style = "display:normal"
});

//Button (cerrar Registro)
const btnCloseRegistration = document.getElementById("btnCloseRegistration");
btnCloseRegistration.addEventListener('click', () => {
    document.getElementById("screenRegistration").style = "display:none"
    document.getElementById("screenLogIn").style = "display:normal"
});

// Button (iniciar sesión)
const btnSignIn = document.getElementById("btnLogIn");
btnSignIn.addEventListener('click', () => {
    let email = document.getElementById('signInEmail').value
    let password = document.getElementById('signInpassword').value
    if (email && password) {
        //if (email != "" && password != "")
        //if (email.length>0 && password.length>0)

        login(email, password)
            .then(() => {
                document.getElementById("screenRegistration").style = "display:none"
                document.getElementById("screenLogIn").style = "display:none"
                document.getElementById("screenWall").style = "display:normal"
            })
            .catch(() => {
                console.log("ocurrio un error")
            })
    }
    else {
        console.log("error ingresar email")
    }

})



// Button (Cerrar Sesión)
const btnLogOut = document.getElementById("btnLogOut");
btnLogOut.addEventListener('click', () => {
    document.getElementById("screenRegistration").style = "display:none"
    document.getElementById("screenLogIn").style = "display:normal"
    document.getElementById("screenWall").style = "display:none"
});


