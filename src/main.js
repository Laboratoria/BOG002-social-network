import { myFunction } from './lib/index.js';

myFunction();

const btnA = document.querySelector('btnSing-in');
const divB = document.getElementById('Login');
const divC = document.getElementById('New-account');

btnA.addEventListener('click', () => {
    if(divB.style.display === 'none'){
        divC.style.display = 'block';
    } else {
        divB.style.display = 'none';
    }
});
