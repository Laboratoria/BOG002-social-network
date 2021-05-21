const db = firebase.firestore();
export function createPost(file, description) {
  uploadImage(file).then((url) => {
    db.collection("usersPost").doc().set({
      image: url,
      description,
    });
  });
}

function uploadImage(file) {
  const name = file.name || "";
  const ref = firebase.storage().ref("/userProfileImgs/" + name);
  const uploadTask = ref.put(file);
  return uploadTask
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .catch((error) => {
      console.log(error.message);
    });
}
