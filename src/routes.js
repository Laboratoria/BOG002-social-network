
import {home } from './Pages/Home.js';
import {FormularioDeRegistro,  Datos_de_registro} from './Pages/SingUp.js';
import {FormularioDeIngreso} from './Pages/Login.js';
import {autenticacionUsuario} from  './firebaseAuth.js';
 
let content = document.getElementById('root');
 
export const router = (route) => {
    content.innerHTML = "";
    switch(route) {
        case '#/':
            content.innerHTML= home();
            break;
        case '#/signUp':
            content.innerHTML = 
            FormularioDeRegistro();
            Datos_de_registro(); 
            // auteticacioUsuario ();
            break;
        case '#/login':
             content.innerHTML = FormularioDeIngreso();
             break;
        default:
             console.log('404!!!')
    }
} 





