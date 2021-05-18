export function renderFormLogin() {
  const container = `
  <form class="formHome" id="formRegister"autocomplete="off">
    <img class="imgIcon" src="assets/imagesIcon/atGray.png" />
    <input class="inputEmail" placeholder="Correo electrónico" type="email" id="userEmail" required></input><br>
    <div id="popupEmail" class="popUpError" style="display: none;"><p></p></div>
    <img class="imgIcon" src="assets/imagesIcon/lockedGray.png" />
    <input class="inputPassword" placeholder="Contraseña" type="password" id="userPassword" minlength="7" required></input>
    <div id="popupPassword" class="popUpError" style="display: none;"><p></p></div>
    <button class="buttonVisibility" type="button">
        <img class="imgVisibility" id="noVisibility" src="assets/imagesIcon/NoVisibility.png" style="display:block;" />
        <img class="imgVisibility" id="visibility" src="assets/imagesIcon/ver.png" style="display:none;" />
    </button>
    <button class="buttonInicioSesionHome" type="submit">Iniciar sesión</button>
    <p id="o">_______<img class="imgO" src="assets/imagesIcon/o.png">_______</p>
    <button class="buttonInicioGoogle" type="submit">Ingresa con Google<img id="logoGoogle" src="assets/imagesIcon/google.png"></button>
    <h3 id="question">¿Aún no tienes cuenta?</h3>
    <a id="linkRegister" href="#register">Registrate aquí</a>
    </form>`;
  return container;
}
