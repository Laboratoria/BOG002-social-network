export function inicio(){

    let html= `
    
	<div id="encabezado">
		<div id="logo"> FoodFans </div>
		<div id="configuracion"> Configuracion</div> 
	</div>

	<div id="menu">
		<span>Cambiar nombre</span>
		<span>Cerra sesion</span>
	</div>

	<div id="publicaciones">
		 
		 <textarea class="publicar" placeholder="Publica aqui"></textarea>
		 <div>
		 <button class="btn" id="publicar-btn"> Publicar </button> 
		 </div>
	</div>

	<nav>
		<ul>
			<li><a href="#/release"> Inicio </a> </li>
			<li><a href="#/profile"> Perfil</a>   </li>
			<li><a href="#/search"> Buscar </a>  </li>
		</ul>
	</nav>

`
        
        
    return html;
  }