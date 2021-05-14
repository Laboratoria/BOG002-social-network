import { Menu } from '../controls/renderViews.js';
import { editPost } from '../firestore/firestoreData.js';

export function editPostCard(postID, postuser, location, description, likes) {
    const mainContainer = document.querySelector('.body_container');
    Menu(mainContainer);
    document.querySelector('.bigContainer').appendChild(mainContainer);
    // const container = document.querySelector('.body_container').innerHTML = "";
    const card = 
    `<post-card src="assets/imagesIcon/ImageGalleryBlue.png" srcimgProfile="assets/imagesIcon/EditwhiteV.png" >
    <span slot="headerPostTitle">Editar post</span>
    <img slot="ubicationPostBlue" src="assets/imagesIcon/UbicationBlueC.png" class="IconsPost"/>
    <input slot="locationPost" class="ubication" id="ubicationEdit" value="${location}"></input>
    <span slot="nameUserPost">${postuser}</span>
    <textarea slot="description" class="textAreapublic" id="textAreaPublicEdit" >${description}</textarea>
    <p slot="label">Editar Imagen</p>
    <span slot="footer_right_element"><button class="post_button">Guardar</button></span>
    </post-card>`;
    mainContainer.innerHTML += card; 
    document.querySelector(".post_button").addEventListener('click', ()=>{
        const locationEdit = document.querySelector("#ubicationEdit").value;
        const descriptionEdit = document.querySelector("#textAreaPublicEdit").value;
        editPost(postID, postuser, locationEdit, descriptionEdit);
    });
    
}