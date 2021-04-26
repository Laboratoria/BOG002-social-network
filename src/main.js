/* eslint-disable import/named */
// Este es el punto de entrada de tu aplicacion
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

//import app from 'firebase/app.js'
//var firebase = require("firebase/app");

/*var firebaseConfig = {
  /*apiKey: "AIzaSyB99_iQDmFqUJQJAOIUzadESWEIYjmUw4U",
  authDomain: "social-network-59c00.firebaseapp.com"*/


// Initialize Firebase
/*firebase.initializeApp(firebaseConfig);*/

import { router} from './lib/enrutador.js';
//import { formularioRegistro} from './lib/vistas.js';

//import { registro} from './lib/registrar.js'
//registro()

const init = () => {
    //pintar la vista en la que estoy
    window.addEventListener('hashchange', () => {
      var componente=document.getElementById("opcionesInicio");
        router(window.location.hash,componente);
      });
}
init();
/*const admin=require('firebase-admin');
var serviceAccount =require("social-network-59c00-firebase-admin./sdk-vxshl-af2244d001.json")
admin.initializeApp({
  Credential:admin.Credential.cert(serviceAccount),
  databaseURL:"https://social-network-59c00-default-rtdb.firebaseio.com/"
});
const db= admin.database();

//formularioRegistro();*/

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs








