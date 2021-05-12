import { deletePost } from '../firestore/firestoreData.js';
export function AllPostsCard(docID, username, location, description, likes, ownPost){
    const containerPosts = document.querySelector('.containerPosts');
    let src;
    ownPost ? src="assets/imagesIcon/MoreWhite.png" : src="";
    const postCard = `
    <post-card src="assets/imagesIcon/LikeBlueV.png" srcimgProfile="assets/imagesIcon/UserWhiteC.png">
    <span slot="headerPostTitle">${username}</span>
    <a slot="moreButton" id="moreImageButton"><img class="moreImage" src="${src}"></a>
    <img slot="userIconPost" src="" class="IconsPost"/>
    <span slot="locationPost">${location}</span>
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
            console.log(editPost);
            if (editPost == "true"){
                const postID = event.target.closest('post-card').dataset.id;
                showPopUp(postID);
            } 
        });
    });
}

function showPopUp(postID){
    const editDeletePost = document.createElement('div');
    document.querySelector('post-card').appendChild(editDeletePost);
    const divDeletePost = document.createElement('div');
    const divEditPost = document.createElement('div');
    const cancelEditDelete = document.createElement('button');
    editDeletePost.appendChild(divDeletePost);
    editDeletePost.appendChild(divEditPost);
    editDeletePost.appendChild(cancelEditDelete);
    const buttonDelete = document.createElement('button');
    const imageTrash = document.createElement('img');
    const buttonEdit = document.createElement('button');
    const imageEdit = document.createElement('img');
    divDeletePost.appendChild(buttonDelete);
    divDeletePost.appendChild(imageTrash);
    divEditPost.appendChild(buttonEdit);
    divEditPost.appendChild(imageEdit);
    buttonDelete.setAttribute('class', 'buttonDelete');
    imageTrash.setAttribute('class', imageTrash);
    buttonEdit.setAttribute('class', 'buttonEdit');
    imageEdit.setAttribute('class', imageEdit);
    imageTrash.setAttribute('src', 'assets/imagesIcon/removeWhite.png');
    imageEdit.setAttribute('src', 'assets/imagesIcon/EditWhiteV.png');

    cancelEditDelete.addEventListener('click', () => {
        document.querySelector('post-card').removeChild(editDeletePost);
    });
    
    buttonDelete.addEventListener('click',() => {
        deletePost(postID);  
        location.reload();
    });
    
    
}