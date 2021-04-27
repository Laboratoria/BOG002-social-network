

export function registro(){
 let botonregistro= document.querySelector('.registerbtn');


botonregistro.addEventListener('click', ()=>{ 
    var email=document.getElementById("email").value;
    var password=document.getElementById("psw").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      console.log(errorCode)
      var errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });});

}


/**/