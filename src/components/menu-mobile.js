import { renderSignOut } from '../views/signOut.js';

const template = document.createElement('template');
template.innerHTML = `

    <style>
      .header_home{
        width: 100vw;
        height: 10.5vh;
        background-image: url(assets/imagesIcon/HomeMobile.png);
        background-size: 100% 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        // padding: 0.5rem;
        margin:0;
      }
      .logo_mobile{
        width: 11vw;
        // height:9vh ;
        // padding-left: 5vw;
        // padding-top: 1.3vh;
      }
      .logo_name{
        // width: 51vw;
        height: 5vh;
        // margin-left: 8vw;
        background-color: rgba(255, 255, 255, 0.438);
        padding: 0.5vh 5vw 1vh 5vw;
        // margin-top: 2.3vh;
        border-radius: 30px;
      }
      .logo_signOut{
        width: 10vw;
        // height: 5.5vh;
        // margin-left: 9vw;
        margin-top: 1.5vh;
      }
      
      .mobile_nav{
        margin: auto 0;
        width: 100vw;
        height: 10vh;
        background-image: url(assets/imagesIcon/HomeMobile.png);
        background-size: 100% 100%;
        display: flex;
        list-style: none;
        justify-content: space-around;
        position: fixed;
        left: 0;
        bottom: 0;
      }
      .logo_mobileNav{
        width: 8vw;
      }
      .desk_nav{
        display: none;
      }
      .list{
        display: flex;
        align-items: center;
      }

      @media (min-width: 768px) {
        .logo_sigOut {
            width: 6vw;    
        }    
        logo_mobile {
            width: 8.5vw;
        }
        .logo_mobileNav {
            width: 6vw;
        }        
    </style>


    <header class="header_home">
    <img class="logo_mobile" src="assets/imagesIcon/Only_logo.png">
    <img class="logo_name" src="assets/imagesIcon/Title_nomadas.png">
    <a id="signOutContainer"><img class="logo_signOut" src="assets/imagesIcon/CloseWhiteV.png"></a>
    </header>
    <footer class="mobile_nav">
    <li class="list"><a href="#home" id="homeP"><img class="logo_mobileNav" id="imgHome" src="assets/imagesIcon/HomeWhiteV.png"></a></li>
    <li class="list"><a href="#post" id="postP"><img class="logo_mobileNav" id="imgPost" src="assets/imagesIcon/EditWhiteV.png"></a></li>
    <li class="list"><a href="#profile" id="profileP"><img class="logo_mobileNav" id="imgProfile" src="assets/imagesIcon/UserWhiteV.png"></a></li>
    </footer>
`;

class MobileMenu extends HTMLElement {
  constructor() {
    super();
    this.hash = window.location.hash.substring(1);
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  changeHash() {
    const imgHome = this.shadowRoot.getElementById('imgHome');
    const imgPost = this.shadowRoot.getElementById('imgPost');
    const imgProfile = this.shadowRoot.getElementById('imgProfile');

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
    this.shadowRoot.getElementById('signOutContainer').addEventListener('click', () => {
      const imgHome = this.shadowRoot.getElementById('imgHome');
      const imgPost = this.shadowRoot.getElementById('imgPost');
      const imgProfile = this.shadowRoot.getElementById('imgProfile');
      const imgExit = this.shadowRoot.querySelector('.logo_signOut');
      imgHome.setAttribute('src', 'assets/imagesIcon/HomeWhiteV.png');
      imgPost.setAttribute('src', 'assets/imagesIcon/EditWhiteV.png');
      imgProfile.setAttribute('src', 'assets/imagesIcon/UserWhiteV.png');
      imgExit.setAttribute('src', 'assets/imagesIcon/CloseWhiteC.png'); 
      this.shadowRoot.getElementById('homeP').removeAttribute("href");
      this.shadowRoot.getElementById('postP').removeAttribute("href");
      this.shadowRoot.getElementById('profileP').removeAttribute("href"); 
      renderSignOut();
    }, {once: true});
  }

}

window.customElements.define('mobile-menu', MobileMenu);
