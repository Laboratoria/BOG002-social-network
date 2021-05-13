const db = firebase.firestore();
export function createPost(file, description) {
  uploadImage(file).then((url) => {
    console.log(url);
    db.collection("usersPost").doc().set({
      image: url,
      description,
    });
  });
}
function uploadImage(file, img) {
  const name = file.name;
  const ref = firebase.storage().ref("/userProfileImgs/" + name);
  const uploadTask = ref.put(file);

  //   function () {
  //     uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
  //       firebase.db.ref("usersPost/");
  //     });
  //   }
  // );
  // return snapshot.ref.getDownloadURL();
  return uploadTask
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .catch((error) => {
      console.log(error.message);
    });
}
