
import {home } from './Pages/Home.js';
import {FormularioDeRegistro,  Datos_de_registro} from './Pages/SingUp.js';
import {FormularioDeIngreso} from './Pages/Login.js';

 
let content = document.getElementById('root');
 
export const router = (route) => {
    const container_modal = document.getElementById('container_modal')
    container_modal.classList.remove('show')
    content.innerHTML = "";
    switch(route) {
        case '':
            content.innerHTML= home();
            break;
        case '#/signUp':
            content.innerHTML = 
            FormularioDeRegistro();
            Datos_de_registro(); 
            
            break;
        // case '#/errorusuarioregistrado':
        //         content.innerHTML = 
        //         FormularioDeRegistro();
        //         Datos_de_registro(); 
                
        //         break;
        case '#/login':
             content.innerHTML = FormularioDeIngreso();
             break;
        default:
             console.log('404!!!')
    }
} 





