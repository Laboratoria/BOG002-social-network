import {loginPage, login} from '../pages/login/login.js';
import {registroPage,signUp} from '../pages/signUp/signUp.js';
import timelinePage from '../pages/timeline/timeline.js';


let content = document.getElementById('root');

export const router = (route) => {    
    content.innerHTML = '';
    switch(route) {
        case '#/': 
            content.appendChild(loginPage());
            login();
            break;
        case '#/registration': 
            content.appendChild(registroPage());
            signUp();
            break;
        case '#/timeline': 
            content.appendChild(timelinePage());
            break;
        default:
            content.appendChild(loginPage());
            break;
    }
}

