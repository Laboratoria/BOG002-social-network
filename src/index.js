// eslint-disable-next-line import/no-cycle
// import { App } from "./app/App.js";
import { Router } from "./components/Router.js";

export function App() {
    Router();
}

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", App);
/*window.addEventListener("load", () => {
    const db = firebase.firestore();
    db.collection("usersPost").onSnapshot(query => {
        let changePost = query.docChanges();
        changePost.forEach(post => {
            renderPost(post.doc.data());
        })
        console.log("ocurrio un cambio")
    });
    console.log("carga pagina")
});*/