import {loginPage, logIn} from '../pages/login/login.js';
import {registroPage,signUp,signUpGoogle} from '../pages/signUp/signUp.js';
import {timelinePage,signOutGoogle,postsTimeline,collectionPost} from '../pages/timeline/timeline.js';


let content = document.getElementById('root');

export const router = (route) => {    
    content.innerHTML = '';
    switch(route) {
        case '#/registration': 
            content.appendChild(registroPage());
            signUp();
            signUpGoogle();
            break;
        case '#/timeline': 
            content.appendChild(timelinePage());
            signOutGoogle();
            postsTimeline();
            collectionPost();
            break;
        default:
            content.appendChild(loginPage());
            logIn();
            signUpGoogle();
            break;
    }
}

