import { signOut } from '../../index.js';


 export function timelinePage() {

    const view = `
        <section id="screenWall">
            <header>
                <div class="headerWall">
                    <img src="assets/WikiMomsNegro.png">
                    <img id="imgUser" src="assets/IconoUsuario.png">
                </div>
            </header>

            <main>
                <form id="logOut">
                    <button id="btnLogOut">Cerrar sesion</button>
                </form>
            </main>
        </section>    
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = view;   

    return divElement;
}


export function signOutGoogle() {
    const buttonSignOut = document.getElementById('btnLogOut');
    buttonSignOut.addEventListener('click', function () {
        signOut()
            .then(() => {
                console.log ('cerraste sesión')
                window.location = '#/'                
            })
            .catch(err => {
                console.log(err)
            })

    });
}

//export default timelinePage;