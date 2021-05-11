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
//      alert("Llena todos los campos para crear el post");
//    const messageAlert = document.getElementById('popupAlert');
//    popupAlert.style.display = 'block';
//    popupAlert.innerHTML = "Llena todos los campos para crear el post";   
    }
}

export function paintAllPosts(username, UID, location, description, likes){
  retrieveUserData();
  let ownPost;
  if(uid == UID){
    ownPost = true;
  }else{
    ownPost = false;
  }
  AllPostsCard(username, location, description, likes, ownPost);
  const allPost = document.querySelector('post-card');
 console.log(allPost)
  allPost.shadowRoot.querySelector('#moreImageButton').addEventListener('click',(event) => {
    const element = event.target;
    console.log(element);
  }); 
  console.log("CURRENT UID", uid);
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