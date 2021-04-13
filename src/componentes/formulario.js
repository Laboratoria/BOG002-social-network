export function CrearFormulario() {  

    const formulario = document.createElement ('form');
    
    const html = `
    <div><input type="email" id="usuario" placeholder="Ingrese email" /></div>
            <div><input type="password" id="contrasena" placeholder="Ingrese contraseña"/></div>
            <div><button class="btnI">Ingresar</button></div>
            <div><button id="btnR"> Registrate </button></div>
    
    `
    formulario.innerHTML = html;
    return formulario;
    }
    