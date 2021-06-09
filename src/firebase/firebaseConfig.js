const firebaseConfig = {
    apiKey: "AIzaSyAIe54HZOhsk-AN-2Z__xGJR7lA9zGhGQk",
    authDomain: "marvel-social-network-b12c8.firebaseapp.com",
    projectId: "marvel-social-network-b12c8",
    storageBucket: "marvel-social-network-b12c8.appspot.com",
    messagingSenderId: "1028462146683",
    appId: "1:1028462146683:web:d7990610b7195ff4975ede"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export const db = firebase.firestore();
