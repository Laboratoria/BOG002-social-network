import {Salir, autenticacionUsuario} from '../Firebase/firebaseAuth.js';
import{SavePublicaciones} from '../Firebase/firebase-collection.js'


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
	<div class="area-publicar">
	<img id="foto-usuario" src="./imagenes/usuario.png">
	<input type="text" class="publicar" placeholder="Publica aqui">

	
	<div>
	<button class="btn" id="publicar-btn"> Publicar </button> 
	</div>

	</div>
	<div id="publicaciones">


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

export function CerrarSesion()	{
	let BotonCerrar = document.getElementById('cerrar-sesion');
		BotonCerrar.addEventListener('click', Salir);
}


export function ParaPublicar(){
	//  obtener valores
	const BtnPublicar = document.getElementById("publicar-btn")
		  BtnPublicar.addEventListener("click", () => {

					var user = firebase.auth().currentUser; //esta variable se usara en el documento firebaseauth
			
					let nombre = user.displayName 
					let descripcion = document.querySelector(".publicar").value;

					let span = document.createElement("div");
						span.classList.add("nombre-usuario");
					
					let contenedorPublicaciones = document.getElementById("publicaciones")
					let div = document.createElement("article");
						div.classList.add("post");

					contenedorPublicaciones.appendChild(span)
					contenedorPublicaciones.appendChild(div)
					
					
					div.innerHTML  =   descripcion
					span.innerHTML  = nombre 
					

			 let publicaciones= {
   					nombre,
					descripcion,
					foto: false,
   					lugar:"Bogota"}
					   SavePublicaciones(publicaciones)
			})
	
}

