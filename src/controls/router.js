import { renderLogin, renderRegister, renderHome } from './renderViews.js';

export function router(hash, $containerGeneral, db) {
  // console.log(db);
  switch (hash) {
    case 'register':
      renderRegister($containerGeneral);
      break;
    case 'profile':
      // renderProfile($containerGeneral);
      break;
    case 'home':
      renderHome($containerGeneral, db);
      break;
    case '':
      renderLogin($containerGeneral);
      break;
    default:
      break;
  }
}
