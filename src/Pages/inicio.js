import {Salir} from '../Firebase/firebaseAuth.js';
import{ SavePublicaciones} from '../Firebase/firestore.js'


export function inicio() {

	let html = `
    
	<div class="container">
	 <header>
	   <div class="menu">
		  <div class="logo"> 
		  <h1>FoodFans<h1>
		</div>
		<div id="configuracion"><img src="./imagenes/Setting.svg">
		  <div class="enlaces" id="enlaces">
		    <h3 class= "setting" id="cerrar-sesion"><a href="#">Cerrar sesion</a></h3>
		  </div>
		</div> 
	 </header>
       <button type="submit" class="btn btn-publicar" id="abrir-modal"> Publicar </button> 
		<div class="all-post" id="all-post"></div>
	 <footer>
		<ul>
		<li><a href="#/release"><img src="./imagenes/Home.svg"></a>Inicio </li>
		<li><a href="#/profile"><img src="./imagenes/Profile.svg"></a>Perfil</li>
		<li><a href="#/search"><img src="./imagenes/Search.svg"></a>Buscar </li>
       </ul>
	  </footer>
	  
    </div>


`
	return html;
}

export function CerrarSesion() {
	let BotonCerrar = document.getElementById('cerrar-sesion');
	BotonCerrar.addEventListener('click', Salir);
}

//  obtener valores
export function FormPublicar() {
	const botonAbrirModal = document.getElementById('abrir-modal');
	const modalPublicacion = document.getElementById('post_modal');
	const cerrarModal = document.getElementById('publicar-btn');
	const cerrarSinPublicar = document.getElementById('cerrar');
	botonAbrirModal.addEventListener('click', () => {
		modalPublicacion.classList.add('show');
	})
	cerrarModal.addEventListener('click', () => {
		modalPublicacion.classList.remove('show');
	})
    cerrarSinPublicar.addEventListener('click', () => {
		modalPublicacion.classList.remove('show');
	})

	const formPublicacion = document.getElementById("post")
	formPublicacion.addEventListener("submit", (e) => {
		e.preventDefault();
		let descripcion = document.querySelector(".publicar").value;
		let lugar = document.querySelector("#lugar").value;
		let user = firebase.auth(); //esta variable se usara en el documento firebaseauth
		let n = user.displayName;
		let userId = user.uid;
		crearPublicacion(n, descripcion, lugar,userId,);



	})
	function crearPublicacion(n, descripcion, lugar, userId) {
		let publicaciones = {
			nombre: n,
			descripcion: descripcion,
			lugar: lugar,
			UserID : userId,
			foto: false,

		}
		SavePublicaciones(publicaciones);
	}

}
export function LeerPublicacion() {
	db.collection("publicaciones")
		.onSnapshot((snapshot) => {
			const post = document.getElementById('all-post');
			post.innerHTML = '';
			snapshot.forEach((doc => {

				post.innerHTML += `
		   
	     <article class="post" id="${doc.id}">
		    <h3>${doc.data().nombre}</h3>
			<p>${doc.data().UserID}</p>
            <p>${doc.data().descripcion}</p>
			<h5>${doc.data().lugar}</h5>
			
		</article>
        `
			}))
		})
}
/* export function EditarPublicacion(lugar,descripcion) {
	const botonEditar = document.querySelector('btn')
	botonEditar.addEventListener('click',()=>{
		console.log('edicion activada')
		
	})
	let publicaciones = {
		descripcion: descripcion,
		lugar: lugar,
		foto: false,
	}
	db.collection("publicaciones").set()
	
	
		
			
} */
export function EliminarPublicacion(id) {
	const BotonEliminar = document.getElementById("${doc.id}");
	BotonEliminar.addEventListener("click", () => {
		db.collection("publicaciones").doc(id).delete()
		.then(function () {
			console.log('eliminado')
		}).catch(function (error) {
			console.error('Error removiendo documento', error)
		});
	});
}
