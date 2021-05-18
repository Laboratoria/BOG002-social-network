import { renderLogin, renderRegister, renderHome, renderProfile, renderPost, renderError} from './renderViews.js';

export function router(hash, $containerGeneral, name, permise, imageLike) {
  
  switch (hash) {
    case '':
      renderLogin($containerGeneral);
      break;
    case 'register':
      renderRegister($containerGeneral);
      break;
    case 'home':
      renderHome($containerGeneral, permise, imageLike);
      break;
    case 'post':
        renderPost($containerGeneral, name);
        break;
    case 'profile':
      renderProfile($containerGeneral);
      break;
    default:
      renderError($containerGeneral);
      break;
  }
}
