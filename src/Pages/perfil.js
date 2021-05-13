export function perfil(){

    let html= `
    
    
    
	<div id="encabezado">
		<div id="logo"> FoodFans </div>
		<div id="configuracion"><img src="./imagenes/Setting.svg"></div> 
	</div>

	<div id="menu">
		<span class= "setting">Cambiar nombre</span>
		<span class= "setting" id="cerrar-sesion">Cerra sesion</span>
	</div>

	<div id="profile">
		 Pepito Perez
	</div>

	<nav>
		<ul>
		<li><a href="#/release"><img src="./imagenes/Home.svg"></a>Inicio </li>
		<li><a href="#/profile"><img src="./imagenes/Profile.svg">Perfil</a></li>
		<li><a href="#/search"><img src="./imagenes/Search.svg"></a> </li>

		</ul>
	</nav>

`
        
        
    return html;
  }