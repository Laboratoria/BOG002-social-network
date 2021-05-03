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
      .logo_sigOut{
        width: 10vw;
        // height: 5.5vh;
        // margin-left: 9vw;
        margin-top: 1.5vh;
      }
      .body_container{
        width: 100vw;
        height: 80vh;
        position: absolute;
        background-image: url(assets/imagesIcon/texturamobile.png);
        background-repeat: no-repeat;
        background-size: 77% 100%;
        background-position: right;
        margin: auto 0;
      }
      .mobile_nav{
        // margin-top: 80vh;
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
        // height: 5.5vh;
        // margin:12vw;
        // margin-top: 2.2vh;
      }
      .desk_nav{
        display: none;
      }
      .list{
        display: flex;
        align-items: center;
      }

      .body_container{
        background-image: url(assets/imagesIcon/texturamobile.png);
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
    <a href=""><img class="logo_sigOut" src="assets/imagesIcon/CloseWhiteV.png"></a>
    </header>
    <section class="body_container">
    </section>
    <footer class="mobile_nav">
    <li class="list"><a href=""><img class="logo_mobileNav" src="assets/imagesIcon/HomeWhiteV.png"></a></li>
    <li class="list"><a href=""><img class="logo_mobileNav" src="assets/imagesIcon/EditWhiteV.png"></a></li>
    <li class="list"><a href=""><img class="logo_mobileNav" src="assets/imagesIcon/UserWhiteV.png"></a></li>
    <footer/>
`;

class MobileMenu extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('mobile-menu', MobileMenu);