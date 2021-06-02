// import { loginEvent } from '../views/login.js';
// import Home from '../views/home.js';
import { vistaRegistro, registroEvento } from '../views/home.js';
import { vistaLogin, loginEvento } from '../views/login.js';

const content = document.getElementById('root');

const router = (route) => {
  content.innerHTML = '';
  switch (route) {
    case '#/Home':
      content.appendChild(vistaRegistro());
      registroEvento();
      break;
    case '#/login':
      content.appendChild(vistaLogin());
      loginEvento();
      break;
    default:
      console.log('Error 404');
  }
};

export { router };
