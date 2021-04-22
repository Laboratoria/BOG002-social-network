// import { Information } from './auth/newUser';

// // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field

// export function userRegistration(event) {
//   event.preventDefault();
//   const username = document.querySelector('.inputNameRegister').value;
//   const email = document.querySelector('.inputEmailRegister').value;
//   const password = document.querySelector('.inputPasswordRegister').value;

//   Information(email, password).then((user) => {
//     // console.log(user);
//     const usuario = document.createElement('div');
//     usuario.innerHTML = user;
//     usuario.className = 'divGhost';
//     assignName(username);
//     const divFormRegister = document.getElementById('divFormRegister');
//     const confirmationRegistro = document.getElementById('formRegister');
//     confirmationRegistro.style.display = 'none';
//     const messageExito = document.createElement('div');
//     messageExito.textContent = 'Tu registro se ha realizado con exito!!!!';
//     messageExito.className = 'messageExitoso';
//     divFormRegister.appendChild(messageExito);
//     const SignupRegister = document.createElement('button');
//     SignupRegister.type = 'button';
//     SignupRegister.innerText = 'Iniciar sesion';
//     SignupRegister.className = 'buttonInicioSesion';
//     messageExito.appendChild(SignupRegister);
//   }).catch((error) => {
//     // console.log(error);
//     const popupEmail = document.querySelector('.popupEmail');
//     const popupPassword = document.querySelector('.popupPassword');
//     switch (error) {
//       case 'auth/email-already-in-use':
//         popupEmail.style.display = 'block';
//         popupEmail.innerHTML = 'Su correo ya se encuentra registrado';
//         // popupEmail.classList.toggle('show');
//         setTimeout(() => {
//           popupEmail.style.display = 'none';
//         }, 5000);
//         break;
//       case 'auth/invalid-email':
//         popupEmail.style.display = 'block';
//         popupEmail.innerHTML = 'Correo invalido';
//         // popupEmail.classList.toggle('show');
//         setTimeout(() => {
//           popupEmail.style.display = 'none';
//         }, 5000);
//         break;
//       case 'auth/weak-password':
//         popupPassword.style.display = 'block';
//         popupPassword.innerHTML = 'Contraseña invalida';
//         // popupPassword.classList.toggle('show');
//         setTimeout(() => {
//           popupPassword.style.display = 'none';
//         }, 3000);
//         break;
//       default:
//         break;
//     }
//   });
// }



// document.querySelector('.buttonVisibility').addEventListener('click', () => {
//   const changeType = document.getElementById('userPassword');
//   if (changeType.type === 'password') {
//     changeType.type = 'text';
//     document.getElementById('visibility').style.display = 'block';
//     document.getElementById('noVisibility').style.display = 'none';
//   } else {
//     changeType.type = 'password';
//     document.getElementById('visibility').style.display = 'none';
//     document.getElementById('noVisibility').style.display = 'block';
//   }
// });