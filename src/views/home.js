export default () => {
    const viewHome = `

    <h1>Explora el universo Marvel</h1>
    <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<form>
    <h2>Bienvenid@s a Universo Marvel</h2>
    <h5>registrate para saber mas</h5> 
    <input type="text" placeholder="Correo">
    <input type="text" placeholder="Crea una Contraseña">
    <input type="button" value="Continuar">
    <p>O</p>
    <input type="button" value="Registrarse con Facebook">
    <input type="button" value="Registrarse con Google">
    <p>¿Ya eres miembro? <a href="">Inicia Sesión</a></p>
</form>
`;

    const elemento = document.createElement('div');
    elemento.innerHTML = viewHome;
    return elemento;
};