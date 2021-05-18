const template = document.createElement('template');
template.innerHTML = `

<style>
.post-card{
    background: #fffbdb;
    width: 90vw;
    height: 38vh;
    margin-left:5vw;
    margin-top: 10vh;
    border-radius: 5px; 
    font-family:'Roboto', sans-serif;
    font-weight: 500;
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
    margin: 0.5rem;
    position:absolute;
    font-family:'Roboto', sans-serif;
    font-weight: 500;
    text-transform: capitalize;
}
::slotted(input){
    border: #FFC300 1px solid;
    border-radius:20px;
    border-radius: 20px;
    width: 40vw;
    height: 4.5vh;
    margin: 0.5rem;
    position:absolute;
    font-family:'Roboto', sans-serif;
    font-weight: 550;
    text-transform: capitalize;
    background: #EAE6CA; 
}
button.buttonPopUp:hover{
    background: #BA8E01;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
}
.ubicationLeft{
    background-size: 20%;
    width: 9vw;
    padding:2vh 0 0 1vw;
    flex-wrap:nowrap;
    margin-bottom:0;
    margin-top:0;
}
.public{
    border: #FFC300 1px solid;
    border-radius:10px;
    width: 75vw;
    height: 10vh;
    margin:2vh 0 1vh 7vw;
    writing-mode:horizontal-tb;
    font-family:'Roboto', sans-serif;
    font-weight: 550;
    color:#424348;
    background:#ffffffc9;  
}
.textAreapublic{
    border: #FFC300 1px solid;
    border-radius:10px;
    width: 75vw;
    height: 10vh;
    writing-mode:horizontal-tb;
    font-family:'Roboto', sans-serif;
    font-weight: 600;
    color:#424348;
    background:#ffffffc9;
}
::slotted(textarea){
    border: #FFC300 1px solid;
    border-radius: 5px;
    width: 75vw;
    height: 10vh;
    font-weight: 600;
    writing-mode:horizontal-tb;
    font-family:'Roboto', sans-serif;
    color:#424348;
    margin-left:0;
    background: #EAE6CA;
}
.footer-card{
    border-bottom-left-radius:5px;
    border-bottom-right-radius:5px;
    background:#FFFFFF;
    display: flex;
    justify-content: space-between;
    margin:3vh 0 0 0 ;
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
::slotted(p) {
    text-align: left;
    position:absolute;
    margin-left:12vw;
    color: #0C244F;
}
::slotted(img) {
    background-size: 20%;
    width: 9vw;
    aling-self:flex-end;
}
::slotted(a) {
    background-size: 20%;
    width: 9vw;
    aling-self:flex-end;
}
::slotted(button) {
    background-color: #0C244F;
    border-radius: 10px;
    color: #FFFFFF;
    width: 9vw;
}
.editDeletePopUp{
    position:absolute;
    display:inline-block;
    width:50vw;
    height:17vh;
    background:#E0AB00;
    color:white;
    align-items:space-between;
    flex-direction: row;
    right:1em;
    border-radius:10px;
}  
.buttonPopUp{
    width:25vw;
    height:5vh;
    text-decoration:none;
    background:none;
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom-style:solid;
    border-bottom-color:white;
    color:white;
    padding-bottom:0;
    margin-top:2vh;
    text-align: left;
    margin-bottom:2vh;
    font-family:'Roboto', sans-serif;
    font-weight: 600;
}
.imgPopUp{
    width:7vw;
    height:4vh;
    display:flex;
    margin-left:4vw;
    flex-direction:column;
    margin-top:3vh;
}
#imgClosePopUp{
    width:4vw;
    height:3vh;
    display:flex;
    justify-content: flex-end;
    right:0;
    position:absolute;
    padding: 1.2vh 2vw 0 0;
}
.popup_btn_edit{
    width:26vw;
    height:12vh;
    position:absolute;
    display:flex;
    float:right;
    top:1vh;
    margin-top:1vh;
    flex-direction:column;
    margin-left:13vw;
}
.location-container{
    width: 80vw;
    height: 13vh; 
    display: block;
    margin:0;
    padding:0;
}
.location-box{
    margin-left:6vw;
    white-space:no-wrap;
    margin-top:2vh;
}
.leftDownButton{
    border:none;
    border-radius:10px;
}
button.leftDownButton:hover{
    background: rgba(8, 0, 117, 0.1);
}    
@media (min-width: 1200px) {
    .post-card{
        width: 55vw;
        margin-left:33vw;
        margin-top: 12vh;
        font-family:'Roboto', sans-serif;
        font-weight: 600;
        background: #fffbdb;
        margin-left:5vw;
        margin-top: 4vh;
        border-radius: 5px; 
        flex-direction: column;
        aling-items: space-around;
        box-shadow: 1vh 0.2vw 1vh 0vw rgba(0,0,0,0.3);
    }
    .header-card{
        display: flex;
        justify-content: space-between;
        background: #FFC300;
        margin:0;
        height:5vh;
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
        right:0;
    }
    .name_user{
        text-align: left;
        position:absolute;
        margin-left:12vw;
        margin-left:4vw;
    } 
    ::slotted(p) {
        text-align: left;
        position:absolute;
        margin-left:12vw;
        margin-left:4vw;
    }   
    ::slotted(img) {
        background-size: 20%;
        width: 3.5vw;
        aling-self:flex-end;
    } 
    ::slotted(button) {
        background-size: 20%;
        width: 3.5vw;
        aling-self:flex-end;
    } 
    .ubication-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        margin-left: 1.5rem;
        text-transform: capitalize;
        font-family:'Roboto', sans-serif;
        font-weight: 500;
    }  
    
    .ubicationLeft{
        background-size: 20%;
        width: 3vw;
        padding:3vh 0 0 10vw;
        flex-wrap:nowrap;
        margin-bottom:0;
        margin-top:0;
    }
    .public{
        border: #FFC300 1px solid;
        border-radius:10px;
        width: 35vw;
        height: 10vh;
        margin:3vh 0 2vh 10vw;
        background:#ffffffc9;
        font-weight: 600;
    }
    .textAreapublic{
        border: #FFC300 1px solid;
        border-radius:10px;
        width: 35vw;
        height: 10vh;
        background:#ffffffc9;
        font-weight: 600;
    }
    .footer-card{
        border-bottom-left-radius:5px;
        border-bottom-right-radius:5px;
        background:#FFFFFF;
        display: flex;
        justify-content: space-between;
        margin:0;
        height:5vh;
        border: #FFC300 1px solid;
        padding: 0.7em;
        align-items:center;
    }
    .name_like{
        text-align: left;
        position:absolute;
        margin-left:4vw;
        color: #0C244F;
    }   
    .conteo{
        color: #0C244F;
        font-family:'Roboto', sans-serif;
        font-weight: 600;
    }   
   @media (min-width: 1200px) {
        .post-card{
            width: 55vw;
            height: 51vh;
            margin-left:33vw;
            margin-top: 7vh;
            margin-bottom: 5vh;
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
            right:2vw;
        }
        .name_user{
            margin-left:4vw;
        }   
        .ubication{
            border-radius:20px;
            width: 20vw;
            height: 4.5vh;
            margin:0.5rem;
            background:#ffffffc9;
        }
        .ubicationLeft{
            width: 3vw;
            padding:3vh 0 0 0;
        }
        .public{
            border-radius:5px;
            width: 35vw;
            height: 10vh;
            margin:6vh 0 2vh 10vw;
            font-weight: 600;
        }
        .textAreapublic{
            border-radius:5px;
            width: 35vw;
            height: 10vh;
            font-weight: 600;
            background:#ffffffc9;
        }
        .footer-card{
            border-bottom-left-radius:5px;
            border-bottom-right-radius:5px;
            background:#FFFFFF;
            height:5vh;
            margin:7vh 0 0 0 ;
            padding: 0.7em;
        }
        .name_like{
            margin-left:4vw;
            color: #0C244F;
        } 
        .editDeletePopUp{
            width:20vw;
            height:19vh;
            right:10em;
            border-radius:10px;
        }  
        .buttonPopUp{
            width:10vw;
            height:5vh;
            padding-bottom:0;
            margin-top:2vh;
            margin-bottom:3vh;
            font-family:'Roboto', sans-serif;
            font-weight: 600;
        }
        .imgPopUp{
            width:2.5vw;
            height:5vh;
            margin-left:2vw;
            margin-top:3vh;
        }
        #imgClosePopUp{
            width:1vw;
            height:2.5vh;
            display:flex;
            right:0;
            padding: 1.2vh 1vw 0 0;
        }
        .popup_btn_edit{
            width:16vw;
            height:12vh;
            top:1vh;
            margin-top:2vh;
            margin-left:5.5vw;
        }
        ::slotted(textarea){
            border: #FFC300 1px solid;
            border-radius: 5px;
            width: 35vw;
            height: 10vh;
            font-weight: 600;
            writing-mode:horizontal-tb;
            font-family:'Roboto', sans-serif;
            font-weight: 600;
            color:#424348;
            margin-top:0;
        }
        ::slotted(input){
            border: #FFC300 1px solid;
            border-radius:20px;
            border-radius: 20px;
            width: 30vw;
            height: 4.5vh;
            margin: 0.5rem;
            position:absolute;
            font-family:'Roboto', sans-serif;
            font-weight: 600;
            text-transform: capitalize;
        }
        .location-container{
            width: 40vw;
            height: 13vh; 
            display: block;
            margin:0;
            padding:0;
        }
        .location-box{
            margin-left:10vw;
            white-space:no-wrap;
            margin-top:2vh;
            margin-button:2vh;
        }
    }    
    </style>

    <section class="post-card">
    <div class="header-card">
        <slot name="imgagePofile"><img class="imagesLeft" id="imgProfile"></slot>
        <slot name="headerPostTitle"></slot>
        <slot name="moreButton"><img class="imagesRight"></slot>
    </div>
    <div class="editDeletePopUp" style="display: none;">
        <img id="imgClosePopUp" src="assets/imagesIcon/close.png">
        <img class="imgPopUp" src="assets/imagesIcon/EditWhiteV.png"/>
        <img class="imgPopUp" src="assets/imagesIcon/removeWhite.png"/>
        <div class="popup_btn_edit">
        <button class="buttonPopUp" id="editButton">Editar</button>
        <button class="buttonPopUp" id="deleteButton">Eliminar</button>
        </div>
    </div>
    <div class="location-container">
        <div class="location-box">
        <slot name="userIconPost"><img class="imagesRight" src="assets/imagesIcon/UserBlueC.png"> </slot><slot name="nameUserPost"></slot> 
        </div>
        <div class="location-box">
            <slot name="ubicationPostBlue"><img class="ubicationLeft" src="assets/imagesIcon/UbicationYellowC.png"></slot><slot name="locationPost"><input class="ubication" id="ubication" type="text"/></slot>
        </div>
    </div>
    <div class="public"><slot name="description"><textarea class="textAreapublic" name="textarea" rows="10" cols="50" type="text"></textarea></slot></div>
    <div class="footer-card">
        <button class="leftDownButton"><slot name="image_button"><div class="spaceImgLike"><img class="imagesLeft" id="imageLeftDown"></div></slot></button>
        <slot name="label"><p class="name_like">Me gusta</p></slot>
        <slot name="footer_right_element"><p class="conteo">123 Likes</p></slot>
    </div>
    </section>
`;

class PostCard extends HTMLElement {
    constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    updateStyle(elem) {
    const srcImg = elem.getAttribute('src');
    this.shadowRoot.getElementById('imageLeftDown').setAttribute('src', srcImg);
    const srcImgProfile = elem.getAttribute('srcimgProfile');
    this.shadowRoot.getElementById('imgProfile').setAttribute('src', srcImgProfile);
    }

    static get observedAttributes() { return ['src', 'srcimgProfile']; }

    attributeChangedCallback(name, oldValue, newValue) {
        this.updateStyle(this);
    }

    connectedCallback(){
        const editDeletePopUp = this.shadowRoot.querySelector('.editDeletePopUp');
        this.shadowRoot.querySelector('#imgClosePopUp').addEventListener('click', () => {
            editDeletePopUp.style.display = 'none';
        });
    }
}

window.customElements.define('post-card', PostCard);
