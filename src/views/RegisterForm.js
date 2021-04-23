export function renderFormRegister() {
  const container = `
  <h3 class="titleForm">Formulario Registro</h3>
  <form class="formRegister" id="formRegister"autocomplete="off">
  <img class="imgIcon" src="assets/imagesIcon/UserGray.png" />
  <input class="inputName" placeholder="Nombre Completo" type="text" id="userName" minlength="7" pattern="[A-Z a-z]{1,30}" required></input><br>
  <img class="imgIcon" src="assets/imagesIcon/atGray.png" />
  <input class="inputEmail" placeholder="Correo electrónico" type="email" id="userEmail" required></input><br>
  <div id="popupEmail" class="popUpError" style="display: none;"><p></p></div> 
  <img class="imgIcon" src="assets/imagesIcon/lockedGray.png" />
  <input class="inputPassword" placeholder="Contraseña" type="password" id="userPassword" minlength="7" required></input>
  <div id="popupPassword" class="popUpError" style="display: none;"><p></p></div> 
  <button class="buttonVisibility" type="button">
    <img class="imgVisibility" id="noVisibility" src="assets/imagesIcon/NoVisibility.png" style="display:block;" />
    <img class="imgVisibility" id="visibility" src="assets/imagesIcon/ver.png" style="display:none;"/>
  </button><br>
  <br>
  <button class="buttonEnvioRegistro" type="submit">Registrarme</button>
  </form>`;
  return container;
}
