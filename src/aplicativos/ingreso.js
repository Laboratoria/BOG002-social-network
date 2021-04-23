import { nuevoIngreso } from '../firebaseController/firebaseFunctions.js';
import irReglas from './redireccionReglas.js';

export default function ingresar() {
  window.location = '#login';
  const email = document.getElementById('usuario');
  const contrasena = document.getElementById('contrasena');
  // ingreso con correo y contraseña
  document.addEventListener('click', (e) => {
    if (e.target.matches('#btnI')) {
      e.preventDefault();
      nuevoIngreso(email.value, contrasena.value)
        .then(() => {
          irReglas();
        })
        .catch((error) => {
          const errorMessage = error.message;
          document.getElementById('mesagge').innerHTML = `Se ha producido un error: ${errorMessage}`;
        });
    }
  });
}
