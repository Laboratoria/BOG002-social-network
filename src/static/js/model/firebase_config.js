// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBiVALgySDsp6bALlL-FP2bBZeQs7msfw4",
  authDomain: "walkter-64c60.firebaseapp.com",
  projectId: "walkter-64c60",
  storageBucket: "walkter-64c60.appspot.com",
  messagingSenderId: "172224009434",
  appId: "1:172224009434:web:3287d8c4c673d36f4f01e3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const bd = firebase.firestore();