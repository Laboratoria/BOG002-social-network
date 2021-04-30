const settingsPad = {
    picture: `
        <h2>Selecciona una foto para tu perfil</h2>
        <div class="input-image">
            <img src="https://raw.githubusercontent.com/dsandovalm/BOG002-social-network/main/src/images/icons/icon-uploadImg.png" alt="">
            <p>Selecciona del ordenador</p>
        </div>
        <button class="btn-upload">Subir</button> 
    `,
    name: `
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
        <button class="btn-upload">Cambiar Nombre</button>
    `,
    email: `
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
        <button class="btn-upload">Cambiar Correo</button>
    `,
    password: `
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
        <button class="btn-upload">Cambiar Contraseña</button>
    `
}

export const changeSettings = {
    picture: function(){
        document.getElementById("settPad").innerHTML = settingsPad.picture;
    },
    name: function(){
        document.getElementById("settPad").innerHTML = settingsPad.name;
    },
    email: function(){
        document.getElementById("settPad").innerHTML = settingsPad.email;
    },
    password: function(){
        document.getElementById("settPad").innerHTML = settingsPad.password;
    } 
}
