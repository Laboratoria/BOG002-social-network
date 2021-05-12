
import {home, BotondeCrearCuentaconGoogle} from './Pages/Home.js';
import {FormularioDeRegistro,  Datos_de_registro} from './Pages/SingUp.js';
import {FormularioDeIngreso,DatosDeLogin} from './Pages/Login.js';
import {SoloUsuarios} from './firebaseAuth.js'
import { inicio } from './Pages/inicio.js';
import { perfil } from './Pages/perfil.js';
import { Error404} from './Pages/Error 404.js';

 
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
            content.innerHTML= 
            home();
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
        case '#/release':
            SoloUsuarios(inicio())

            break;
        case '#/profile':
            SoloUsuarios(perfil())
                
                break;
        default:
             content.innerHTML = Error404();
    }
} 


