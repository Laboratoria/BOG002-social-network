import {Salir, autenticacionUsuario} from '../Firebase/firebaseAuth.js';
import{ SavePublicaciones} from '../Firebase/firebase-collection.js'


export function inicio(){

    let html= `
    
	<div id="encabezado">
		<div id="logo"> FoodFans </div>
		<div id="configuracion"><img src="./imagenes/Setting.svg"></div> 
	</div>
	<nav>
	<ul>
	<li><a id="inicio"href="#/release"><img src="./imagenes/Home.svg"></a>Inicio </li>
	<li><a id="perfil"href="#/profile"><img src="./imagenes/Profile.svg"></a>Perfil</li>
	<li><a id="buscar"href="#/search"><img src="./imagenes/Search.svg"></a>Buscar</li>
	</ul>
	</nav>

	<div id="menu">
		<span class= "setting">Cambiar nombre</span>
		<span class= "setting" id="cerrar-sesion">Cerra sesion</span>
	</div>
	
	<div class="area-publicar">
		<img id="foto-usuario" src="./imagenes/usuario.png">
		<input type="text" class="publicar" placeholder="Publica aqui">
		
	<div>
		<button class="btn" id="publicar-btn"> Publicar </button> 
	</div>
	</div>

	<div id="publicaciones">
		<div class="post">
			<span class="nombre-usuario" > </span>
			<span class="lugar"></span>
			<div class="contenido"> </div>
			
		<div>

	</div>

`  
    return html;
  }

export function CerrarSesion()	{
	let BotonCerrar = document.getElementById('cerrar-sesion');
		BotonCerrar.addEventListener('click', Salir);
}

	//  obtener valores
export function ParaPublicar(){

	//******Esta funcion solo sirve cuando se oprime el boton publicar, 
	// obtiene valores y los envia a la coleccion de firebase****** 

	const BtnPublicar = document.getElementById("publicar-btn")
		  BtnPublicar.addEventListener("click", () => {

			let user = firebase.auth().currentUser; //esta variable se usara en el documento firebaseauth
			let nombre = user.displayName 
			let descripcion = document.querySelector(".publicar").value;
	

			 let publicaciones= {
   					nombre,
					descripcion,
					foto: false,
   					lugar:"Bogota"}
					   SavePublicaciones(publicaciones)
					
			})
	
}

