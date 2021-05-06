// creacion de formulario sign up

export function FormularioDeRegistro(){
     
   const html= `
   <img src="./imagenes/Fondo.jpg" class="fondo">
    <form id="formulario">
    <h1> Created account </h1>
      <fieldset>
    <input type="text" id="NameUser" class="input"  placeholder="User name" maxlength="10"   title="Maximo 16 caracteres" required name="name">
    <img src="" id="CampoVacioName" class="error">

    <input type="email"id="EmailUser"class="input" placeholder="email" name="email"> 
    <img src="" id="CampoVacioEmail" class="error">

    <input type="password" id="PasswordUser"class="input" placeholder ="password" name="password">
    <img src="" id="CampoVacioPassword" class="error">
  
    <button type="submit" id="Register" class="btn" > REGISTER <a href="#Register"> </a> </button>
    </fieldset>
    </form>`;
   
    return html;
    
}

export function DatosDelRegistro() {

    const Register = document.getElementById('Register');
    const inputs = document.querySelectorAll("#formulario input");
         
         
    const expresiones = {
       usuario: /^[a-zA-Z0-9\_\-]{3,16}$/, // Letras, numeros, guion y guion_bajo
       correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
       contraseña: /^.{4,12}$/ // 4 a 12 digitos.
      } 
      const ValidarFormulario = (e) =>{
        switch(e.target.name) {// con este estoy accediend al name dado a cada input
            case 'name':
               if(e.target.value == "" || e.target.value.length <3 || !expresiones.usuario.test(e.target.value)) {
                  document.getElementById("NameUser").style.border = "2px solid red";
                  document.getElementById("CampoVacioName").src= "./imagenes/cancelar.png" ;
               }else{
                  document.getElementById("NameUser").style.border = "2px solid green";
                  document.getElementById("CampoVacioName").src ="./imagenes/comprobado.png";
               }
            break;
            case 'email':
               if (e.target.value.length == 0 || e.target.value.length <3 ||!expresiones.correo.test(e.target.value)){
                  document.getElementById("EmailUser").style.border = "2px solid red";
                  document.getElementById("CampoVacioEmail").src= "./imagenes/cancelar.png";
                 // return false;
               }
               else{
                  document.getElementById("EmailUser").style.border = "2px solid green";
                  document.getElementById("CampoVacioEmail").src ="./imagenes/comprobado.png";
                  //return true;
               }
            break;
            case 'password':
               if (e.target.value =="" || e.target.value.length <4 || !expresiones.contraseña.test(e.target.value)) {
                  document.getElementById("PasswordUser").style.border = "2px solid red";
                  document.getElementById("CampoVacioPassword").src= "./imagenes/cancelar.png";
                  //return false;
                }
               else{
                  document.getElementById("PasswordUser").style.border = "2px solid green";
                  document.getElementById("CampoVacioPassword").src ="./imagenes/comprobado.png";
                  //return true;
               }
               
            break;
        }
      }
    
      inputs.forEach(input => {
         input.addEventListener("keyup",ValidarFormulario);
         input.addEventListener("blur",ValidarFormulario);
      })
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
         
          
      
      
         
}      
      
       