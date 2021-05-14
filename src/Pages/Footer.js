export function Footer(){
    const menuFooter = document.createElement('footer');
    const html =` 
        <ul>
            <li><a href="#/release"><img src="./imagenes/Home.svg"></a>Inicio </li>
            <li><a href="#/profile"><img src="./imagenes/Profile.svg"></a>Perfil</li>
            <li><a href="#/search"><img src="./imagenes/Search.svg"></a>Buscar</li>
        </ul>`;
        menuFooter.appendChild(html);
    return menuFooter;
}