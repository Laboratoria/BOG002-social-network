import { renderSignOut } from '../views/signOut.js';

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
  position:absolute;
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

}
</style>

<nav class="desk_nav">
<img class="logo_desk" src="assets/imagesIcon/Complete_logo.png">
<li ><a id="homeP" href="#home"><img class="logo_Nav" id="home_btn" src="assets/imagesIcon/HomeWhiteV.png">Home</a></li>
<li ><a id="postP" href="#post"><img class="logo_Nav" id="post_btn" src="assets/imagesIcon/EditWhiteV.png">Publicar</a></li>
<li><a href="#profile" id="profileP"><img class="logo_Nav" id="profile_btn" src="assets/imagesIcon/UserWhiteV.png">Mi perfil</a></li>
<li ><a id="logOutP"><img class="logo_Nav" id="exit_btn" src="assets/imagesIcon/CloseWhiteV.png">Cerrar sesión</a></li>
</nav>

`;

class DesktopMenu extends HTMLElement {
  constructor() {
    super();
    this.hash = window.location.hash.substring(1);
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  changeHash() {
    const imgHome = this.shadowRoot.getElementById('home_btn');
    const imgPost = this.shadowRoot.getElementById('post_btn');
    const imgProfile = this.shadowRoot.getElementById('profile_btn');

    switch (this.hash) {
      case 'home':
        imgHome.setAttribute('src', 'assets/imagesIcon/HomeWhiteC.png');
        break;
      case 'post':
        imgPost.setAttribute('src', 'assets/imagesIcon/EditWhiteC.png')
          break;
      case 'profile':
        imgProfile.setAttribute('src', 'assets/imagesIcon/UserWhiteC.png')
        break;
      default:
        // renderError($containerGeneral);
        break;
    } 
  }

  connectedCallback(){
    this.changeHash();
    this.shadowRoot.getElementById('logOutP').addEventListener('click', () => {
      const imgHome = this.shadowRoot.getElementById('home_btn');
      const imgPost = this.shadowRoot.getElementById('post_btn');
      const imgProfile = this.shadowRoot.getElementById('profile_btn');
      const imgExit = this.shadowRoot.getElementById('exit_btn');
      imgHome.setAttribute('src', 'assets/imagesIcon/HomeWhiteV.png');
      imgPost.setAttribute('src', 'assets/imagesIcon/EditWhiteV.png');
      imgProfile.setAttribute('src', 'assets/imagesIcon/UserWhiteV.png');
      imgExit.setAttribute('src', 'assets/imagesIcon/CloseWhiteC.png'); 
      // this.shadowRoot.getElementById('homeP').attr('disabled',true);
     // this.shadowRoot.getElementById('homeP').onclick = function() {return false;};​ 
      this.shadowRoot.getElementById('homeP').removeAttribute("href");
      this.shadowRoot.getElementById('postP').removeAttribute("href");
      this.shadowRoot.getElementById('profileP').removeAttribute("href");
    
      renderSignOut();
    }, {once: true});
  }
}

window.customElements.define('desktop-menu', DesktopMenu);
