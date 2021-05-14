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
