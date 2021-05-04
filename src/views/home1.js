export function home() {
  const container = `
      <div class="prueba">
      <header class="header_home">
      <img class="logo_mobile" src="assets/imagesIcon/Only_logo.png">
      <img class="logo_name" src="assets/imagesIcon/Title_nomadas.png">
      <a href=""><img class="logo_sigOut" src="assets/imagesIcon/CloseWhiteV.png"></a>
      </header>
    <nav class="mobile_nav">
      <li><a href=""><img class="logo_mobileNav" src="assets/imagesIcon/HomeWhiteV.png"></a></li>
      <li><a href=""><img class="logo_mobileNav" src="assets/imagesIcon/EditWhiteV.png"></a></li>
      <li><a href=""><img class="logo_mobileNav" src="assets/imagesIcon/UserWhiteV.png"></a></li>
    </nav>
    <nav class="desk_nav">
      <img class="logo_desk" src="assets/imagesIcon/Complete_logo.png">
      <li><a href=""><img class="logo_Nav" src="assets/imagesIcon/HomeWhiteV.png">Home</a></li>
      <li><a href=""><img class="logo_Nav" src="assets/imagesIcon/EditWhiteV.png">Publicar</a></li>
      <li><a href=""><img class="logo_Nav" src="assets/imagesIcon/UserWhiteV.png">Mi perfil</a></li>
      <li><a href=""><img class="logo_Nav" src="assets/imagesIcon/CloseWhiteV.png">Cerrar sesion</a></li>
    </nav>
    </div>
      `;
  return container;
}
