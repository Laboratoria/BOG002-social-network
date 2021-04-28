import { router } from './router/router.js';

window.addEventListener('load', () => {    
    router(window.location.hash)
})


window.addEventListener('hashchange', () => {  
    //console.log(window.location.hash)  
    router(window.location.hash)    
})




// // Este es el punto de entrada de tu aplicacion


// //Hide the 2nd screen
// document.getElementById("screenLogIn").style = "display:normal"
// document.getElementById("screenRegistration").style = "display:none"
// document.getElementById("screenWall").style = "display:none"


// //Button (crear Cuenta)
// const btnCreateAccount = document.getElementById("btnCreateAccount");
// btnCreateAccount.addEventListener('click', () => {
//     document.getElementById("screenLogIn").style = "display:none"
//     document.getElementById("screenRegistration").style = "display:normal"
// });

// //Button (cerrar Registro)
// const btnCloseRegistration = document.getElementById("btnCloseRegistration");
// btnCloseRegistration.addEventListener('click', () => {
//     document.getElementById("screenRegistration").style = "display:none"
//     document.getElementById("screenLogIn").style = "display:normal"
// });

// // Button (iniciar sesión)
// const btnSignIn = document.getElementById("btnLogIn");
// btnSignIn.addEventListener('click', () => {
//     let email = document.getElementById('signInEmail').value
//     let password = document.getElementById('signInpassword').value
//     if (email && password) {
//         //if (email != "" && password != "")
//         //if (email.length>0 && password.length>0)

//         login(email, password)
//             .then(() => {
//                 document.getElementById("screenRegistration").style = "display:none"
//                 document.getElementById("screenLogIn").style = "display:none"
//                 document.getElementById("screenWall").style = "display:normal"
//             })
//             .catch(() => {
//                 console.log("ocurrio un error")
//             })
//     }
//     else {
//         console.log("error ingresar email")
//     }

//})



// Button (Cerrar Sesión)
// const btnLogOut = document.getElementById("btnLogOut");
// btnLogOut.addEventListener('click', () => {
//     document.getElementById("screenRegistration").style = "display:none"
//     document.getElementById("screenLogIn").style = "display:normal"
//     document.getElementById("screenWall").style = "display:none"
// });


