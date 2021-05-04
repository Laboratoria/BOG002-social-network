const template = document.createElement('template');
template.innerHTML = `

    <style>
    .post-card{
        background: #fffbdb;
        width: 90vw;
        height: 32vh;
        position: fixed;
        z-index 100;
        margin-left:5vw;
        margin-top: 4vh;
        border-radius: 5px; 
        font-family:'Roboto', sans-serif;
        font-weight: 550;
        flex-direction: column;
        aling-items: space-around;
        box-shadow: 1vh 0.2vw 1vh 0vw rgba(0,0,0,0.3);
    }
    .header-card{
        display: flex;
        justify-content: space-between;
        background: #FFC300;
        margin:0;
        height:3vh;
        border-top-left-radius:5px;
        border-top-right-radius:5px;
        color: #FFFFFF;
        padding: 0.7em;
        display: flex;
        align-items:center;
        text-align: left;
        flex-wrap:nowrap;
    }
    .imagesLeft{
        background-size: 20%;
        width: 9vw;
        aling-self:flex-start;
        }
    .imagesRight{
        background-size: 20%;
        width: 9vw;
        aling-self:flex-end;
    }
    .name_user{
        text-align: left;
        position:absolute;
        margin-left:12vw;
    }   
    .ubication{
        border: #FFC300 1px solid;
        border-radius:20px;
        width: 45vw;
        height: 3vh;
        margin:3vh 0 2vh 1.5vw;
        position:absolute;
    }
    .ubicationLeft{
        background-size: 20%;
        width: 9vw;
        padding:2vh 0 0 6vw;
        flex-wrap:nowrap;
        margin-bottom:0;
        margin-top:0;
    }
    .public{
        border: #FFC300 1px solid;
        border-radius:10px;
        width: 75vw;
        height: 10vh;
        margin:1vh 0 2vh 7vw;
    }
    .footer-card{
        border-bottom-left-radius:5px;
        border-bottom-right-radius:5px;
        background:#FFFFFF;
        display: flex;
        justify-content: space-between;
        margin:0;
        height:3.5vh;
        border: #FFC300 1px solid;
        padding: 0.7em;
        align-items:center;
    }
    .name_like{
        text-align: left;
        position:absolute;
        margin-left:12vw;
        color: #0C244F;
    }   
    .conteo{
        color: #0C244F;
    }   

    @media (min-width: 1200px) {
        .post-card{
            width: 55vw;
            height: 40vh;
            margin-left:33vw;
            margin-top: 12vh;
            border-radius: 5px; 
            font-family:'Roboto', sans-serif;
            font-weight: 600;
            box-shadow: 1vh 0.5vw 2vh 0 rgba(0,0,0,0.5);
        }
        .header-card{
            margin:0;
            height:5vh;
            border-top-left-radius:5px;
            border-top-right-radius:5px;
            padding: 0.7em;
        }
        .imagesLeft{
            background-size: 20%;
            width: 3vw;
            }
        .imagesRight{
            background-size: 20%;
            width: 3vw;
        }
        .name_user{
            margin-left:4vw;
        }   
        .ubication{
            border-radius:20px;
            width: 20vw;
            height: 4.5vh;
            margin:4vh 0 2vh 1vw;
        }
        .ubicationLeft{
            width: 3vw;
            padding:3vh 0 0 10vw;
        }
        .public{
            border-radius:5px;
            width: 35vw;
            height: 10vh;
            margin:1vh 0 2vh 10vw;
        }
        .footer-card{
            border-bottom-left-radius:5px;
            border-bottom-right-radius:5px;
            background:#FFFFFF;
            height:5vh;
            padding: 0.7em;
        }
        .name_like{
            margin-left:4vw;
            color: #0C244F;
        }   
    }    
    
    </style>


    <section class="post-card">
    <div class="header-card">
        <img class="imagesLeft"src="assets/imagesIcon/UserWhiteC.png">
        <p class="name_user">'Nombre Usuario'<p>
        <img class="imagesRight"src="assets/imagesIcon/MoreWhite.png">
    </div>
    <img class="ubicationLeft"src="assets/imagesIcon/UbicationYellowC.png"><input class="ubication" type="text">
    <input class="public" type="text">
    <div class="footer-card">
        <img class="imagesLeft"src="assets/imagesIcon/LikeBlueV.png">
        <p class="name_like">Me gusta</p>
        <p class="conteo">123 Likes</p>
    </div>

    </section>
`;

class PostCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('post-card', PostCard);
