/* eslint-disable max-classes-per-file */
/* eslint-disable no-useless-constructor */
/* eslint-disable indent */
export const registro = () => {
    const texto = `<h5>Holis esto es una prueba</h5>
    <p>A ver si esto funciona</p>`;
    const divregistro = document.createElement('div');
    divregistro.innerHTML = texto;
    console.log(divregistro);
    return divregistro;
    };
export const formularioRegistro = () => {
    class formRegistro extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // eslint-disable-next-line quotes
        this.innerHTML = `<div>
        <a href="#/registro"><button>Registro</button></a>
        </div>`;
    }
}
window.customElements.define('boton-registro', formRegistro);
};

   export const inicio = () => {
        const texto = `<h5>Holis esto es una prueba</h5>
        <p>A ver si esto funciona</p>`;
        const divregistro = document.createElement('div');
        divregistro.innerHTML = texto;
        console.log(divregistro);
        return divregistro;
   };

   export const botonInicio = () => {
       class botonIncio extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // eslint-disable-next-line quotes
        this.innerHTML = `<a href="#/inicio"><button> Inicio</button></a>`;
    }
}
window.customElements.define('boton-inicio', botonIncio);
};
