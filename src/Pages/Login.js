export function FormularioDeIngreso(){

  const html= `
      <img src="./imagenes/Fondo.jpg" class="fondo">
      <h1> Login </h1>
      <form id="Form-login"> 
        <input type="email"    class="input" placeholder="email"> 
        <input type="password" class="input" placeholder ="password"> 
      
      <button type="submit" id="login" class="btn" > LOGIN <a href="#/Register"> </a> </button>
      
      <form> `
      
  return html;
}
