import { LogOut } from '../controls/LogIn.js'

export function renderSignOut() {
   const containerOut= document.createElement('div');
   containerOut.setAttribute("id", "signOut");
   containerOut.className='popUpSignOut';
   const messageOut = document.createElement('p');
   messageOut.textContent = '¿Deseas Cerrar Sesión?';
   const accept = document.createElement('button');
   accept.textContent = 'Aceptar';
   accept.className='buttonOut';
   const cancel = document.createElement('button');
   cancel.textContent = 'Cancelar';
   cancel.className='buttonOut';
   containerOut.insertAdjacentElement('afterbegin', messageOut);
   containerOut.insertAdjacentElement('beforeend', accept);
   containerOut.insertAdjacentElement('beforeend', cancel);
   document.querySelector('.bigContainer').appendChild(containerOut);
   document.querySelector('.bigContainer').style.backgroundColor = 'rgba(0,0,0,0.4)';
   accept.addEventListener('click', LogOut);
   cancel.addEventListener('click', () => {
      containerOut.style.display = 'none';
      location.reload();
   });
}
