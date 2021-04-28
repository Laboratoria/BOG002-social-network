export default function crearHeader() {
  const headerDiv = document.createElement("div");
  const htmlheader = `
  
  <nav class="responsive-nav">
  <div id="div-logo">
  <img id="logo" src="img/logo-huc.png" alt="logo">
  </div>
  <details class="menu">
      <summary> Nickname </summary>
        <ul>
          <li><a href='#crear-publicacion'> Aportar</a></li>
          <li><a href='#social'> Social</a></li>    
          <li id="signOut"> Salir</li>
        </ul>
    </details>  
   </nav>
  `;
  headerDiv.innerHTML = htmlheader;
  document.getElementById("header").appendChild(headerDiv);
  headerDiv.style.display = "flex";
  headerDiv.style.position = "fixed";
  headerDiv.style.width = "100%";
  headerDiv.style.height = "80px";
  headerDiv.style.top = "0";
  headerDiv.style.left = "0";
  headerDiv.style.backgroundColor = "#4B656E";
}
