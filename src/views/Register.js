// Este es el punto de entrada de tu aplicacion

// import { Information, assignName } from '../auth/newUser';

// // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// let arrayUser;

// function userRegistration(event) {
//   event.preventDefault();
//   const username = document.querySelector('.inputNameRegister').value;
//   const email = document.querySelector('.inputEmailRegister').value;
//   const password = document.querySelector('.inputPasswordRegister').value;

//   Information(email, password).then((user) => {
//     // console.log(user);
//     arrayUser = user;
//     const usuario = document.createElement('div');
//     usuario.innerHTML = arrayUser;
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

// document.querySelector('.formRegister').addEventListener('submit', userRegistration);

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
// });0
// document.querySelector('.formHome').addEventListener('submit', userRegistration);

// document.querySelector('.buttonVisibilityHome').addEventListener('click', () => {
//   const changeType = document.getElementById('userPassword');
//   if (changeType.type === 'password') {
//     changeType.type = 'text';
//     document.getElementById('visibilityHome').style.display = 'block';
//     document.getElementById('noVisibilityHome').style.display = 'none';
//   } else {
//     changeType.type = 'password';
//     document.getElementById('visibilityHome').style.display = 'none';
//     document.getElementById('noVisibilityHome').style.display = 'block';
//   }
// });

// function changePages() {
//   const inicioHome = document.getElementById('linkRegister');
//   inicioHome.onclick = () => {
//     document.querySelector('.divSignIn').style.display = 'none';
//     document.querySelector('.divFormRegister').style.display = 'block';
//     document.querySelector('.imgLogo').style.display = 'block';
//     document.querySelector('.imgTrama').style.display = 'block';
//   };
// }

// changePages();

export function renderFormRegister($newDiv){
  const container = `
  <h3 class="titleForm">Formulario Registro</h3>
  <form class="formRegister" id="formRegister"autocomplete="off">
  <img class="imgIcon" src="assets/imagesIcon/UserGray.png" />
  <input class="inputNameRegister" placeholder="Nombre Completo" type="text" id="userName" minlength="7" pattern="[A-Z a-z]{1,30}" required></input><br>
  <img class="imgIcon" src="assets/imagesIcon/atGray.png" />
  <input class="inputEmailRegister" placeholder="Correo electrónico" type="email" id="userEmail"
    required></input><br>
  <div class="popupEmail" style="display: none;"><p></p></div> 
  <img class="imgIcon" src="assets/imagesIcon/lockedGray.png" />
  <input class="inputPasswordRegister" placeholder="Contraseña" type="password" id="userPassword" minlength="7" required></input>
  <div class="popupPassword" style="display: none;"><p></p></div> 
  <button class="buttonVisibility" type="button">
    <img class="imgVisibility" id="noVisibility" src="assets/imagesIcon/NoVisibility.png" style="display:block;" />
    <img class="imgVisibility" id="visibility" src="assets/imagesIcon/ver.png" style="display:none;"/>
  </button><br>
  <br>
  <button class="buttonEnvioRegistro" type="submit">Registrarme</button>
  </form>`
  $newDiv.innerHTML += container;
}


