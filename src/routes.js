
import {home, BotondeCrearCuentaconGoogle} from './Pages/Home.js';
import {FormularioDeRegistro,  Datos_de_registro} from './Pages/SingUp.js';
import {FormularioDeIngreso,DatosDeLogin} from './Pages/Login.js';
import {SoloUsuarios} from './Firebase/firebaseAuth.js';
import { inicio, CerrarSesion, ParaPublicar} from './Pages/inicio.js';
import { perfil, name  } from './Pages/perfil.js';
import { FormularioPerfilDeUsuario, EditarPerfil } from './Pages/DatosUsuario.js';
import { Error404} from './Pages/Error 404.js';
import { search } from './Pages/search.js';
import { eliminar, MostrarPublicaciones } from './Firebase/firestore.js';


 
let content = document.getElementById('root');
 
export const router = (route) => {
    // para el registro
    const container_modal = document.getElementById('container_modal')
    container_modal.classList.remove('show');
    // para el login
    const login_modal = document.getElementById('login_modal');
    login_modal.classList.remove('show');
    
    content.innerHTML = "";
    let user = SoloUsuarios();


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
          
            if (user) {
                 content.innerHTML =  inicio();
                    ParaPublicar();
                    CerrarSesion();
                    eliminar();
                    MostrarPublicaciones();
                   
                    
            }else {
              window.location.hash ='#/login'
            }
           
            break;
        case '#/profile':
           
            if (user) {
                 content.innerHTML =  perfil();name ();
                                      CerrarSesion();
                                      MostrarPublicaciones();
     
            }else {
              window.location.hash ='#/login'
            }
                
                break;
        case '#/search':
           
            if (user) {
                content.innerHTML =  search();
                                     CerrarSesion();
            }else {
                window.location.hash ='#/login'
                    }
                        
             break;
             case '#/editarPerfil':
           
            if (user) {
                content.innerHTML = FormularioPerfilDeUsuario();
                                    EditarPerfil();
                                
            }else {
                window.location.hash ='#/login'
                    }
                        
             break;
        default:
             content.innerHTML = Error404();
    }
} 


