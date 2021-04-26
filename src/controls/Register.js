import { Information } from '../auth/newUser.js';

export function userRegistration(event) {
  event.preventDefault();
  const username = document.querySelector('.inputName').value;
  const email = document.querySelector('.inputEmail').value;
  const password = document.querySelector('.inputPassword').value;
  Information(email, password, username)
    .then((user) => {
      // console.log(user.displayName);
      const usuario = document.createElement('div');
      usuario.innerHTML = user;
      usuario.className = 'divGhost';
      // assignName(username);
      const cardContainer = document.querySelector('.cardContainer');
      const confirmationRegistro = document.getElementById('formRegister');
      const title = document.querySelector('.titleForm');
      confirmationRegistro.style.display = 'none';
      title.style.display = 'none';
      const messageExito = document.createElement('div');
      messageExito.textContent = 'Tu registro se ha realizado con exito!!!!';
      messageExito.className = 'messageExitoso';
      cardContainer.appendChild(messageExito);
      const SignupRegister = document.createElement('button');
      SignupRegister.type = 'button';
      SignupRegister.innerText = 'Iniciar sesion';
      SignupRegister.className = 'buttonInicioSesion';
      messageExito.appendChild(SignupRegister);
      SignupRegister.addEventListener('click', window.location.hash = '#home');
    })
    .catch((error) => {
      // console.log(error);
      const popupEmail = document.getElementById('popupEmail');
      if (error === 'auth/email-already-in-use') {
        popupEmail.style.display = 'block';
        popupEmail.innerHTML = 'Su correo ya se encuentra registrado';
        // popupEmail.classList.toggle('show');
        setTimeout(() => {
          popupEmail.style.display = 'none';
        }, 4000);
      }
    });
}
