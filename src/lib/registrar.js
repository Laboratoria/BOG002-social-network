

export function registro(){
 let form= document.querySelector('#formularioRegistro');


form.addEventListener('submit', (e)=>{
    e.preventDefault() ;
    var email=document.getElementById("email").value;
    var password=document.getElementById("psw").value;
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
    });});

}
export function google() {
  let googleInicio = document.querySelector('#google');
  googleInicio.addEventListener('click', () => {

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
   });
}
