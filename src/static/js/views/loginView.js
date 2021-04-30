export const renderLogin = () => {
    let html = `
    <section id="inicio">

        <div id="Presentation">
        <h1>WALKTER</h1>
        <h2 class="slogan">Apostemos por vías más seguras para todos.</h2>
        <img class="img-login" src="static/images/Web image.png" att="app">
        </div>

        <div id="register">
        <form id="signin-form">
            <h1>WALKTER</h1>
            <input type="email" class="input-email" id="signin-email" placeholder="Correo electrónico">
            <input type="password" class="input-password" id="signin-password" placeholder="Contraseña">
            <p><a class="link-forgetMyPassword" type="button">Olvide la contraseña</a></p>
            <button id="btn-sing-in" name="boton" type="submit">Iniciar sesión</button>
            <span class="line"></span>
            <img class="icon-gmail" id="googleLogin" type="button" src="static/images/icons/icon-google.png" alt="Gmail">
            <img class="icon-facebook" id="facebookLogin" type="button" src="static/images/icons/icon-facebook.png" alt="Facebook">
        </form>

        <div class="container-new-user">
            <p class="title-Newaccount">¿No tienes una cuenta?</p>
            <form id="signup-form">
            <p class="snRegister">Registrarme con:</p>
            <input type="email" class="input-signup-email" id="signup-email" placeholder="Correo electrónico">
            <input type="password" class="input-signup-password" id="signup-password" placeholder="Contraseña">
            <input type="passwordconfirm" class="input-password2" id="password2" placeholder="Confirmar contraseña">
            <button id="btn-create-account" name="boton" type="submit">Crear cuenta</button>
            <span class="line">o</span>
            <img class="icon-gmail" id="GoogleLogin" type="button" src="static/images/icons/icon-google.png" alt="Gmail">
            <img class="icon-facebook" id="FacebookLogin" type="button" src="static/images/icons/icon-facebook.png" alt="Facebook">
            </form>
        </div>
        </div>

    </section>`;

    let div = document.createElement('div');
    div.innerHTML = html;
        
    return div
}
