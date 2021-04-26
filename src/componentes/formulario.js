export default function CrearFormulario() {
  const formulario = document.createElement('form');

  const html = `
    <div>
    <p class="Parrafos">Si ya tienes cuenta, inicia sesión!</p>
    <input type="email" class="inputIngreso" id="usuario" placeholder="Ingresar correo" required/>
            <input type="password" class="inputIngreso" id="contrasena" placeholder="Ingresar contraseña" 
            required minlength="6"/>
             <button id="btnI">Iniciar Sesion</button>
             <div id="mesagge"></div>
             <p id="registro" class="Parrafos">¿No tienes cuenta? Registrate <a href="#registro">AQUÍ</a>
             <p id="registro" class="Parrafos">------------------  O  ------------------</p>
            <span class="login facebook"><img src="img/facebookLogo2.png" alt="Registro con Facebook" id="botonFacebook" class="icono"/><p class="Parrafos">Iniciar Sesión con Facebook</p></span>
            <span class="login"><img src="img/googleLogo.png" alt="Registro con Google" id="botonGoogle" class="icono"/><p class="Parrafos">Iniciar Sesión con Google</p></span>
            </div>
    
    `;
  formulario.innerHTML = html;
  return formulario;
}
