export const vistas = ()=>{
    const texto=
    `<h5>Holis esto es una prueba</h5>
    <p>A ver si esto funciona</p>`;
    const divregistro=document.createElement('div');
    divregistro.innerHTML=texto;
    console.log(divregistro)
    return divregistro
    };