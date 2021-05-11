import { renderLogin, renderRegister, renderHome, renderProfile, renderPost, renderError} from './renderViews.js';

export function router(hash, $containerGeneral, db) {
  
  switch (hash) {
    case '':
      renderLogin($containerGeneral);
      break;
    case 'register':
      renderRegister($containerGeneral);
      break;
    case 'home':
      renderHome($containerGeneral, db);
      break;
    case 'post':
        renderPost($containerGeneral);
        break;
    case 'profile':
      renderProfile($containerGeneral);
      break;
    default:
      renderError($containerGeneral);
      break;
  }
}
