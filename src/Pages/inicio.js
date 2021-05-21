import { Salir, autenticacionUsuario } from '../Firebase/firebaseAuth.js';
import { SavePublicaciones } from '../Firebase/firebase-collection.js'


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
       <form id= 'post'>
	   <input type="file" id="my-file"></input>
	   <input type="text" class="input" id="lugar" placeholder="lugar"></input>
		<textarea type="text" class="publicar" placeholder="Publica aqui"></textarea>
		<button type="submit" class="btn" id="publicar-btn"> Publicar </button> 
		</form>
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

	const formPublicacion = document.getElementById("post")
	formPublicacion.addEventListener("submit", (e) => {
        e.preventDefault();
	    let descripcion = document.querySelector(".publicar").value;
		let lugar = document.querySelector("#lugar").value;
		let user = firebase.auth().currentUser; //esta variable se usara en el documento firebaseauth
		let nombre = user.displayName ;
		crearPublicacion(descripcion,lugar);
        formPublicacion.reset();


	})		
	function crearPublicacion(descripcion,lugar){
		let publicaciones = {
			descripcion: descripcion,
			lugar: lugar,
			foto: false,
			//fecha: objectoAccion.toLocaleString(),
			// fecha: firebase.firestore.FieldValue.serverTimestamp(),
		}	
			SavePublicaciones(publicaciones);
	}
		
}
export function LeerPublicacion (){
	db.collection("publicaciones")
	 .onSnapshot((snapshot)=>{
       const post = document.getElementById('all-post');
	   post.innerHTML = '';
	  snapshot.forEach((doc => {
		
		post.innerHTML +=`
	       <div class= "post">
            <p>${doc.data().publicaciones.descripcion}</p>
			<p>${doc.data().publicaciones.nombre}</p>
		 </div>	
		 <div id="opciones">
		 </div>
        `
	  }))
	})
}