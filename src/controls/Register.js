import { createUser } from '../firebase/logInUser.js';

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
      usuario.className = 'divGhost';
      assignName(username);
    })
    .catch((error) => {
      const popupEmail = document.getElementById('popupEmail');
      if (error.code === 'auth/email-already-in-use') {
        popupEmail.style.display = 'block';
        popupEmail.innerHTML = 'Su correo ya se encuentra registrado';
        setTimeout(() => {
          popupEmail.style.display = 'none';
        }, 4000);
      }
    });
}

/*export function createUserSuccessful() {
      // const confirmationRegistro = document.getElementById('formRegister');
      // const title = document.querySelector('.titleForm');
      // confirmationRegistro.style.display = 'none';
      // title.style.display = 'none';
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
      console.log("despues de asignar nombre usuario")
      document.querySelector('.buttonInicioSesion').addEventListener('click', () => {
        console.log("entra boton iniciar sesion");
         // window.location.hash = '#home';
        });
        return (false);
} */
