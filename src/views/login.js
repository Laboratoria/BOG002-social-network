export default () => {
    let viewsLogin = `
        <form id="formLogin">
            <label for="correo">correo</label>
            <input type="text" value="Correo" id="correoLogin">
            <label for="contrasena">Contraseña</label>
            <input type="password" value="Contraseña" id="contrasenaLogin">
            <button type="submit">Continuar</button>
            <p>O</p>
            <input type="button" value="Ingresar con Google">
            <p>¿Quieres ser miembro? <a href="">Regístrate</a></p>
        </form>
    `

    let elemento2 = document.createElement('div');
    elemento2.innerHTML = viewsLogin;
    return elemento2;
}