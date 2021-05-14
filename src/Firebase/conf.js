
// Your web app's Firebase configuration
    
let firebaseConfig = {
  apiKey: "AIzaSyDybXyutc7WWfHJ-3cWqb0wqDmXLpECSuY",
  authDomain: "social-network-19982.firebaseapp.com",
  projectId: "social-network-19982",
  storageBucket: "social-network-19982.appspot.com",
  messagingSenderId: "728662470096",
  appId: "1:728662470096:web:37d6354953b938300d1dd5",
  measurementId: "G-C6G1E4E0TP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
console.log('firebase configurado');

//firestore
const db = firebase.firestore();

 const SaveUser = (user) => {
  db.collection("usuarios").add({
     user
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
  
  
}

   