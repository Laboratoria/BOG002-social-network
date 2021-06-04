export function vistaHome() {
    const viewHome = `
    <h1>Explora el universo Marvel</h1> 
    <p>En este párrafo se supone que explicaremos de que se trata 
    nuestro proyecto pero mientras se nos ocurre algo este texto se quedará ahí.</p>
    `;

    const elementoHome = document.createElement('div');
    elementoHome.innerHTML = viewHome;
    return elementoHome;
};