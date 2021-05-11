import { AllPostsCard } from '../views/allPosts.js'
export function RetrieveData(){
    const db = firebase.firestore(); 
    //Traer data de collection Post
    // db.collection("Post").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(doc.data());
    //     });
    // });

    db.collection("posts")
    .onSnapshot((querySnapshot) => {
        var posts = [];
        querySnapshot.forEach((doc) => {
            const username = doc.data().userName;
            const location = doc.data().location;
            const description = doc.data().description;
            const likes = doc.data().likes;
            AllPostsCard(username, location, description, likes);
        });
    });
}

export function sendData(db, location, description, uid, name){
    // Crear un postFF
    db.collection("posts").add({
        location: location,
        description: description,
        UID: uid,
        userName: name,
        likes: 0
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}



