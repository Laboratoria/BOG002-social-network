

export function registro(){
 let botonregistro= document.querySelector('.registerbtn');
 var email=document.getElementById("email");
var password=document.getElementById("psw");
botonregistro.addEventListener('click', ()=>{firebase.auth().createUserWithEmailAndPassword(email, password)
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
    });
  }
  );




/**/