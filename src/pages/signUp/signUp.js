import { register, registerGoogle } from '../../index.js';

// Template screen registrarse
export function registroPage() {
  const view = `
    <section id="screenRegistration">
        <header>
            <button class="buttonClose" id="btnCloseRegistration" onclick= "window.location='#/'" >X</button>
            <img src="assets/WikiMoms.png" id="imgWikiMoms">
            <h2>Regístrate para hacer parte de nuestra comunidad de Mamás</h2>
        </header>

        <main>
            <div class="containerLogInGoogle">
                <button id="btnGoogle" type="submit"><img id="logoGoogle" src="assets/logoGoogle.png">Registrarte con
                Google</button>
                <img id="lineas" src="assets/imgLineas.png">
            </div>
            <div class="containerRegistration">
                <form id="signUp">
                <input type="email" id="signUpEmail" placeholder="Correo electronico" class="input" required>
                <P class="errorMessage" id="errorEmail"></p>
                <input type="password" id="signUpPassword" placeholder="Contraseña" class="input" required>
                <P class="errorMessage" id="errorPassword"></p>
                <button  type="button" class="button" id="Register">Registrarte</button>
                </form>
            </div>
        </main>
     </section>   
    `;
  const divElement = document.createElement('div');
  divElement.innerHTML = view;

  return divElement;
}

// Función registrarse
export function signUp() {
  const button = document.getElementById('Register');
  const signUpForm = document.getElementById('signUp');

  button.addEventListener('click', () => {
    const email = document.getElementById('signUpEmail').value;
    const pass = document.getElementById('signUpPassword').value;
    const errorEmail = document.getElementById('errorEmail');
    const errorPassword = document.getElementById('errorPassword');

    document.querySelectorAll('.errorMessage').forEach((errorMessage) => {
      const e = errorMessage;
      setTimeout(() => { e.innerHTML = ''; }, 3000);
      return true;
    });

    if (email.length === 0) {
      errorEmail.innerHTML = 'Ingrese un correo válido';
      return false;
    }
    if (pass.length === 0) {
      errorPassword.innerHTML = 'Ingrese la contraseña';
      return false;
    }

    register(email, pass)
      .then(() => {
        signUpForm.reset();
        window.location = '#/timeline';
      })
      .catch((e) => {
        if (e.code === 'auth/email-already-in-use') {
          errorEmail.innerHTML = 'El correo electronico ingresado ya esta registrado';
          return false;
        }
        if (e.code === 'auth/invalid-email') {
          errorEmail.innerHTML = 'Ingrese un correo con el formato usuario@xyz.com';
          return false;
        }
        errorPassword.innerHTML = e.message;
        return true;
      });
    return true;
  });
  return true;
}

// Función registrarse con Google
export function signUpGoogle() {
  const buttonGoogle = document.getElementById('btnGoogle');
  buttonGoogle.addEventListener('click', () => {
    const errorPassword = document.getElementById('errorPassword');
    const googleAccount = new firebase.auth.GoogleAuthProvider();
    registerGoogle(googleAccount)
      .then(() => {
        window.location = '#/timeline';
      })
      .catch((err) => {
        errorPassword.innerHTML = err.message;
        return true;
      });
    return true;
  });
}
