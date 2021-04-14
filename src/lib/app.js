// aqui exportaras las funciones que necesites

export function registrar (){
  window.location = "#login";
    const email = document.getElementById("usuario");
    const contrasena = document.getElementById("contrasena");
    
    document.addEventListener('click', e => {
   if (e.target.matches("#btnR")){
  /*e.preventDefault();*/
  /*console.log(`registrado! con el email ${email.value} `)
  console.log(contrasena.value);*/
  
  firebase.auth().createUserWithEmailAndPassword(email.value, contrasena.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log ('registrado')
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log (errorMessage);
      // ..
    });
   }
   });
  }
    
  export function registroGoogle (){

    const botonGoogle = document.getElementById('botonGoogle');
    
    botonGoogle.addEventListener("click", (e) => {
      e.preventDefault();
      console.log('click');
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).then((result) => {
        console.log(result);
        console.log("google sign in");
      })
      .catch(err => {
        console.log(err);
      })
    });
    }    