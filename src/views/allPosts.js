import { deletePost, updateLikes } from '../firestore/firestoreData.js';
import { editPostCard } from '../views/editPost.js';

export function AllPostsCard(containerPosts, docID, username, location, description, likes, likeable, ownPost){
    let src, srcLike;
    ownPost ? src="assets/imagesIcon/MoreWhite.png" : src="";
    likeable == true ? srcLike = "assets/imagesIcon/LikeBlueV.png" : srcLike = "assets/imagesIcon/LikeBlueC.png";
    const postCard = `
    <post-card src="${srcLike}" srcimgProfile="assets/imagesIcon/UserWhiteC.png">
    <span slot="headerPostTitle">${username}</span>
    <a slot="moreButton" id="moreImageButton"><img class="moreImage" src="${src}"></a>
    <img slot="userIconPost" src="" class="IconsPost"/>
    <span slot="locationPost" id="locationPost">${location}</span>
    <span slot="description">${description}</span>
    <span slot="footer_right_element">${likes} Likes</span>
    <span slot="likeable">${likeable}</span>
    </post-card>`;
    containerPosts.innerHTML += postCard;

    const nodes = document.querySelectorAll('post-card');
    // console.log(nodes);
    const last = nodes[nodes.length- 1];
    last.dataset.id = docID;
    last.dataset.ownPost = ownPost;
    document.querySelectorAll('#moreImageButton').forEach(element => {
        element.addEventListener("click", (event) => {
            const editPost = event.target.closest('post-card').dataset.ownPost; 
            if (editPost == "true"){
                const eventTarget = event.target.closest('post-card');
                const postID = event.target.closest('post-card').dataset.id;
                const popUp = eventTarget.shadowRoot.querySelector('.editDeletePopUp');
                popUp.style.display = 'block';
                showPopUp(eventTarget, postID);
            } 
        });
    });
    nodes.forEach(element => {  
        console.log(element);  
        const likesButton = element.shadowRoot.querySelector('.leftDownButton');
        likesButton.addEventListener("click", () => {
            const nodesSelected = element.querySelectorAll('span');
            const likes = nodesSelected[3].textContent;
            let likeableNew = nodesSelected[4].textContent;
            const postSelected  = element.dataset.id;
            let parsedLikes = parseInt((likes.slice(0, -6)), 10);
            if (likeableNew == 'true'){
                parsedLikes++;
                likeableNew = false;
            }else{
                parsedLikes--;
                likeableNew = true;
            }
            updateLikes(postSelected, parsedLikes, likeableNew);
        });
    });
}

function showPopUp(eventTarget, postID){
        const nodes = eventTarget.querySelectorAll('span');
        const postuser = nodes[0].textContent;
        const location = nodes[1].textContent;
        const description = nodes[2].textContent;
        const editButton = eventTarget.shadowRoot.getElementById('editButton');
        const deleteButton = eventTarget.shadowRoot.getElementById('deleteButton');
        editButton.addEventListener('click', () => {
        editPostCard(postID, postuser, location, description);
    });

    deleteButton.addEventListener('click', () => {
        console.log(postID);
        deletePost(postID);  
    });
}