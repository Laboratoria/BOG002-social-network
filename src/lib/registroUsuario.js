export const registroUsuario = () => {
  const contenedorRegistro = document.createElement('div');
  contenedorRegistro.id = 'contenedorRegistro';
  contenedorRegistro.className = 'classcontenedorRegistro';

  const encabezado = document.createElement('div');
  encabezado.className = 'encabezado';
  const contenidoEncabezado = `
        <img alt="logoRegistro" class="logoRegistro" src = "Imagenes/LogoBeer.png"/>
        <h3> Conviértete en un Beer Lover's </h3>
        <div class= "contenedorGmail" id="contenedorclickGmail">
            <h4> Regístrate con Gmail</h4>
            <img alt="gmail" class="gmail" src="Imagenes/Gmail-Logo.png"/>
        </div>
        <p> ---------- o ---------- </p>
    `;

  const formRegistroUsuario = document.createElement('div');
  const contenidoForm = `
        <div class = "contenidoForm">
        <form id = "formularioRegistroUsuario">
        <input class = "inputForm" id = "emailRegistro" type ="email" placeholder = "Correo Eletrónico">
        <input class = "inputForm" id = "nombreYApellido" type="name" placeholder="Nombre y Apellido">
        <input class = "inputForm" id = "nombreDeUsuario" type ="nickname" placeholder = "Nombre de Usuario">
        <input class = "inputForm" id = "passwordRegistro" type ="password" placeholder ="Contraseña">
        <p class="registro">¿Ya tienes cuenta?<a href = " "> Iniciar sesión</a></p>
        <p> Para formar parte de la comunidad Beer Lovers debes aceptar que  eres mayor de edad.</p>
        <input class = "checkbox" type ="checkbox"><label for=""> Soy mayor de edad </label>
        <button class="registrarme" type="submit"> Registrarme </button>
        </form>
        </div>
    `;

  encabezado.innerHTML = contenidoEncabezado;
  formRegistroUsuario.innerHTML = contenidoForm;
  contenedorRegistro.appendChild(encabezado);
  contenedorRegistro.appendChild(formRegistroUsuario);

  return contenedorRegistro;
};
