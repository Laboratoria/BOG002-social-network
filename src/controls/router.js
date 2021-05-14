import { renderLogin, renderRegister, renderHome, renderProfile, renderPost, renderError, renderEditPost} from './renderViews.js';

export function router(hash, $containerGeneral, db, name) {
  
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
        renderPost($containerGeneral, name);
        break;
    case 'profile':
      renderProfile($containerGeneral);
      break;
    case 'edit-post':
      renderEditPost();
    default:
      renderError($containerGeneral);
      break;
  }
}
