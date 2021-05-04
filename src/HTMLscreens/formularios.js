/* eslint-disable no-useless-constructor */
/* eslint-disable indent */
export const formularioRegistro = () => {

  class formRegistro extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      // eslint-disable-next-line quotes
      this.innerHTML =  `<form  id=formularioRegistro>
      <div class="superior">
       <div class="tituloRegistro"> <h1>Registro</h1></div>
       
        <div type="button" class="inicioGoogle" id=google>
          <input type="image" name="boton" value="pasar" id="botongoogle"  src="./imagenes/simbologoogle.png" width="30%"  >
         <div class=registroGoogle>Registro con Google</div>
         </div>
        
 
       </div>
      </div>
 
      <div class="contenedorinputreregistro">
 
     <div class="inputsRegistro" ><input type="text" placeholder="Nombre de usuario" name="Usuario" id="Usuario" class="inputRegistrarse" required>
     </div>
     <div class="inputsRegistro"  > <input type="text" placeholder="Email" name="email" id="email" class="inputRegistrarse"  required>
     </div>
      <div class="inputsRegistro"  ><input type="password" placeholder="Escribe tu contraseña" name="psw" id="psw" class="inputRegistrarse"  required>
      </div>
      </div>
    <div class="inferior">
       <div class="fecha">
       <input type="date" id="start" name="trip-start"
        value=""
        min="1960-01-01" max="2005-01-01">
       </div>
 
 
        <div class="checkboxRegistro"><label><input type="checkbox" id="cbox1" value="first_checkbox">Terminos y condiciones</label><br>
         </div>
        
 
         <div class="botonRegistro">
        
         <a href="#/principal" class="registerbtn">  <button type="submit" >Registrate</button></a>
         </div>
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

export const formularioInicio = () => {
  class formInicio extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      // eslint-disable-next-line quotes
      this.innerHTML = `<form action="" method="POST" id="formularioInicio">
      <div class="formulario">
        <h1>Iniciar Sesión</h1>
        <div class="grupo">
          <input type="email" name="" id="usser" required> <span class="barra"></span>
          <label for="">Usuario</label>
        </div>
        <div class="grupo">
          <input type="password" name="" id="password" required> <span class="barra"></span>
          <label for="">Contraseña</label>
        </div>
        
        <button id="botonAcceder"><a href="#/principal">Iniciar Sesión</a></button>
      </div>
      
  
    </form>`;
  }
}

if (window.customElements.get('formulario-inicio') === undefined) {
  window.customElements.define('formulario-inicio', formInicio);
} else {
  window.customElements.get('formulario-incio');
}
};