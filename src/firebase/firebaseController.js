db.collection("Publicaciones")
.get()
.then((querySnapshot) => {
    console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});