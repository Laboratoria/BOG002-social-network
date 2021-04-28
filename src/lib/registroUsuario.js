export const registroUsuario = () => {

    const ContenedorRegistro = document.createElement ("div");
    // let logo = document.createElement("img");
    // let textoBienvenida = document.createElement ("p");
    // let registroGmail = document.createElement ("div");
    // let pRegistroGmail = document.createElement ("p");
    // let logoGmail = document.createElement ("img");
    // let separador = document.createElement ("p");

    let encabezado = document.createElement ("div");
    const contenidoEncabezado = `
        <img alt="logoRegistro" class="logoRegistro" src = "Imagenes/LogoBeer.png"/>
        <h3> Conviértete en un Beer Lover's </h3>
        <div>
            <h4> Regístrate con Gmail</h4>
            <img alt="gmail" class="gmail" src="Imagenes/Gmail-Logo.png"/>
        </div>
        <p> ---------- O ---------- </p>
    `;

    let formRegistroUsuario = document.createElement ("form");
    const contenidoForm = `
        <div class = "contenidoForm">
        <input class = "inputForm" id = "email" type ="email" placeholder = "Correo Eletrónico">
        <input class = "inputForm" id= "nombreYApellido" type="name" placeholder="Nombre y Apellido">
        <input class = "inputForm" id = "nombreDeUsuario" type ="nickname" placeholder = "Nombre de Usuario">
        <input class = "inputForm" id= "contraseña" type ="new-password" placeholder ="Contraseña">
        <p>Para formar parte de la comunidad Beer Lovers debes aceptar que  eres mayor de edad.</p>
        <input class = "checkbox" type ="checkbox"><label for="">Soy mayor de edad</label>
        <button class="registrarme" type="submit"> Registrarme </button>
        </div>
    `;

    encabezado.appendChild(contenidoEncabezado);
    formRegistroUsuario.appendChild(contenidoForm);
    ContenedorRegistro.appendChild(encabezado);
    ContenedorRegistro.appendChild(formRegistroUsuario);

    return ContenedorRegistro;


    // let contenedorInputs = document.createElement ("div");
    // let email = document.createElement("input");
    // let nombreYApellido = document.createElement ("input");
    // let nombreDeUsuario = document.createElement ("input");
    // let contraseña = document.createElement ("input");
    // let checkBoxCondiciones = document.createElement ("input");
    // let labelCheckBox = document.createElement ("label");
    // let botonRegistrarme = document.createElement ("button");
    
    // ContenedorRegistro.className = "ContenedorRegistro";
    // logo.src = "Imagenes/logoBeer.png";
    // logo.id = "logoRegistro";
    // textoBienvenida.textContent = "Conviértete en un Beer Lovers";
    // registroGmail.className = "registroGmail";
    // pRegistroGmail.textContent = "Regístrate con";
    // logoGmail.src = "Imagenes/Gmail-Logo.png";
    // separador.textContent = "---------- o ----------";

    // contenedorInputs.className = "contenedorInputs";
    // email.type = "email";
    // email.placeholder = "correo electrónico";
    // nombreYApellido.type = "name";
    // nombreYApellido.placeholder = "Nombre y Apellido";
    // nombreDeUsuario.type = "nickname";
    // nombreDeUsuario.placeholder = "Nombre de Usuario";
    // contraseña.type = "new-password";
    // contraseña.placeholder = "Contraseña";
    // checkBoxCondiciones.type = "checkbox";
    
    // registroGmail.appendChild(pRegistroGmail);
    // registroGmail.appendChild(logoGmail);

}