import { myFunction } from './lib/index.js';
import { changeSettings } from './view/settingsPad.js';

const inicio = document.getElementById('inicio')
const muro = document.getElementById('muro')
const settings = document.getElementById('settings')

/*document.getElementById('settPic').addEventListener('click', changeSettings.picture);
document.getElementById('settName').addEventListener('click', changeSettings.name);
document.getElementById('settMail').addEventListener('click', changeSettings.email);
document.getElementById('settPassword').addEventListener('click', changeSettings.password);*/
document.getElementById('btn-sing-in').addEventListener('click',() => Continue(muro));
document.getElementById('icon-settings').addEventListener('click',() => Continue(settings));
document.getElementById('icon-home').addEventListener('click',() => Continue(muro));

function Hide(){
    inicio.style.display = 'none'
    muro.style.display = 'none'
    settings.style.display = 'none'
}

function Continue(section){
    Hide()
    section.style.display = 'block'
}


//Crear cuenta con Google

//Crear cuenta con Facebook

//Iniciar sesión con Google
const googleBtn = document.querySelector('#googleLogin')

googleBtn.addEventListener('click',e =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            console.log('google sign in ')
            signupForm.reset();
        })
        .catch(err => {
            console.log(err)
        })
})

//Iniciar sesión con Facebook

const fbBtn = document.querySelector('#facebookLogin')

fbBtn.addEventListener('click',e =>{
    e.preventDefault();
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            console.log('facebook sign in ')
            signupForm.reset();
        })
        .catch(err => {
            console.log(err)
        })
})