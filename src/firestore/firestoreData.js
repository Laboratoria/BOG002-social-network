import { paintAllPosts } from '../controls/firestore.js';

export function RetrieveData(){
    const db = firebase.firestore(); 
    db.collection("posts").orderBy("date", "desc")
    .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(doc.id);
            const docID = doc.id;
            const username = doc.data().userName;
            const UID = doc.data().UID;
            const location = doc.data().location;
            const description = doc.data().description;
            const likes = doc.data().likes;
            paintAllPosts(docID, username, UID, location, description, likes);
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

export function deletePost(postID){
    const db = firebase.firestore(); 
    db.collection("posts").doc(postID).delete().then(() => {
        console.log(postID, "Document successfully deleted!");
        RetrieveData();
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}


