export function services() {
  const Parameters = `
  <!-- Insert these scripts at the bottom of the HTML, but before you use any Firebase services -->

  <!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>
  
  <!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics -->
  <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js"></script>
  
  <!-- Add Firebase products that you want to use -->
  <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-firestore.js"></script>
  <!-- <p> funciono llamar servicios firebase </p>-->`;

  // document.querySelector('.body').insertAdjacentHTML('afterbegin', Parameters);
  console.log('corrio servicios firebase');
}
