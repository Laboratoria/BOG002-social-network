export function createPostCard() {
    const container = 
    `<post-card src="assets/imagesIcon/ImageGalleryBlue.png" srcimgProfile="assets/imagesIcon/EditwhiteV.png" >
    <span slot="headerPostTitle">Crear post</span>
    <p slot="label">Agregar Imagen</p>
    <span slot="footer_right_element"><button class="post_button">Publicar</button></span>
    </post-card>`;
    return container;
  }