// creacion de formulario sign up

export function FormularioDeRegistro(){
     
   const html= `
    <form>
    <h1> Created account </h1>
      <fieldset>
    <input type="text" id="NameUser" class="input"  placeholder="User name" maxlength="10"   title="Maximo 16 caracteres" required
    "> 
    <span id="CampoVacioName" class="error"></span>

    <input type="email"id="EmailUser"class="input" placeholder="email"> 
    <span id="CampoVacioEmail" class="error"></span>

    <input type="password" id="PasswordUser"class="input" placeholder ="password"> 
    <span id="CampoVacioPassword" class="error"></span>
    
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
            document.getElementById("CampoVacioName").innerHTML = "Campo incorrecto " 
            // return false
         }
         else{
            document.getElementById("NameUser").style.border = "2px solid green";
            document.getElementById("CampoVacioName").innerHTML ="correcto"
         }
         // validacion para correo de usuario
         if (Email.length == 0 || Email.length <3 ||!correo.test(Email)) {
            document.getElementById("EmailUser").style.border = "2px solid red";
            document.getElementById("CampoVacioEmail").textContent= "Campo incorrecto";
            // return false
         }
         else{
            document.getElementById("EmailUser").style.border = "2px solid green";
            document.getElementById("CampoVacioEmail").style.display ="none"
         }
         // validacion para contraseña de usuario
         if (Password =="" || Password.length <4 || !contraseña.test(Password)) {
            document.getElementById("PasswordUser").style.border = "2px solid red";
            document.getElementById("CampoVacioPassword").textContent= "  Campo incorrecto" 
            // return false
            
         }
         else{
            document.getElementById("PasswordUser").style.border = "2px solid green";
            document.getElementById("CampoVacioPassword").style.display ="none"
         }
   
      })
      });
        ;
 }