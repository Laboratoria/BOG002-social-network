const firebaseConfig = {
  apiKey: 'AIzaSyCNJzDnQucoug5jUE-5pEodaacilcQTyAw',
  authDomain: 'nomadas-3c02d.firebaseapp.com',
  databaseURL: 'https://nomadas-3c02d.firebaseio.com',
  projectId: 'nomadas-3c02d',
  storageBucket: 'nomadas-3c02d.appspot.com',
  messagingSenderId: '189718883297',
  appId: '1:189718883297:web:c200b22cbcb8c28c4a80a0',
};

export function configurationFireBase() {
  // firebase.initializeApp(firebaseConfig);
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore(app);
  return db;
}
