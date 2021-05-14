import { deletePost } from '../firestore/firestoreData.js';
import { editPostCard } from '../views/editPost.js';
export function AllPostsCard(containerPosts, docID, username, location, description, likes, ownPost){
    // const containerPosts = document.querySelector('.containerPosts');
    // console.log("entra all post card");
    let src;
    ownPost ? src="assets/imagesIcon/MoreWhite.png" : src="";
    const postCard = `
    <post-card src="assets/imagesIcon/LikeBlueV.png" srcimgProfile="assets/imagesIcon/UserWhiteC.png">
    <span slot="headerPostTitle">${username}</span>
    <a slot="moreButton" id="moreImageButton"><img class="moreImage" src="${src}"></a>
    <img slot="userIconPost" src="" class="IconsPost"/>
    <span slot="locationPost" id="locationPost">${location}</span>
    <span slot="description">${description}</span>
    <span slot="footer_right_element">${likes} Likes</span>
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
}

function showPopUp(eventTarget, postID){
    const nodes = eventTarget.querySelectorAll('span');
    const postuser = nodes[0].textContent;
    const location = nodes[1].textContent;
    const description = nodes[2].textContent;
    const likes = nodes[3].textContent;
    const editButton = eventTarget.shadowRoot.getElementById('editButton');
    const deleteButton = eventTarget.shadowRoot.getElementById('deleteButton');
    editButton.addEventListener('click', () => {
        editPostCard(postID, postuser, location, description, likes);
        // window.location.hash = "#edit-post";
        console.log("click en edit");
    });

    deleteButton.addEventListener('click', () => {
        console.log(postID);
        deletePost(postID);  
        // setTimeout(()=>{ location.reload(); }, 3000);
    });
}