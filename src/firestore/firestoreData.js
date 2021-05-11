import { AllPostsCard } from '../views/allPosts.js';
import { paintAllPosts } from '../controls/firestore.js';

export function RetrieveData(containerPosts){
    const db = firebase.firestore(); 
    db.collection("posts").orderBy("date", "desc")
    .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(doc.id);
            const username = doc.data().userName;
            const UID = doc.data().UID;
            const location = doc.data().location;
            const description = doc.data().description;
            const likes = doc.data().likes;
            paintAllPosts(username, UID, location, description, likes)
            // const AllPost = AllPostsCard();
            // containerPosts.innerHTML += AllPost;
        });
    });
}

export function sendData(db, location, description, uid, name, date){
    // Crear un postFF
    db.collection("posts").add({
        location: location,
        description: description,
        UID: uid,
        userName: name,
        likes: 0,
        date : date
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        window.location.hash = '#home';
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

export function deletePost(){
    const db = firebase.firestore(); 
    db.collection("posts").doc("DC").delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}


