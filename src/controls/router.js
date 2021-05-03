import { renderLogin, renderRegister, renderHome } from './renderViews.js';

export function router(hash) { 
  switch (hash) {
    case 'register':
      renderRegister();
      break;
    case 'profile':
      // renderProfile($containerGeneral);
      break;
    case 'home':
      renderHome();
      break;
    case '':
      renderLogin();
      break;
    default:
      break;
  }
}
