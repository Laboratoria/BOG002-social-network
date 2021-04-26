
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");

var firebaseConfig = {
    // ...
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export function registro(){
 let botonregistro= document.querySelector('.registerbtn');
botonregistro.addEventListener('click', ()=>{console.log("diste click")});
var email=document.getElementById("email");
var password=document.getElementById("psw");
auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}


/**/