// eslint-disable-next-line import/no-cycle
// import { App } from "./app/App.js";
import { Router } from "./components/Router.js";

export function App() {
  Router();
}

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", App);

const firebaseConfig = {
  apiKey: "AIzaSyCYY8zyVFV_RB_SDWHdE2WVybpxlM35AkU",
  authDomain: "sn-gleam.firebaseapp.com",
  projectId: "sn-gleam",
  storageBucket: "sn-gleam.appspot.com",
  messagingSenderId: "454363590320",
  appId: "1:454363590320:web:0809dc8ad3570efc371575",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
