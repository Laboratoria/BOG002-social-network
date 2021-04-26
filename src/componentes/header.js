export default function crearHeader() {
  const headerDiv = document.createElement("div");
  const htmlheader = `
    <img src="img/logo-huc.png" alt="Logo HUC" width="100" height="100"/>
    <details class="menu">
      <summary> Nickname </summary>
        <ul>
          <li><a href='#crear-publicacion'> Aportar</a></li>
          <li><a href='#social'> Social</a></li>    
          <li> Salir</li>
        </ul>
    </details>  
  `;
  headerDiv.innerHTML = htmlheader;
  document.getElementById("header").appendChild(headerDiv);
  headerDiv.style.display = "flex";
  headerDiv.style.flexDirection = "row";
  headerDiv.style.justifyContent = "space-between";
  headerDiv.style.backgroundColor = "#4B656E";
}
