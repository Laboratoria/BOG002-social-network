export default () => {
    let viewsLogin = `
        <form id="formLogin">
            <input type="text" value="Correo" id="correoLogin">
            <input type="password" value="Contraseña" id="contrasenaLogin">
            <button type="submit">Continuar</button>
            <p>O</p>
            <input type="button" value="Ingresar con Facebook">
    <input type="button" value="Ingresar con Google">
        </form>
    `

    let elemento2 = document.createElement('div');
    elemento2.innerHTML = viewsLogin;
    return elemento2;
}