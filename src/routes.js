// Creando rutas como objetos, funciones en router.js
// // opcion 1 
// const Rutas = {
//     EntrarConGoogle: {
//         ruta: "/withGoogle",
//         template:`<h1>Ingreso con google</h1>`,
//     },
//     Registro: {
//         ruta: "/register",
//         template:`<h1>Registro</h1>`,
//     },  
//      Ingreso: {
//         ruta: "/login",
//         template:`<h1>Ingreso</h1>`,
//     },
// }


import {home } from './Pages/Home.js';
import {FormularioDeRegistro, ObtenerDatosDelRegistro} from './Pages/SingUp.js';
import {FormularioDeIngreso} from './Pages/Login.js';
 
let content = document.getElementById('root');
 
export const router = (route) => {
    content.innerHTML = "";
    switch(route) {
        case '#/':
            content.innerHTML= home();
            break;
        case '#/signUp':
            content.innerHTML = FormularioDeRegistro();
            ObtenerDatosDelRegistro();
            break;
        case '#/login':
             content.innerHTML = FormularioDeIngreso();
             break;
        default:
             console.log('404!!!')
    }
} 





