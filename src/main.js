// Este es el punto de entrada de tu aplicacion

import { router } from './router/index.routes.js';
// import { registroUsuario } from './firebaseAuth.js';

router(window.location.hash);
window.addEventListener('hashchange', () => {
  router(window.location.hash);
});

console.log(firebase);
