export function AllPostsCard(username, location, description, likes){
    const postCard = `
    <post-card src="assets/imagesIcon/LikeBlueV.png" srcimgProfile="assets/imagesIcon/UserWhiteC.png">
    <span slot="headerPostTitle">${username}</span>
    <span slot="locationPost">${location}</span>
    <span slot="description">${description}</span>
    <span slot="footer_right_element">${likes} Likes</span>
    </post-card>`;
    const containerPosts = document.createElement('div');
    containerPosts.innerHTML += postCard;
    document.querySelector('.body_container').appendChild(containerPosts);
}