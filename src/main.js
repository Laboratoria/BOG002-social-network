// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { changeSettings } from './view/settingsPad.js';

myFunction();

// - - -  - - -  - - -  - - - LISTENERS

document.getElementById("settPic").addEventListener('click', changeSettings.picture)
document.getElementById("settName").addEventListener('click', changeSettings.name)
document.getElementById("settMail").addEventListener('click', changeSettings.email)
document.getElementById("settPassword").addEventListener('click', changeSettings.password)
