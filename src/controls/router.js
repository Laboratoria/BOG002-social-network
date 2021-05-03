import { renderLogin, renderRegister, renderHome } from './renderViews.js';

export function router(hash, $containerGeneral) { 
  switch (hash) {
    case 'register':
      renderRegister($containerGeneral);
      break;
    case 'profile':
      // renderProfile($containerGeneral);
      break;
    case 'home':
      renderHome($containerGeneral);
      break;
    case '':
      renderLogin($containerGeneral);
      break;
    default:
      break;
  }
}
