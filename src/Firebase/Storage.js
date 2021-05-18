import { renderPost } from "../components/Utils.js";

const db = firebase.firestore();
export function createPost(file, description) {
    uploadImage(file).then((url) => {
        db.collection("usersPost").doc().set({
            image: url,
            description,
        });
    });
    db.collection("usersPost").onSnapshot(query => {
        let changePost = query.docChanges();
        changePost.forEach(post => {
            renderPost(post.doc.data());
        })
    });

}

function uploadImage(file) {
    const name = file.name;
    const ref = firebase.storage().ref("/userProfileImgs/" + name);
    const uploadTask = ref.put(file);
    return uploadTask
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .catch((error) => {
            console.log(error.message);
        });
}