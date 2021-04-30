export const pantallaInicio = () => {
  const inicio = document.createElement('div');
  inicio.className = 'contenedorInicio';
  const contenidoinicio = `
      <img alt="logoInicio" class="logoPantallainicio" id="logoInicio" src = "Imagenes/LogoBeer.png"/>
          <p class="textoCervecero"> Para los verdaderos amantes de la cerveza </p>
          <button class="botonesInicio" id="btnIniciarSesion" type="submit"> Iniciar de sesión </button>
          <button class="botonesInicio" id="btnRegistrate" type="submit"> Regístrate </button>
        `;
  inicio.innerHTML = contenidoinicio;
  return inicio;
};
