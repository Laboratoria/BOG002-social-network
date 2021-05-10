


export function home() {
  
    const html = `
   
       <div class="fondo">
        <h1 class="Titulo">FoodFans</h1>
        <span>Social Network</span>
        <p>Postea tus mejores platos, comparte tu experiencia y enseñala a tus amigos.</p>


            <!-- Botones para el ingreso y registro -->
         <section id="Botones" class="Bienvenida">
      
            <button type="button" id="signUpGoogle" class="btnHome" value="Sign up Google"> <img src="imagenes/google.png">SIGN UP WITH GOOGLE</button>
            <button type="button" id="signUp" class="btnHome" value="Sign Up"> <a href="#/signUp"> SIGN UP</a></button>
            <button type="button" id="loginPpal" class="btnHome" value="login"> <a href="#/login">LOGIN</a></button>
        
         </section>

         </div>
        `;
    return html;
         
}

// capturamos el click sobre el boton crear cuenta con Google
  export function BotondeCrearCuentaconGoogle () {
  
    const RegistroConGoogle = document.getElementById('signUpGoogle');
    RegistroConGoogle.addEventListener('click',() =>{
      const provider = new firebase.auth.GoogleAuthProvider();
    
      firebase.auth().signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
    
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    
    })
  }