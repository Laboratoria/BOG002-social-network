import { renderLogin, renderRegister, renderProfile } from './renderViews.js'

export function router(hash){

    const $containerGeneral = document.createElement("div"); 
    $containerGeneral.classList.add('register-login-container');
    document.querySelector('.body').appendChild($containerGeneral);

    switch(hash){
      case 'register':
        document.querySelector(".register-login-container").innerHTML = "";
        renderRegister($containerGeneral);
        console.log(hash);
        break;
      case 'profile':
        document.querySelector(".register-login-container").innerHTML = "";
        renderProfile($containerGeneral);
        break;
      /* case 'post':
        renderPost($containerGeneral);
        break;*/
      case '':
        document.querySelector(".register-login-container").innerHTML = "";
        renderLogin($containerGeneral);
        break;
      default:
        break;  
    }
}