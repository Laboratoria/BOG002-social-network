import { router } from './router/router.js';

window.addEventListener('load', () => {
  router(window.location.hash);
});

window.addEventListener('hashchange', () => {
  router(window.location.hash);
});
