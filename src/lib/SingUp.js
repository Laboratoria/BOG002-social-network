// creacion de formulario sign up

export function FormularioDeRegistro(){
     
     let vaciar =  document.getElementById("Body") 
     vaciar.innerHTML = ""
    const NewForm = document.createElement("form");

    // const Main = document.getElementsByTagName("main")
    // const Formulario = 
    
    NewForm.innerHTML= `
    
    <h1> Created account </h1>
    <fieldset>

    <input type="text" id="NameUser" class="input"  placeholder="User name" maxlength="10"   title="Maximo 16 caracteres" required
    "> 
    <span id="CampoVacioName"></span>

    <input type="email" id="EmailUser" class="input" placeholder="Email"> 
    <span id="CampoVacioEmail"></span>

    <input type="password" id="PasswordUser" class="input" placeholder ="Password" > 
    <span id="CampoVacioPassword"></span>
    
    <button type="submit" id="Register" class="btn" > REGISTER <a href="#Register"> </a> </button>
    </fieldset>
    `;
   document.getElementById("Body").appendChild(NewForm)

// Valores de los inputs



   const Submit    = document.querySelectorAll(".input")    
         Submit.addEventListener("keyup", (event)=>{

         event.preventDefault();
         

   const Name     = document.getElementById("NameUser").value;
   const Email    = document.getElementById("EmailUser").value;
   const Password = document.getElementById("PasswordUser").value; 


   
      let usuario= /^[a-zA-Z0-9\_\-]{3,16}$/; // Letras, numeros, guion y guion_bajo
      // const nombre= /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
      let correo= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      let contraseña= /^.{4,12}$/; // 4 a 12 digitos.
      
   
   
      // validacion para nombre de usuario
      if (Name == "" || Name.length <3 || !usuario.test(Name)) {
         document.getElementById("NameUser").style.border = "2px solid red";
         document.getElementById("CampoVacioName").textContent = "Campo incorrecto " 
         // return false
      }
      else{
         document.getElementById("NameUser").style.border = "2px solid green";
         document.getElementById("CampoVacioName").style.display ="none"
      }
      // validacion para correo de usuario
       if (Email.length == 0 || Email.length <3 ||!correo.test(Email)) {
         document.getElementById("EmailUser").style.border = "2px solid red";
         document.getElementById("CampoVacioEmail").textContent= "Campo incorrecto";
         // return false
      }
      else{
         document.getElementById("EmailUser").style.border = "2px solid green";
         document.getElementById("CampoVacioEmail").style.display ="none"}

      // validacion para contraseña de usuario
       if (Password =="" || Password.length <4 || !contraseña.test(Password)) {
         document.getElementById("PasswordUser").style.border = "2px solid red";
         document.getElementById("CampoVacioPassword").textContent= "  Campo incorrecto" 
         // return false
         
      }
      else{
         document.getElementById("PasswordUser").style.border = "2px solid green";
         document.getElementById("CampoVacioPassword").style.display ="none"}
 
   })
   }

  
