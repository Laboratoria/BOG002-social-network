/* eslint-disable no-useless-constructor */
/* eslint-disable indent */
export const formularioRegistro = () => {
  
  class formRegistro extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      // eslint-disable-next-line quotes
      this.innerHTML =  `<form action="">
      <div class="superior">
       <div> <h1>Registro</h1></div>
       <div>Aca la imagen de google</div>
      </div>
 
      <div class="contenedorinputreregistro">
 
     <div class="inputsRegistro" ><input type="text" placeholder="Nombre de usuario" name="Usuario" id="Usuario" class="inputRegistrarse" required>
     </div>
     <div class="inputsRegistro"  > <input type="text" placeholder="Email" name="email" id="email" class="inputRegistrarse"  required>
     </div>
      <div class="inputsRegistro"  ><input type="password" placeholder="Enter Password" name="psw" id="psw" class="inputRegistrarse"  required>
      </div>
 
 
       <div class="fecha">
       <input type="date" id="start" name="trip-start"
        value=""
        min="1960-01-01" max="2005-01-01">
       </div>
 
 
        <div class="checkboxRegistro"><label><input type="checkbox" id="cbox1" value="first_checkbox">Terminos y condiciones</label><br>
         </div>
        
 
        <div class="botonRegistro">
          <button type="submit" class="registerbtn">Register</button></div>
    </div>
    
    </form>`;
  }
}


if (window.customElements.get("formulario-registro")===undefined){
  window.customElements.define("formulario-registro",formRegistro);
}  else  {
  window.customElements.get("formulario-registro");
};

};
