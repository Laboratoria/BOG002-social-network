
import {home, BotondeCrearCuentaconGoogle} from './Pages/Home.js';
import {FormularioDeRegistro,  Datos_de_registro} from './Pages/SingUp.js';
import {FormularioDeIngreso,DatosDeLogin} from './Pages/Login.js';

 
let content = document.getElementById('root');
 
export const router = (route) => {
    // para el registro
    const container_modal = document.getElementById('container_modal')
    container_modal.classList.remove('show');
    // para el login
    const login_modal = document.getElementById('login_modal');
    login_modal.classList.remove('show');
    content.innerHTML = "";
    switch(route) {
        case '':
            content.innerHTML= home();
            BotondeCrearCuentaconGoogle();
            break;
        case '#/signUp':
            content.innerHTML = 
            FormularioDeRegistro();
            Datos_de_registro(); 
            
            break;
            case '#/login':
             content.innerHTML = 
             FormularioDeIngreso();
             DatosDeLogin();
             break;
        default:
             console.log('404!!!')
    }
} 





