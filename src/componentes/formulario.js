export function CrearFormulario() {  

    const formulario = document.createElement ('form');
    
    const html = `
    <div><input type="email" id="usuario" placeholder="Ingrese email" required/></div>
            <div><input type="password" id="contrasena" placeholder="Ingrese contraseña" 
            required minlength="6"/></div>
            <div><button class="btnI">Ingresar</button></div>
            <div><button id="btnR"> Registrate </button></div>
            <img src="img/th.jpg" alt="Registro con Google" id="botonGoogle"/>
    
    `
    formulario.innerHTML = html;
    return formulario;
    }
    