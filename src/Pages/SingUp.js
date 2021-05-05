// creacion de formulario sign up

export function FormularioDeRegistro(){
     
   const html= `
   <img src="./imagenes/Fondo.jpg" class="fondo">
    <form >
    <h1> Created account </h1>
      <fieldset>
    <input type="text" id="NameUser" class="input"  placeholder="User name" maxlength="10"   title="Maximo 16 caracteres" required ">
    <img src="" id="CampoVacioName" class="error">

    <input type="email"id="EmailUser"class="input" placeholder="email"> 
    <img src="" id="CampoVacioEmail" class="error">

    <input type="password" id="PasswordUser"class="input" placeholder ="password">
    <img src="" id="CampoVacioPassword" class="error">
    
    <button type="submit" id="Register" class="btn" > REGISTER <a href="#Register"> </a> </button>
    </fieldset>
    </form>`;
   
    return html;
    
}


  

 export function ObtenerDatosDelRegistro() {
   const inputs   = document.querySelectorAll(".input");
         inputs.forEach(element => {
         element.addEventListener("keyup", ()=>{

            // event.preventDefault();
            // console.log("click en boton de enviar")
   
        const Name     = document.getElementById("NameUser").value;
        const Email    = document.getElementById("EmailUser").value;
        const Password = document.getElementById("PasswordUser").value; 
   
   
      
         let usuario= /^[a-zA-Z0-9\_\-]{3,16}$/; // Letras, numeros, guion y guion_bajo
         let correo= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
         let contraseña= /^.{4,12}$/; // 4 a 12 digitos.
         
      
      
         // validacion para nombre de usuario
      
         if (Name == "" || Name.length <3 || !usuario.test(Name)) {
            document.getElementById("NameUser").style.border = "2px solid red";
            document.getElementById("CampoVacioName").src= "./imagenes/cancelar.png" 
            // return false
         }
         else{
            document.getElementById("NameUser").style.border = "2px solid green";
            document.getElementById("CampoVacioName").src ="./imagenes/comprobado.png"
         }
      
         // validacion para correo de usuario
      
         if (Email.length == 0 || Email.length <3 ||!correo.test(Email)) {
            document.getElementById("EmailUser").style.border = "2px solid red";
            document.getElementById("CampoVacioEmail").src= "./imagenes/cancelar.png";
            // return false
         }
         else{
            document.getElementById("EmailUser").style.border = "2px solid green";
            document.getElementById("CampoVacioEmail").src ="./imagenes/comprobado.png";
         }
      
         // validacion para contraseña de usuario
      
         if (Password =="" || Password.length <4 || !contraseña.test(Password)) {
            document.getElementById("PasswordUser").style.border = "2px solid red";
            document.getElementById("CampoVacioPassword").src= "./imagenes/cancelar.png";
            // return false
            
         }
         else{
            document.getElementById("PasswordUser").style.border = "2px solid green";
            document.getElementById("CampoVacioPassword").src ="./imagenes/comprobado.png";
         }


          
 //mostrar y ocultar contraseña
 
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
          
      });
   
  })
  
}
// OPCION 1 DE ENVIAR FORMULARIO


// function validate(){
//    if (Name == "" || Name.length <3  ) {
//       console.log("Completa correctamente los campos")
//       return false
//    }
//    else if (Email =="" || Email.length <4){
//       console.log("Completa correctamente los campos")
//       return false
//    }
//    else if (Password =="" || Password.length <4){
//       console.log("Completa correctamente los campos")
//       return false
//    }
//    else{console.log(enviado)
     
//    }}

//    console.log(validate)



// OPCION 2 DE ENVIAR FORMULARIO

// const submit  = document.getElementById("Register");
//          submit.addEventListener("submit", ()=>{
//             if (Name == "") {
//                alert ("Completa correctamente los campos")
//             }
//          }
//          )