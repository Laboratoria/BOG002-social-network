export function renderFormLogin($newDiv){
  
  const container = 
  `<a>
  <form class="formRegister" id="formRegister"autocomplete="off">
    <img class="imgIcon" src="assets/imagesIcon/atGray.png" />
    <input class="inputEmailHome" placeholder="Correo electrónico" type="email" id="userEmailHome" required></input><br>
    <img class="imgIcon" src="assets/imagesIcon/lockedGray.png" />
    <input class="inputPasswordHome" placeholder="Contraseña" type="password" id="userPasswordHome" minlength="7" required></input>
    <button class="buttonVisibilityHome" type="button">
        <img class="imgVisibilityHome" id="noVisibilityHome" src="assets/imagesIcon/NoVisibility.png" style="display:block;" />
        <img class="imgVisibilityHome" id="visibilityHome" src="assets/imagesIcon/ver.png" style="display:none;" />
    </button>
    <button class="buttonInicioSesionHome" type="submit">Iniciar sesión</button>
    <p id="o">_______<img class="imgO" src="assets/imagesIcon/o.png">_______</p>
    <button class="buttonInicioGoogle" type="submit">Ingresa con Google<img id="logoGoogle" src="assets/imagesIcon/google.png"></button>
    <h3 id="question">¿Aún no tienes cuenta?</h3>
    <a id="linkRegister" href="#LogInToRegister">Registrate aquí</a>
    </form>
    </a>`;  
  $newDiv.innerHTML += container;
}
//