/* eslint-disable quotes */
/* eslint-disable space-before-blocks */
export default function CrearRegistro() {
  const registroUsuario = document.createElement("form");
  registroUsuario.setAttribute("class", "formInformacion");

  const htmlRegitro = `
        <div><input type="text" class="inputIngreso" id="nombreUsuario" placeholder="Ingresar nombre" required/></div>
        <div><input type="email" class="inputIngreso" id="usuarioEmail" placeholder="Ingresar correo" required/></div>
        <div><input type="password" class="inputIngreso" id="usuarioContrasena" placeholder="Crear contraseña" required minlength="6"/></div>
        <div><input type="password" class="inputIngreso" id="confirmarContrasena" placeholder="Repetir contraseña" required minlength="6"/></div>
        <div><button id="btnR"> Registrarme </button></div>
         `;
  registroUsuario.innerHTML = htmlRegitro;
  const mensajeError = document.createElement("div");
  mensajeError.setAttribute("id", "errorRegistro");
  registroUsuario.insertBefore(mensajeError, registroUsuario.childNodes[0]);

  if (document.getElementById("main").hasChildNodes()) {
    document
      .getElementById("main")
      .removeChild(document.getElementById("main").childNodes[0]);
    document.getElementById("main").appendChild(registroUsuario);
  }
}
