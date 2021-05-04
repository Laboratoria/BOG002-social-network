export const inicioSesion = () => {
  const contenedorIniciosesion = document.createElement('div');
  contenedorIniciosesion.className = 'contenedorIniciosesion';

  const contenidoEncabezadoinicio = `
  <h3 class='textoCervecero1'> Para los verdaderos amantes de la cerveza </h3> 
    <div class = "contenidoInputs">
        <img alt="logoIniciosesion" class="logoIniciosesion" id="logoIniciosesion"src = "Imagenes/LogoBeer.png"/>
        <div class ="mensajeCervecero">
        <h3 class='textoCervecero2'> Para los verdaderos amantes de la cerveza </h3>
        </div>
        <form id = "formularioInicioSesion">
        <input class = "inputSesion" id = "emailLogin" type ="email" placeholder = "Correo Eletrónico">
        <input class = "inputSesion" id= "passwordLogin" type ="password" placeholder ="Contraseña">
        <button class="iniciarSesion" id="btnIniciarsesion" type="submit"> Iniciar sesión </button>
        </form>
        <p class = "mensajeCuentainicio">¿No tienes cuenta?
        <a href = " "> Regístrate</a></p>
    </div>
    `;
  contenedorIniciosesion.innerHTML = contenidoEncabezadoinicio;

  return contenedorIniciosesion;
};
