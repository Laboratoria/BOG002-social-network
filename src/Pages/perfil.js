
export function perfil(){

    let html= `
	
	<div class="container">
	 <header>
	   <div class="menu">
		<div class="logo"> 
		<h1>FoodFans<h1></div>
			<div id="configuracion"><img src="./imagenes/Setting.svg">
				<div class="enlaces" id="enlaces">
				<span class= "setting"><a href="#/editarPerfil">Editar Perfil</a></span>
				<span class= "setting" id="cerrar-sesion">Cerrar sesion</span>
			</div>
		</div> 
	 </header>
      <section>
	  <div id='perfil' class="perfil">
	  <img src="./imagenes/usuario.png" id="foto-perfil">
	  <h1 id="Nombre-de-usuario"></h1>
	  <h2 id="nombre-completo"></h2>
	  <p class="descripcion"> Aqui va una breve descripcion del usuario</p>
	  </div>
	  <div id="publicaciones"></div>
	  </section>
	
	  <footer>
		<ul>
		<li><a href="#/release"><img src="./imagenes/Home.svg"></a>Inicio </li>
		<li><a href="#/profile"><img src="./imagenes/Profile.svg"></a>Perfil</li>
		<li><a href="#/search"><img src="./imagenes/Search.svg"></a>Buscar </li>
       </ul>
	  </footer>
	</div>`;    
    return html;
  }
 
  
   export function name (){
	//    obteniendo valores
	let Nombre_usuario = document.getElementById("Nombre-de-usuario");
	let Nombre_completo = document.getElementById("Nombre-completo");
	let Descripcion = document.getElementsByClassName("descripcion");

	let  user = firebase.auth().currentUser;//esta variable se usara en el documento firebaseauth
	let NombreRegistro = user.displayName;
	
	// pintando valores
		Nombre_usuario.innerHTML =  NombreRegistro ;


}


					 

	

	