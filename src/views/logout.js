import { logoutUsuario } from '../firebase/firebaseAuth.js';

export function logoutEvento() {
    const logout = document.getElementById('logout');
    logout.addEventListener('click', (e) => {
        e.preventDefault();
        logoutUsuario();
    });
}