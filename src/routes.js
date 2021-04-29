// Creando rutas como objetos, funciones en router.js
// opcion 1 
const Rutas = {
    EntrarConGoogle: {
        ruta: "/withGoogle",
        template:`<h1>Ingreso con google</h1>`,
    },
    Registro: {
        ruta: "/register",
        template:`<h1>Registro</h1>`,
    },  
     Ingreso: {
        ruta: "/login",
        template:`<h1>Ingreso</h1>`,
    },
}








// Creando rutas como arrays, funciones ejecutables en router.js 
// opcion 2 

// const Rutas = [ 
//     {
//         ruta: "/withGoogle",
//         template:`<h1>Ingreso con google</h1>`,
//     },
//      {
//         ruta: "/register",
//         template:`<h1>Registro</h1>`,
//     },  
//      {
//         ruta: "/login",
//         template:`<h1>Ingreso</h1>`,
//     },
//     ]