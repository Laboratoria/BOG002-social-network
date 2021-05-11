import { renderLogin, renderRegister, renderHome, renderProfile, renderPost, renderError} from './renderViews.js';

export function router(hash, $containerGeneral, db, nameUser) {
  
  switch (hash) {
    case '':
      renderLogin($containerGeneral);
      break;
    case 'register':
      renderRegister($containerGeneral);
      break;
    case 'home':
      renderHome($containerGeneral, db, nameUser);
      break;
    case 'post':
        renderPost($containerGeneral, nameUser);
        break;
    case 'profile':
      renderProfile($containerGeneral, nameUser);
      break;
    default:
      renderError($containerGeneral);
      break;
  }
}
