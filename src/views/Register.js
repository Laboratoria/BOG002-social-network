// Este es el punto de entrada de tu aplicacion

import { Information, assignName } from '../auth/newUser';

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
let arrayUser;

function userRegistration(event) {
  event.preventDefault();
  const username = document.querySelector('.inputNameRegister').value;
  const email = document.querySelector('.inputEmailRegister').value;
  const password = document.querySelector('.inputPasswordRegister').value;

  Information(email, password).then((user) => {
    // console.log(user);
    arrayUser = user;
    const usuario = document.createElement('div');
    usuario.innerHTML = arrayUser;
    usuario.className = 'divGhost';
    assignName(username);
    const divFormRegister = document.getElementById('divFormRegister');
    const confirmationRegistro = document.getElementById('formRegister');
    confirmationRegistro.style.display = 'none';
    const messageExito = document.createElement('div');
    messageExito.textContent = 'Tu registro se ha realizado con exito!!!!';
    messageExito.className = 'messageExitoso';
    divFormRegister.appendChild(messageExito);
    const SignupRegister = document.createElement('button');
    SignupRegister.type = 'button';
    SignupRegister.innerText = 'Iniciar sesion';
    SignupRegister.className = 'buttonInicioSesion';
    messageExito.appendChild(SignupRegister);
  }).catch((error) => {
    // console.log(error);
    const popupEmail = document.querySelector('.popupEmail');
    const popupPassword = document.querySelector('.popupPassword');
    switch (error) {
      case 'auth/email-already-in-use':
        popupEmail.style.display = 'block';
        popupEmail.innerHTML = 'Su correo ya se encuentra registrado';
        // popupEmail.classList.toggle('show');
        setTimeout(() => {
          popupEmail.style.display = 'none';
        }, 5000);
        break;
      case 'auth/invalid-email':
        popupEmail.style.display = 'block';
        popupEmail.innerHTML = 'Correo invalido';
        // popupEmail.classList.toggle('show');
        setTimeout(() => {
          popupEmail.style.display = 'none';
        }, 5000);
        break;
      case 'auth/weak-password':
        popupPassword.style.display = 'block';
        popupPassword.innerHTML = 'Contraseña invalida';
        // popupPassword.classList.toggle('show');
        setTimeout(() => {
          popupPassword.style.display = 'none';
        }, 3000);
        break;
      default:
        break;
    }
  });
}

document.querySelector('.formRegister').addEventListener('submit', userRegistration);

document.querySelector('.buttonVisibility').addEventListener('click', () => {
  const changeType = document.getElementById('userPassword');
  if (changeType.type === 'password') {
    changeType.type = 'text';
    document.getElementById('visibility').style.display = 'block';
    document.getElementById('noVisibility').style.display = 'none';
  } else {
    changeType.type = 'password';
    document.getElementById('visibility').style.display = 'none';
    document.getElementById('noVisibility').style.display = 'block';
  }
});
document.querySelector('.formHome').addEventListener('submit', userRegistration);

document.querySelector('.buttonVisibilityHome').addEventListener('click', () => {
  const changeType = document.getElementById('userPassword');
  if (changeType.type === 'password') {
    changeType.type = 'text';
    document.getElementById('visibilityHome').style.display = 'block';
    document.getElementById('noVisibilityHome').style.display = 'none';
  } else {
    changeType.type = 'password';
    document.getElementById('visibilityHome').style.display = 'none';
    document.getElementById('noVisibilityHome').style.display = 'block';
  }
});

function changePages() {
  const inicioHome = document.getElementById('linkRegister');
  inicioHome.onclick = () => {
    document.querySelector('.divSignIn').style.display = 'none';
    document.querySelector('.divFormRegister').style.display = 'block';
    document.querySelector('.imgLogo').style.display = 'block';
    document.querySelector('.imgTrama').style.display = 'block';
  };
}

changePages();
