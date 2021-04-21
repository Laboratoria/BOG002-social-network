export default function CrearFormulario() {
  const formulario = document.createElement('form');

  const html = `
    <div>
    <p class="teachers-font">Si ya tienes cuenta, inicia sesión!</p>
    <input type="email" class="inputIngreso" id="usuario" placeholder="Ingresar correo" required/>
            <input type="password" class="inputIngreso" id="contrasena" placeholder="Ingresar contraseña" 
            required minlength="6"/>
            <div id="mesagge"></div>
             <button id="btnI">Iniciar Sesion</button>
             <p id="registro">¿No tienes cuenta? Registrate <a href="#registro">AQUÍ</a>
             <p id="registro"">------------------  O  ------------------</p>
            <img src="img/singFacebook.png" alt="Registro con Facebook" id="botonFacebook"/>
            <img src="img/th.jpg" alt="Registro con Google" id="botonGoogle"/></div>
    
    `;
  formulario.innerHTML = html;
  return formulario;
}
