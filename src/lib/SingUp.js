// creacion de formulario sign up

export function FormularioDeRegistro(){
     
     let vaciar =  document.getElementById("Body") 
     vaciar.innerHTML = ""
    const NewForm = document.createElement("form");

    // const Main = document.getElementsByTagName("main")
    // const Formulario = 
    
    NewForm.innerHTML= `
    
    <h1> Created account </h1>
    
    <input type="text" class="input" placeholder="User name"> 
    <input type="email" class="input" placeholder="email"> 
    <input type="password" class="input" placeholder ="password"> 
    
    <button type="submit" id="Register" class="btn" > REGISTER <a href="#Register"> </a> </button>
    
    `;
   document.getElementById("Body").appendChild(NewForm)
  
}
