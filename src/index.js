import { configurationFireBase } from './firebase/config.js';
import { router } from './controls/router.js';

const init = () => {
  const db = configurationFireBase();
  const $containerGeneral = document.createElement('div');
  $containerGeneral.classList.add('bigContainer');
  document.querySelector('.body').appendChild($containerGeneral);
  document.querySelector('.bigContainer').innerHTML = '';
  let hash = window.location.hash.substring(1);
  router(hash, $containerGeneral, db);

  window.addEventListener('hashchange', () => {
    document.querySelector('.bigContainer').innerHTML = '';
    hash = window.location.hash.substring(1);
    router(hash, $containerGeneral, db);
  });
};

init();

// if(document.getElementById('idBigContainer')){
//   document.querySelector('.body').removeChild(document.getElementById('idBigContainer'));
//   hash = window.location.hash.substring(1);
//   router(hash);
// }
