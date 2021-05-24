

// Add a new document with a generated id.
export const SavePublicaciones=(publicaciones)=> {
 
db.collection("publicaciones").add(
    publicaciones
)
        .then((docRef) => {
        console.log('enviado a la consola de firestore')
})
        .catch((error) => {
           console.error("Error adding document: ", error);
});
}

export const SaveUser = (user) => {
    db.collection("usuarios").add(
       user
    )
    .then((docRef) => {
      console.log("Enviado a la consola firestore ", docRef.id);
      window.location.hash ='#/profile';
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
    
    
  }
   
  //Delete
/* 
  const desertRef = storageRef.child('images/desert.jpg');

// Delete the file
desertRef.delete().then(function() {
  // File deleted successfully
}).catch(function(error) {
  // Uh-oh, an error occurred!
}); */


//contar los like
/* function toggleStar(postRef, uid) {
  postRef.transaction((post) => {
    if (post) {
      if (post.stars && post.stars[uid]) {
        post.starCount--;
        post.stars[uid] = null;
      } else {
        post.starCount++;
        if (!post.stars) {
          post.stars = {};
        }
        post.stars[uid] = true;
      }
    }
    return post;
  });
}
 */