// Este es el punto de entrada de tu aplicacion

import { Information } from './lib/index.js';

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field

function userRegistration(event) {
  event.preventDefault();
  const username = document.querySelector('.inputNameRegister').value;
  const email = document.querySelector('.inputEmailRegister').value;
  const password = document.querySelector('.inputPasswordRegister').value;
  Information(username, email, password);
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
