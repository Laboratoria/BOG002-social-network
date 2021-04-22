// Este es el punto de entrada de tu aplicacion


// document.querySelector('.formHome').addEventListener('submit', userRegistration);

// document.querySelector('.buttonVisibilityHome').addEventListener('click', () => {
//   const changeType = document.getElementById('userPassword');
//   if (changeType.type === 'password') {
//     changeType.type = 'text';
//     document.getElementById('visibilityHome').style.display = 'block';
//     document.getElementById('noVisibilityHome').style.display = 'none';
//   } else {
//     changeType.type = 'password';
//     document.getElementById('visibilityHome').style.display = 'none';
//     document.getElementById('noVisibilityHome').style.display = 'block';
//   }
// });

// function changePages() {
//   const inicioHome = document.getElementById('linkRegister');
//   inicioHome.onclick = () => {
//     document.querySelector('.divSignIn').style.display = 'none';
//     document.querySelector('.divFormRegister').style.display = 'block';
//     document.querySelector('.imgLogo').style.display = 'block';
//     document.querySelector('.imgTrama').style.display = 'block';
//   };
// }

// changePages();

export function renderFormRegister($newDiv){
  const container = `
  <h3 class="titleForm">Formulario Registro</h3>
  <form class="formRegister" id="formRegister"autocomplete="off">
  <img class="imgIcon" src="assets/imagesIcon/UserGray.png" />
  <input class="inputNameRegister" placeholder="Nombre Completo" type="text" id="userName" minlength="7" pattern="[A-Z a-z]{1,30}" required></input><br>
  <img class="imgIcon" src="assets/imagesIcon/atGray.png" />
  <input class="inputEmailRegister" placeholder="Correo electrónico" type="email" id="userEmail"
    required></input><br>
  <div class="popupEmail" style="display: none;"><p></p></div> 
  <img class="imgIcon" src="assets/imagesIcon/lockedGray.png" />
  <input class="inputPasswordRegister" placeholder="Contraseña" type="password" id="userPassword" minlength="7" required></input>
  <div class="popupPassword" style="display: none;"><p></p></div> 
  <button class="buttonVisibility" type="button">
    <img class="imgVisibility" id="noVisibility" src="assets/imagesIcon/NoVisibility.png" style="display:block;" />
    <img class="imgVisibility" id="visibility" src="assets/imagesIcon/ver.png" style="display:none;"/>
  </button><br>
  <br>
  <button class="buttonEnvioRegistro" type="submit">Registrarme</button>
  </form>`
  $newDiv.innerHTML += container;
}


