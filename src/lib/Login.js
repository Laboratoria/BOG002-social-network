export function FormularioDeIngreso(){
     
    let vaciar =  document.getElementById("Body") 
        vaciar.innerHTML = ""

   const NewForm = document.createElement("form");

   NewForm.innerHTML= `
   
   <h1> Login </h1>
   

   <input type="email"    class="input" placeholder="email"> 
   <input type="password" class="input" placeholder ="password"> 
   
   <button type="submit" id="login" class="btn" > LOGIN <a href="#Register"> </a> </button>
   
   `;
  document.getElementById("Body").appendChild(NewForm)
 
}
