import { deletePost, updateLikes } from '../firestore/firestoreData.js';
import { editPostCard } from '../views/editPost.js';

export function AllPostsCard(containerPosts, docID, username, location, description, likes, permise, ownPost, imageLike){
    let src, srcLike;
    ownPost ? src="assets/imagesIcon/MoreWhite.png" : src="";
    const postCard = `
    <post-card  src="assets/imagesIcon/LikeBlueV.png" srcimgProfile="assets/imagesIcon/UserWhiteC.png">
    <span slot="headerPostTitle">${username}</span>
    <a slot="moreButton" id="moreImageButton"><img class="moreImage" src="${src}"></a>
    <img slot="userIconPost" src="" class="IconsPost"/>
    <span slot="locationPost" id="locationPost">${location}</span>
    <span slot="description">${description}</span>
    <span slot="footer_right_element">${likes} Likes</span>
    </post-card>`;
    containerPosts.innerHTML += postCard;
    const nodes = document.querySelectorAll('post-card');
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
    let containerImg ;
    permise.push(true);
    imageLike.push('assets/imagesIcon/LikeBlueV.png');
    nodes.forEach((element, index) => {  
        containerImg =` <img id="imgLikeChange${index}" class="imagesLeft" src="assets/imagesIcon/LikeBlueV.png" slot="image_button"/>`;
        element.shadowRoot.querySelector('.spaceImgLike').innerHTML = containerImg;
        element.shadowRoot.getElementById('imgLikeChange'+index).setAttribute('src', imageLike[index]);
        const likesButton = element.shadowRoot.querySelector('.leftDownButton');
        likesButton.addEventListener("click", function () {
            const nodesSelected = element.querySelectorAll('span');
            const likes = nodesSelected[3].textContent;
            const postSelected  = element.dataset.id;
            let parsedLikes = parseInt((likes.slice(0, -6)), 10);
            if (permise[index] == true){
                parsedLikes++;
                permise[index] = false;
                imageLike[index] = "assets/imagesIcon/LikeBlueC.png";
                
            }else{
                parsedLikes--;
                permise[index] = true;
                imageLike[index] = "assets/imagesIcon/LikeBlueV.png";
            }
            updateLikes(postSelected, parsedLikes);
        }); 
    });
    
    permise.pop();
    console.log(nodes.length);
    //imageLike = imageLike.slice(0,5);
    console.log(imageLike)
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