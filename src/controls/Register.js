import { createUser } from '../auth/logInUser.js';

const assignName = (username) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user.updateProfile({
        displayName: username,
      });
    }
  });
};

export function userRegistration(event) {
  event.preventDefault();
  const username = document.querySelector('.inputName').value;
  const email = document.querySelector('.inputEmail').value;
  const password = document.querySelector('.inputPassword').value;
  createUser(email, password)
    .then((result) => {
      const user = result.user;
      const usuario = document.createElement('div');
      usuario.innerHTML = user;
      assignName(username);
      usuario.className = 'divGhost';
      const confirmationRegistro = document.getElementById('formRegister');
      const title = document.querySelector('.titleForm');
      confirmationRegistro.style.display = 'none';
      title.style.display = 'none';
      document.querySelector('.cardContainer').innerHTML = '';
      const messageExito = document.createElement('div');
      messageExito.textContent = 'Tu registro se ha realizado con exito!!!!';
      messageExito.className = 'messageExitoso';
      document.querySelector('.cardContainer').appendChild(messageExito);
      const SignupRegister = document.createElement('button');
      SignupRegister.type = 'button';
      SignupRegister.innerText = 'Iniciar sesion';
      SignupRegister.className = 'buttonInicioSesion';
      messageExito.appendChild(SignupRegister);
      document
        .querySelector('.buttonInicioSesion')
        .addEventListener('click', () => {
          window.location.hash = '#home';
        });
    })
    .catch((error) => {
      // console.log(error);
      const popupEmail = document.getElementById('popupEmail');
      if (error.code === 'auth/email-already-in-use') {
        popupEmail.style.display = 'block';
        popupEmail.innerHTML = 'Su correo ya se encuentra registrado';
        // popupEmail.classList.toggle('show');
        setTimeout(() => {
          popupEmail.style.display = 'none';
        }, 4000);
      }
    });
}
