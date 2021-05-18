import { sendData } from '../firestore/firestoreData.js';
import { AllPostsCard } from '../views/allPosts.js';
let name, email, photoUrl, uid, emailVerified, date; 

export function createPost() {
    const wcPost = document.querySelector("post-card");
    const location = wcPost.shadowRoot.querySelector(".ubication").value;
    const description = wcPost.shadowRoot.querySelector(".textAreapublic").value;
    if((location.length > 0) && (description.length > 0)){
      const db = firebase.firestore(); 
      console.log("Database", db);
      retrieveUserData();
      sendData(db, location, description, uid, name, date);
    }else{
      alert("Llena todos los campos para crear el post");  
    }
}

export function paintAllPosts(containerPosts, docID, username, UID, location, description, likes, permise, imageLike){
  retrieveUserData();
  let ownPost;
  if(username == name){
    ownPost = true;
  }else{
    ownPost = false;
  }
  AllPostsCard(containerPosts, docID, username, location, description, likes, permise, ownPost, imageLike);
}

function retrieveUserData(){
  const user = firebase.auth().currentUser;
  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid; 
    date = Date(Date.now());
  }
}