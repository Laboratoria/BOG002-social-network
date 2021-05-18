import { configurationFireBase } from './firebase/config.js';
import { router } from './controls/router.js';

const init = () => {
  configurationFireBase();
  const $containerGeneral = document.createElement('div');
  $containerGeneral.classList.add('bigContainer');
  document.querySelector('.body').appendChild($containerGeneral);
  
  function verificateUser(hash, door){
    document.querySelector('.bigContainer').innerHTML = '';
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        let permise=[];
        let imageLike=[];
        const name = user.displayName;
        if ((user) && ((hash == '') || (hash == 'register'))) {
          location.hash = '#home';
          door=false;
          router(hash, $containerGeneral, name, permise, imageLike);
        }
        else{
          if(door){
            router(hash, $containerGeneral, name, permise, imageLike);
          }
        }
      }
      else{
        if((hash == '') || (hash == 'register')){
          router(hash, $containerGeneral);
        }
        else{
          location.hash = '#';
          router(hash, $containerGeneral);
        }
      }
    });
  }

  document.querySelector('.bigContainer').innerHTML = '';
  let hash = window.location.hash.substring(1);
  let door = true;
  verificateUser(hash, door);

  window.addEventListener('hashchange', () => {
    hash = window.location.hash.substring(1);
    verificateUser(hash, door);
  });
};

init();