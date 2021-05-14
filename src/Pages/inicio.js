import {Salir} from '../Firebase/firebaseAuth.js';


export function inicio(){

    let html= `
    
	<div id="encabezado">
		<div id="logo"> FoodFans </div>
		<div id="configuracion"><img src="./imagenes/Setting.svg"></div> 
	</div>

	<div id="menu">
		<span class= "setting">Cambiar nombre</span>
		<span class= "setting" id="cerrar-sesion">Cerra sesion</span>
	</div>

	<div id="publicaciones">
		 
		 <textarea class="publicar" placeholder="Publica aqui"></textarea>
		 <div>
		 <button class="btn" id="publicar-btn"> Publicar </button> 
		 </div>
	</div>

	<nav>
		<ul>
		<li><a id="inicio"href="#/release"><img src="./imagenes/Home.svg"></a>Inicio </li>
		<li><a id="perfil"href="#/profile"><img src="./imagenes/Profile.svg"></a>Perfil</li>
		<li><a id="buscar"href="#/search"><img src="./imagenes/Search.svg"></a>Buscar</li>
		</ul>
	</nav>
`  
    return html;
  }

export function CerrarSesion(){
	let BotonCerrar = document.getElementById('cerrar-sesion');
		BotonCerrar.addEventListener('click', Salir);
}

