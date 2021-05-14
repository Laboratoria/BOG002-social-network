import { configurationFireBase } from './firebase/config.js';
import { router } from './controls/router.js';

const init = () => {
  const db = configurationFireBase();
  //const db = firebase.firestore();
  const $containerGeneral = document.createElement('div');
  $containerGeneral.classList.add('bigContainer');
  document.querySelector('.body').appendChild($containerGeneral);
  
  function verificateUser(hash, door){
    document.querySelector('.bigContainer').innerHTML = '';
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        const name = user.displayName;
        if ((user) && ((hash == '') || (hash == 'register'))) {
          location.hash = '#home';
          door=false;
          router(hash, $containerGeneral, db, name);
        }
        else{
          if(door){
            router(hash, $containerGeneral, db, name);
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