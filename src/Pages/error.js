export function modalError(firebaseError) { 
    
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
    
    const login_modal = document.getElementById('login_modal');
    const close = document.getElementById('close-login');
    
    if ( firebaseError.code=="auth/user-not-found" || "auth/wrong-password") {
        login_modal.classList.add('show'); 
    }
    
    close.addEventListener('click', () => {
      login_modal.classList.remove('show');
    });
    }