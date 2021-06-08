export function vistaHome() {
    const viewHome = `
    <div class="">
    <h2>Welcome to the</h2>
    <h1>Universo Marvel</h1> 
    <p>En este párrafo se supone que explicaremos de que se trata 
    nuestro proyecto pero mientras se nos ocurre algo este texto se quedará ahí.</p>
    </div>
    `;

    const elementoHome = document.createElement('div');
    elementoHome.innerHTML = viewHome;
    return elementoHome;
};