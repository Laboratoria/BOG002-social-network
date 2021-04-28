const timelinePage = () => {

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
                    <button id="btnLogOut" onclick= "window.location='#/'">Cerrar sesion</button>
                </form>
            </main>
        </section>    
    `
    const divElement = document.createElement('div');
    divElement.innerHTML = view;   

    return divElement;
}

export default timelinePage;