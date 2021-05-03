import { renderTimeline } from '../views/timelineView.js';
import { renderLogin, afterRenderLogin } from '../views/loginView.js';
import { renderSettings } from '../views/settingsView.js';
import { signUpGoogle, signUpFacebook, logInEmail, signUpEmail } from '../model/login.js'

let container = document.getElementById('root');

export const init = () => {
    const url = window.location.hash
    container.innerHTML = '';
    
    switch(url){
        case '#/login':
            container.appendChild(renderLogin());
            afterRenderLogin();
            /*logInEmail();
            signUpFacebook();
            signUpGoogle();
            signUpEmail();*/
            break;
        case '#/timeline':
            container.appendChild(renderTimeline());
            break;
        case '#/settings':
            container.appendChild(renderSettings());
            break;
        default: 
            container.appendChild(renderLogin());
            afterRenderLogin();
            /*logInEmail();
            signUpFacebook();
            signUpGoogle();
            signUpEmail();*/
            break;
    }
}