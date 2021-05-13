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
			<li><a href="#/release"> <span><imag src="../imagenes/Home.svg"> </span>Inicio </a> </li>
			<li><a href="#/profile"> <span><imag src="../imagenes/Profile.svg"> </span>Perfil</a>   </li>
			<li><a href="#/search"><span><imag src="../imagenes/Search.svg"> </span> Buscar </a>  </li>
		</ul>
	</nav>

`
        
        
    return html;
  }