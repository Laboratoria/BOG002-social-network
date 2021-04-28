export default function firebaseInitialize() {
  const firebaseConfig = {
    apiKey: "AIzaSyA2m-bpDqmXGFYJbMrfjW2J77TVNXINzS0",
    authDomain: "social-network-lab-2030d.firebaseapp.com",
    projectId: "social-network-lab-2030d",
    storageBucket: "social-network-lab-2030d.appspot.com",
    messagingSenderId: "394433220416",
    appId: "1:394433220416:web:c1629dcc59e45f53bd74a5",
    measurementId: "G-LMMGYHH9BN",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

// export const store = firebase.firestore();
