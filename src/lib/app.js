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
    
    