import { loginPage, logIn } from '../pages/login/login.js';
import { registroPage, signUp, signUpGoogle } from '../pages/signUp/signUp.js';
import {
  timelinePage,
  signOutGoogle,
  postsTimeline,
  newCollectionPost,
} from '../pages/timeline/timeline.js';

const content = document.getElementById('root');

export const router = (route) => {
  content.innerHTML = '';
  switch (route) {
    case '#/registration':
      content.appendChild(registroPage());
      signUp();
      signUpGoogle();
      break;
    case '#/timeline':
      content.appendChild(timelinePage());
      signOutGoogle();
      postsTimeline();
      newCollectionPost();
      break;
    default:
      content.appendChild(loginPage());
      logIn();
      signUpGoogle();
      break;
  }
};
