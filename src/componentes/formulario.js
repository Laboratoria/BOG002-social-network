export default function CrearFormulario() {
  const formulario = document.createElement('form');

  const html = `
    <div><input type="email" class="inputIngreso" id="usuario" placeholder="Ingresar correo" required/></div>
            <div><input type="password" class="inputIngreso" id="contrasena" placeholder="Ingresar contraseña" 
            required minlength="6"/></div>
            <div id="mesagge"></div>
            <div><a href="#registro">Nuevo registro</a> <button id="btnI">Ingresar</button></div>
            <img src="img/singFacebook.png" alt="Registro con Facebook" id="botonFacebook"/>
            <div><img src="img/th.jpg" alt="Registro con Google" id="botonGoogle"/></div>
    
    `;
  formulario.innerHTML = html;
  return formulario;
}
