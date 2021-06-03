// import { loginEvent } from '../views/login.js';
// import Home from '../views/home.js';
import { vistaRegistro, registroEvento } from '../views/home.js';
import { vistaLogin, loginEvento } from '../views/login.js';
import { logoutEvento } from '../views/logout.js';

const content = document.getElementById('root');

const router = (route) => {
<<<<<<< HEAD
  content.innerHTML = '';
  switch (route) {
    case '':
      content.appendChild(vistaRegistro());
      registroEvento();
      break;
    case '#/Home':
      content.appendChild(vistaRegistro());
      registroEvento();
      break;
    case '#/login':
      content.appendChild(vistaLogin());
      loginEvento();
      break;
    case '#/logout':
      logoutEvento();
      break;
    default:
      console.log('Error 404');
  }
=======
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
>>>>>>> 46dfb05b8ba79e65ce44f5a570f454b7761f618e
};

export { router };