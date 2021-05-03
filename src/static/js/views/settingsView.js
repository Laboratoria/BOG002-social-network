export const renderSettings = () => {
           
    const html =`
        <section id="settings">
            <div class="header">
                <div>
                    <h1>WALKTER</h1>
                </div>
                <div id="home">
                    <img class="icon-home" id="icon-home" src="static/images/icons/icon-home.png">
                </div>
            </div>

            <div class="content">
                <div class="left pad">
                    <div>
                    <h2>Información Personal</h2>
                    <p id="sesttPic">Cambiar foto</p>
                    <p id="settName">Cambiar nombre</p>
                    <p id="settMail">Cambiar correo</p>
                    <p id="settPassword">Cambiar contraseña</p>
                    </div>
                    <div>
                    <p type=button>Cerrar sesión</p>
                    <p>Desactivar cuenta</p>
                    </div>
                </div>
                <div class="rigth pad" id="settPad">
                    
                </div>
            </div>
        </section>
        `  
        let div = document.createElement('div');
        div.innerHTML = html;
        
        return div
}


