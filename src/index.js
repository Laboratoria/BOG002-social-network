// eslint-disable-next-line import/no-cycle
// import { App } from "./app/App.js";
import { Router } from "./components/Router.js";
import { renderPost } from "./components/Utils.js";
import { createPost } from "./Firebase/Storage.js";

export function App() {
  Router();
}

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", App);

// export function getData() {
//     const db = firebase.firestore();
//     db.collection("usersPost").onSnapshot(
//       // { includeDocumentMetadataChanges: false },
//       (query) => {
//         let changePost = query.docChanges();
//         changePost.forEach((post) => {
//           if (post.type === "added") {
//             console.log("Add heard: ", post.doc.data());
//           }
//           if (post.type === "modified") {
//             console.log("Modified heard: ", post.doc.data());
//           }
//           if (post.type === "removed") {
//             console.log("Removed heard: ", post.doc.data());
//           }
//           console.log(post.doc.data());
//         });
//       }
//     );
//   }

window.addEventListener("load", () => {
  const db = firebase.firestore();
  db.collection("usersPost").onSnapshot((query) => {
    const template = document.querySelector("#template");
    const previewsData = template.dataset.timeline;
    let timeline = [];
    if (previewsData) {
      timeline = JSON.parse(previewsData);
    }
    let changePost = query.docChanges();
    console.log("changePost", changePost);
    changePost.forEach((post) => {
      timeline.push(post.doc.data());
    });
    template.dataset.timeline = JSON.stringify(timeline);
  });
  console.log("carga pagina");
});
