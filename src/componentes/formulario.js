export default function CrearFormulario() {
  const formulario = document.createElement('form');

  const html = `
    <div>
    <p>Si ya tienes cuenta, inicia sesión!</p>
    <input type="email" class="inputIngreso" id="usuario" placeholder="Ingresar correo" required/>
            <input type="password" class="inputIngreso" id="contrasena" placeholder="Ingresar contraseña" 
            required minlength="6"/>
             <button id="btnI">Iniciar Sesion</button>
             <div id="mesagge"></div>
             <p id="registro">¿No tienes cuenta? Registrate <a href="#registro">AQUÍ</a>
             <p id="registro">------------------  O  ------------------</p>
            <span class="login facebook" id="botonFacebook"><img src="img/facebookLogo2.png" alt="Registro con Facebook"  class="icono"/><p id="parrafos">Iniciar Sesión con Facebook</p></span>
            <span class="login" id="botonGoogle"><img src="img/googleLogo.png" alt="Registro con Google" class="icono"/><p id="parrafos">Iniciar Sesión con Google</p></span>
            </div>
    
    `;
  formulario.innerHTML = html;
  return formulario;
}
