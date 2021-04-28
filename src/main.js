//
import { router } from './router/router.js';

window.addEventListener('load', () => {    
    router(window.location.hash)
})


window.addEventListener('hashchange', () => {  
    //console.log(window.location.hash)  
    router(window.location.hash)    
})




