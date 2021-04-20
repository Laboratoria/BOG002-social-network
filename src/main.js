import { myFunction } from './lib/index.js';
import { changeSettings } from './view/settingsPad.js';

let inicio = document.getElementById('inicio')
let muro = document.getElementById('muro')
let settings = document.getElementById('settings')

/*document.getElementById('settPic').addEventListener('click', changeSettings.picture);
document.getElementById('settName').addEventListener('click', changeSettings.name);
document.getElementById('settMail').addEventListener('click', changeSettings.email);
document.getElementById('settPassword').addEventListener('click', changeSettings.password);*/
document.getElementById('btnSing-in').addEventListener('click',() => Continue(muro));
document.getElementById('icon-settings').addEventListener('click',() => Continue(settings));


function Hide(){
    inicio.style.display = 'none'
    muro.style.display = 'none'
    settings.style.display = 'none'
}

function Continue(section){
    Hide()
    section.style.display = 'block'
}

