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
import {FormularioDeRegistro} from './Pages/SingUp.js';
import {FormularioDeIngreso} from './Pages/Login.js';
 
let content = document.getElementById('root');
 
export const router = (route) => {
    content.innerHTML = "";
    switch(route) {
        case '#/':
            return content.innerHTML= home;
        case '#/signUp':
            return content.innerHTML = FormularioDeRegistro;
        case '#/login':
                return content.innerHTML = FormularioDeIngreso;
        default:
            return console.log('404!!!')
    }
} 





