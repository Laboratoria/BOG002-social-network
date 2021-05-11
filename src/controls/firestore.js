import { sendData } from '../firestore/firestoreData.js';
let name, email, photoUrl, uid, emailVerified; 

export function createPost() {
    const wcPost = document.querySelector("post-card");
    const location = wcPost.shadowRoot.querySelector(".ubication").value;
    const description = wcPost.shadowRoot.querySelector(".textAreapublic").value;
    if((location.length > 0) && (description.length > 0)){
      const db = firebase.firestore(); 
      console.log("Database", db);
      retrieveUserData();
      sendData(db, location, description, uid, name);
      window.location.hash = '#home';
    }else{
      alert("Llena todos los campos para crear el post");
    }
}

function retrieveUserData(){
  const user = firebase.auth().currentUser;
  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid; 
  }
}