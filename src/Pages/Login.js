import {LoginUsuario} from '../firebaseAuth.js';

export function FormularioDeIngreso(){

  const html= `
      <div class='fondo'>
      <h1> Login </h1>
      <form id="Form-login"> 
      <div id="usuario"> <img src="./imagenes/usuario.png"></div>
      <div class="input" id="Email">
      <input type="email" name="correo" placeholder="email" required id="EmailUser"> 
      <img src="" id="CampoVacioEmail" class="error">
      </div>
      <div class="input" id="Password">
      <input type="password"  name="password" placeholder ="password" required id="PasswordUser">
      <img src="" id="CampoVacioPassword" class="error"> 
      </div>
      <button type="submit" id="login" class="btn" > LOGIN <a href="#/Register"> </a> </button>
      <form> 
      <div>`
      
      
  return html;
}

 export function DatosDeLogin(){
  const formularioLogin = document.getElementById('Form-login');
  const inputs = document.querySelectorAll('.input');

  const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
	}
  const campos = {
    nombre: false,
    correo: false,
    password: false
  } 

  const validarLogin = (e) => {
    switch (e.target.name) {
      case "correo":
            if(expresiones.correo.test(e.target.value)){
               document.getElementById("Email").style.border = "5px solid green";
               document.getElementById("CampoVacioEmail").src ="./imagenes/comprobado.png";
               campos["correo"] = true;
            } else {
               document.getElementById("Email").style.border = "5px solid red";
               document.getElementById("CampoVacioEmail").src= "./imagenes/cancelar.png";
               campos["correo"] = false;
            }
		  break;	
      case "password":
         if(expresiones.password.test(e.target.value)){
            document.getElementById("Password").style.border = "5px solid green";
            document.getElementById("CampoVacioPassword").src ="./imagenes/comprobado.png";
            campos["password"] = true;
         } else {
            document.getElementById("Password").style.border = "5px solid red";
            document.getElementById("CampoVacioPassword").src= "./imagenes/cancelar.png";
            campos["password"] = false;
         }
	      	break;
         }
    }
    inputs.forEach((input) => {
      input.addEventListener('keyup', validarLogin);
      input.addEventListener('blur', validarLogin);
    });
    //Mostrar y ocultar contraseña
    const contrasena = document.getElementById("PasswordUser");
    const mostrarPassword = document.getElementById("PasswordUser");
    mostrarPassword.addEventListener("keydown", () =>{
    // Eliminamos su type del input
    contrasena.removeAttribute("type");
    });
    mostrarPassword.addEventListener("keyup", ( ) => {
    // Agregamos type de input
    contrasena.setAttribute("type", "password");
    });

// enlazando el formulario con firebase
   formularioLogin.addEventListener('submit', (e) => {
	   e.preventDefault();
	if( campos.password && campos.correo ){
    const Email = document.getElementById("EmailUser").value;
	  const Password= document.getElementById("PasswordUser").value;
    console.log("enviado correo  " + Email + " contraseña " + Password)
    LoginUsuario(Email, Password)
   } else {
		console.log("no se envia");
	}
  });

}