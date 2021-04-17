const firebaseConfig = {
  apiKey: 'AIzaSyCNJzDnQucoug5jUE-5pEodaacilcQTyAw',
  authDomain: 'nomadas-3c02d.firebaseapp.com',
  databaseURL: 'https://nomadas-3c02d.firebaseio.com',
  projectId: 'nomadas-3c02d',
  storageBucket: 'nomadas-3c02d.appspot.com',
  messagingSenderId: '189718883297',
  appId: '1:189718883297:web:c200b22cbcb8c28c4a80a0',
};

firebase.initializeApp(firebaseConfig);

export const Information = (username, email, password) => {
  function messageError(errorCode) {
    const popupEmail = document.querySelector('.popupEmail');
    const popupPassword = document.querySelector('.popupPassword');
    switch (errorCode) {
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
  }

  firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    const divFormRegister = document.getElementById('divFormRegister');
    const confirmationRegistro = document.getElementById('formRegister');
    confirmationRegistro.style.display = 'none';
    const messageExito = document.createElement('div');
    messageExito.textContent = 'Tu registro se ha realizado con exito!!!!';
    messageExito.className = 'messageExitoso';
    divFormRegister.appendChild(messageExito);
    const SignupRegister = document.createElement('button');
    SignupRegister.type = 'button';
    SignupRegister.innerText = 'Inicia sesion';
    SignupRegister.className = 'buttonInicioSesion';
    messageExito.appendChild(SignupRegister);
  })
    .catch((error) => {
      const errorCode = error.code;
      messageError(errorCode);
    });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // Updates the user attributes:
      user.updateProfile({
        // <-- Update Method here
        displayName: username,
        // photoURL: 'https://example.com/jane-q-user/profile.jpg'
      })
        .then(
          () => {
            // Profile updated successfully!
            const displayName = user.displayName;
            // var photoURL = user.photoURL;
          },
          (error) => {
            const errorCode = error.code;
            messageError(errorCode);
          },
        );
    }
  });
};
