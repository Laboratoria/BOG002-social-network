import {Salir} from '../Firebase/firebaseAuth.js';
import{ SavePublicaciones} from '../Firebase/firestore.js'


export function inicio(){

    let html= `
    
	<div id="encabezado">
		<div id="logo"> FoodFans </div>
		<div id="configuracion"><img src="./imagenes/Setting.svg">

		</div> 
	</div>

	<nav>
		<ul>
			<li><a id="inicio" href="#/release"><img src="./imagenes/Home.svg"></a>Inicio </li>
			<li><a id="perfil" href="#/profile"><img src="./imagenes/Profile.svg"></a>Perfil</li>
			<li><a id="buscar" href="#/search"><img src="./imagenes/Search.svg"></a>Buscar</li>
		</ul>
	</nav>

	<div id="menu">
		<span class= "setting">Cambiar nombre</span>
		<span class= "setting" id="cerrar-sesion">Cerra sesion</span>
	</div>
	<form class="area-publicar">
	<img id="foto-usuario" src="./imagenes/usuario.png">
		<div class ="insertar-publicacion">
			<textarea type="text" maxlength="250" minlength="2"  required class="publicar" placeholder=" ¿Que tienes para contar?">  </textarea>
				<span class="area-lugar">
					<img src="./imagenes/Location-1.svg">
					<input id="input-lugar" type="text" maxlength="250" minlength="2"  required placeholder="¡Estoy aqui!">
				</span>
		</div>
	<div>
		<button type="submit" class="btn" id="publicar-btn"> Publicar </button> 
	</div>
	</form>

	<div id="publicaciones">	
	</div>
`  
    return html;
}

export function CerrarSesion()	{
	let BotonCerrar = document.getElementById('cerrar-sesion');
		BotonCerrar.addEventListener('click', Salir);
}

	//  obtener valores
export async function ParaPublicar(){


	const BtnPublicar = document.getElementById("publicar-btn")
		  await BtnPublicar.addEventListener("click", (e) => {
			e.preventDefault();
			let user   		= firebase.auth().currentUser; //esta variable se usara en el documento firebaseauth
			const nombre 		= user.displayName 
			const descripcion   = document.querySelector(".publicar").value;
			const lugar 		= document.querySelector("#input-lugar").value;
			const objectoAccion =  new Date();
			console.log(objectoAccion);


			 const publicaciones= {
   					nombre,
					descripcion,
					foto: false,
					fecha: Date(objectoAccion.toString()).replace(/ \w+-\d+ \(.*\)$/,""),
   					lugar,
			}
			SavePublicaciones(publicaciones);
			document.querySelector(".area-publicar").reset();
			})
	
}

