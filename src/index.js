import { configurationFireBase } from './firebase/config.js';
import { router } from './controls/router.js';

const init = () => {
  configurationFireBase();
  let hash = window.location.hash.substring(1);
  router(hash);

  window.addEventListener('hashchange', () => {
    if(document.getElementById('idBigContainer')){
      document.querySelector('.body').removeChild(document.getElementById('idBigContainer'));
      hash = window.location.hash.substring(1);
      router(hash);
    }
    
  });
};

init();
