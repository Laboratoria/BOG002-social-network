
export function registroFirebaseEmail(email,password){
  firebase.auth().createUserWithEmailAndPassword(email, password)
.then((userCredential) => {
  // Signed in
  var user = userCredential.user;
  console.log(user)
  console.log(email)
  console.log(password)
  
  // ...
})
.catch((error) => {
  var errorCode = error.code;
  console.log(errorCode)
  var errorMessage = error.message;
  console.log(errorMessage)
  // ..
})};

export function googleFirebase(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;

    console.log(user.displayName);
    updateUser(user);
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...

    console.log(errorMessage);
  });
};

export function inicioFirebase(mail,contraseña){

firebase.auth().signInWithEmailAndPassword(mail,contraseña)
      .then((inicio) => {
        // Signed in
        var user = inicio.user;
        console.log("hace alguna cosa plis :/")
        // ...
      })
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
}
export function observador() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("existe usuario y es: " +user);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      
      // ...
    } else {
      console.log("no existe usuario");
      // User is signed out
      // ...
    }
  });
};