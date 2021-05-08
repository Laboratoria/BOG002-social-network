export function modalError(firebaseError) { 
    
//     const error = ()=>{
//     let html = `
//     <section class="container_modal" id="container_modal">
//     <div class="modal">
  
//       <p> Usuario registrado</p>
//       <button type="button" id="loginPpal" class="btn" value="login"> <a href="#/login">LOGIN</a></button>
//       <button type="button" class="btn" id="close">                   <a href="#/signUp">VOLVER</a></button>
  
//     </div>
  
//   </section>
//   ` 
//   return  html
// }


const container_modal = document.getElementById('container_modal');
const close = document.getElementById('close');

if ( firebaseError.code=="auth/email-already-in-use") {
    container_modal.classList.add('show'); 
}

close.addEventListener('click', () => {
    container_modal.classList.remove('show');
});
}
export function modalErrorLogin(firebaseError) { 
    
    const container_modal = document.getElementById('container_modal');
    const close = document.getElementById('close');
    
    if ( firebaseError.code=="auth/user-not-found") {
        container_modal.classList.add('show'); 
    }
    
    close.addEventListener('click', () => {
      container_modal.classList.remove('show');
    });
    }