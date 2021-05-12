export function createPostCard(name) {
    const container = 
    `<post-card src="assets/imagesIcon/ImageGalleryBlue.png" srcimgProfile="assets/imagesIcon/EditwhiteV.png" >
    <span slot="headerPostTitle">Crear post</span>
    <img slot="ubicationPostBlue" src="assets/imagesIcon/UbicationBlueC.png" class="IconsPost"/>
    <span slot="nameUserPost">${name}</span>
    <p slot="label">Agregar Imagen</p>
    <span slot="footer_right_element"><button class="post_button">Publicar</button></span>
    </post-card>`;
    return container;
  }