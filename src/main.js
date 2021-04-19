// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

// - - -  - - -  - - -  - - - LISTENERS

document.getElementById("settPic").addEventListener('click', function(){
    let pad = `
        <h2>Selecciona una foto para tu perfil</h2>
        <div class="input-image">
          <img src="https://raw.githubusercontent.com/dsandovalm/BOG002-social-network/main/src/images/icons/icon-uploadImg.png" alt="">
          <p>Selecciona del ordenador</p>
        </div>
        <button class="button-upload">Subir</button> 
    `;
    document.getElementById("settPad").innerHTML = pad;
})

document.getElementById("settName").addEventListener('click', function(){
    let pad = `
        <h2>Escribe tu nombre</h2>
        <div>
        <p>Recuerda que si cambias tu nombre no lo podrás modificar en los proximos 60 dias</p>
        <p>
            <label for="name">Nuevo nombre </label>
            <input type="text" id="name">
        </p>
        <p>
            <label for="password">Escribe tu contraseña para validar </label>
            <input type="text" id="password">
        </p>
        </div>
        <button class="button-upload">Cambiar Nombre</button>
    `;
    document.getElementById("settPad").innerHTML = pad;
})

document.getElementById("settMail").addEventListener('click', function(){
    let pad = `
        <h2>Cambiar correo</h2>
        <div>
        <p>Si cambias tu correo asociado, tendrás que hacer el login con este y la información de recuperación de contraseña llegará al nuevo</p>
        <p>
            <label for="mail">Nuevo correo </label>
            <input type="text" id="mail">
        </p>
        <p>
            <label for="password">Escribe tu contraseña para validar </label>
            <input type="text" id="password">
        </p>
        </div>
        <button class="button-upload">Cambiar Correo</button>
    `;
    document.getElementById("settPad").innerHTML = pad;
})

document.getElementById("settPassword").addEventListener('click', function(){
    let pad = `
        <h2>Cambiar contraseña</h2>
        <div>
        <p>Por seguridad se recomienda cambiar la contraseña al menos dos veces al año</p>
        <p>
            <label for="password">Contraseña actual</label>
            <input type="text" id="password">
        </p>
        <p>
            <label for="newPassword">Nueva contraseña </label>
            <input type="text" id="newPassword">
        </p>
        <p>
            <label for="repeatPassword">Por favor repite la nueva contraseña</label>
            <input type="text" id="repeatPassword">
        </p>
        </div>
        <button class="button-upload">Cambiar Contraseña</button>
    `;
    document.getElementById("settPad").innerHTML = pad;
})
