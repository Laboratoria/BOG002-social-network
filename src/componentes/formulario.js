export function CrearFormulario() {
  const formulario = document.createElement('form');

  const html = `
    <div><input type="email" class="inputIngreso" id="usuario" placeholder="Ingrese email" required/></div>
            <div><input type="password" class="inputIngreso" id="contrasena" placeholder="Ingrese contraseña" 
            required minlength="6"/></div>
            <div><button id="btnI">Ingresar</button></div>
            <div><button id="btnR"> Registrate </button></div>
            <img src="img/th.jpg" alt="Registro con Google" id="botonGoogle"/>
            <div> <img src="img/singFacebook.png" alt="Registro con Facebook" id="botonFacebook"/></div>
    
    `;
  formulario.innerHTML = html;
  return formulario;
}
