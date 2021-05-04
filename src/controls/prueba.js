export function RetrieveData(db){
    // Crear un usuario
    db.collection("Post").add({
        description: "Suba es muy lindo",
        likes: 20,
        location: new firebase.firestore.GeoPoint(4.56789, 69.765556),
        userName: "Natalia González"
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

    //Traer data de collection Post
    db.collection("Post").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });
    });

}



