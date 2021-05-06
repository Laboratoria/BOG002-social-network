import { LogIn, LogInGoogleAuth, LogOutAuth } from '../auth/logInUser.js';

export function userLogIn(event) {
  event.preventDefault();
  const email = document.querySelector('.inputEmail').value;
  const password = document.querySelector('.inputPassword').value;
  LogIn(email, password)
    .then(() => {
      window.location.hash = '#home';
    }).catch((error) => {
      // console.log(error);
      const popupEmail = document.getElementById('popupEmail');
      const popupPassword = document.getElementById('popupPassword');
      switch (error.code) {
        case 'auth/user-not-found':
          popupEmail.style.display = 'block';
          popupEmail.innerHTML = 'Su correo no se encuentra registrado';
          // popupEmail.classList.toggle('show');
          setTimeout(() => {
            popupEmail.style.display = 'none';
          }, 4000);
          break;
        case 'auth/wrong-password':
          popupPassword.style.display = 'block';
          popupPassword.innerHTML = 'Contraseña incorrecta';
          // popupEmail.classList.toggle('show');
          setTimeout(() => {
            popupPassword.style.display = 'none';
          }, 4000);
          break;
        case 'auth/too-many-requests':
          popupPassword.style.display = 'block';
          popupPassword.innerHTML = 'Excedió el límite de intentos';
          // popupEmail.classList.toggle('show');
          setTimeout(() => {
            popupPassword.style.display = 'none';
          }, 4000);
          break;
        default:
          break;
      }
    });
}

export function LogInGoogle(){
  LogInGoogleAuth()
    .then(() => {
      window.location.hash = '#home';
    })
}

export function LogOut(){
  LogOutAuth()
    .then(() => {
      window.location.hash = '';
    })
}