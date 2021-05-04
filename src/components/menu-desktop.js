const template = document.createElement('template');
template.innerHTML = `

<style>
.desk_nav{
  margin-top: 0;
  width: 21vw;
  height: 100vh;
  background-image: url(assets/imagesIcon/HomeDesktop.png);
  background-size: 100% 100%;
  display: flex;
  list-style: none;
  align-items: space-between;
  flex-direction: column;
}
.desk_nav a{
  text-decoration: none;
  color: white;
  font-family:'Roboto', sans-serif;
  font-weight: 600;
  font-size: 1.05em;
  height: 15vh;
  align-items: space-around;
}
.logo_desk{
  width: 9vw;
  height:17vh;
  margin: 6.5vh 0 1vh 5.5vw;
}
.logo_Nav{
  width: 3vw;
  height:6vh;
  margin: 7vh 1.5vw 0 4vw ;
}
.body_container{
    width: 100vw;
    height: 100%;
    position: fixed;
    background-image: url(assets/imagesIcon/texturamobile.png);
    background-repeat: no-repeat;
    background-size: 32% 100%;
    background-position: right;
    justify-content: center;
    }
}
</style>
<section class="body_container">
<nav class="desk_nav">
<img class="logo_desk" src="assets/imagesIcon/Complete_logo.png">
<li><a href="#home"><img class="logo_Nav" id="home_btn" src="assets/imagesIcon/HomeWhiteV.png">Home</a></li>
<li><a href=""><img class="logo_Nav" id="post_btn" src="assets/imagesIcon/EditWhiteV.png">Publicar</a></li>
<li><a href=""><img class="logo_Nav" id="profile_btn" src="assets/imagesIcon/UserWhiteV.png">Mi perfil</a></li>
<li><a href=""><img class="logo_Nav" id="exit_btn" src="assets/imagesIcon/CloseWhiteV.png">Cerrar sesión</a></li>
</nav>
</section>
`;

class DesktopMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  // connectedCallback(){
  //     this.shadowRoot.getElementbyId("home_btn").addEventListener("click",  )
  // }
}

window.customElements.define('desktop-menu', DesktopMenu);
