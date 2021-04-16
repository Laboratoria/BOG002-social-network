// Este es el punto de entrada de tu aplicacion

//import { ImageRegister } from './lib/index.js';

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
    apiKey: "AIzaSyCNJzDnQucoug5jUE-5pEodaacilcQTyAw",
    authDomain: "nomadas-3c02d.firebaseapp.com",
    databaseURL: "https://nomadas-3c02d.firebaseio.com",
    projectId: "nomadas-3c02d",
    storageBucket: "nomadas-3c02d.appspot.com",
    messagingSenderId: "189718883297",
    appId: "1:189718883297:web:c200b22cbcb8c28c4a80a0"
};

document.querySelector(".formRegister").addEventListener('submit', userRegistration);

firebase.initializeApp(firebaseConfig);

function userRegistration(event){
        event.preventDefault();
        const username = document.querySelector(".inputNameRegister").value;
        const email = document.querySelector(".inputEmailRegister").value;
        const password = document.querySelector(".inputPasswordRegister").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           // Updates the user attributes:
          user.updateProfile({ // <-- Update Method here
            displayName: username,
            // photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(function() {
            // Profile updated successfully!
            var displayName = user.displayName;
            console.log(displayName);
            // var photoURL = user.photoURL;
          }, function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });     

        }
});
}  

document.querySelector(".buttonVisibility").addEventListener('click', () => {
  console.log("entro")
  const changeType = document.getElementById("userPassword");
    if(changeType.type === "password"){
      changeType.type = "text";
      document.getElementById("visibility").style.display = "block";
      document.getElementById("noVisibility").style.display = "none";
    }else{
      changeType.type = "password";
      document.getElementById("visibility").style.display = "none";
      document.getElementById("noVisibility").style.display = "block";
    }  
});


