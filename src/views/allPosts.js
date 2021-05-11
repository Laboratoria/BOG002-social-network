export function AllPostsCard(username, location, description, likes, ownPost){
    const containerPosts = document.querySelector('.containerPosts');
    let src;
    ownPost ? src="assets/imagesIcon/MoreWhite.png" : src="";
    const postCard = `
    <post-card src="assets/imagesIcon/LikeBlueV.png" srcimgProfile="assets/imagesIcon/UserWhiteC.png">
    <span slot="headerPostTitle">${username}</span>
    <img slot="moreButton" src="${src}" id="moreImageButton"/>
    <span slot="locationPost">${location}</span>
    <span slot="description">${description}</span>
    <span slot="footer_right_element">${likes} Likes</span>
    </post-card>`;
    containerPosts.innerHTML += postCard;
}