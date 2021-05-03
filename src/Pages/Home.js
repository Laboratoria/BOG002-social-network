


export function home() {
  
    const html = `
        <h1>FoodFans</h1>
        <span>Social Network</span>
        <p>Postea tus mejores platos, comparte tu experiencia y enseñala a tus amigos.</p>


            <!-- Botones para el ingreso y registro -->
         <section id="Botones" class="Bienvenida">
      
            <button type="button" id="signUpGoogle" class="btn" value="Sign up Google"> <img src="imagenes/google.png"> <a href="#signUpGoogle"> SIGN UP WITH GOOGLE</a> </button>
            <button type="button" id="signUp" class="btn" value="Sign Up"> <a href="#/signUp"> SIGN UP</a></button>
            <button type="button" id="login" class="btn" value="login"> <a href="#/login">LOGIN</a></button>
        
         </section>`;
    return html;
         
}





/* // capturamos el click sobre el boton de login
export function BotondeLogin () {
  
    const Login = document.getElementById('login');
    Login.addEventListener('click',() =>{
      document.getElementById('root').innerHTML = FormularioDeIngreso();
    })
    
  }

// capturamos el click sobre el boton de Sign Up
export function BotondeCrearCuenta () {
  
    const Registro = document.getElementById('signUp');
    Registro.addEventListener('click',() =>{
      document.getElementById('root').innerHTML = FormularioDeRegistro();
    })
    
  }
  // capturamos el click sobre el boton crear cuenta con Google
  export function BotondeCrearCuentaconGoogle () {
  
    const RegistroConGoogle = document.getElementById('signUpGoogle');
    RegistroConGoogle.addEventListener('click',() =>{
      document.getElementById('root').innerHTML = `<h1>Registro con Google</h1>`;
    })
    
  } */