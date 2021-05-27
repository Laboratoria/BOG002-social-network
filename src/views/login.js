export default () => {
    let viewsLogin = `
        <form>
            <input type="text" value="Correo">
            <input type="password" value="Contraseña">
            <input type="button" value="Continuar">
            <p>O</p>
            <input type="button" value="Ingresar con Facebook">
    <input type="button" value="Ingresar con Google">
        </form>
    `

    let elemento2 = document.createElement('div');
    elemento2.innerHTML = viewsLogin;
    return elemento2;
}