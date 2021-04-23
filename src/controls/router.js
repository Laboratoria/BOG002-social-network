import { renderLogin, renderRegister, renderHome } from './renderViews.js';

export function router(hash) {
  const $containerGeneral = document.createElement('div');
  $containerGeneral.classList.add('root-container');
  document.querySelector('.body').appendChild($containerGeneral);
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
