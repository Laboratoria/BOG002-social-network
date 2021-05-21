
export function perfil(){

    let html= `
	
	<div class="container">
	 <header>
	   <div class="menu">
		<div class="logo"> 
		<h1>FoodFans<h1></div>
		<div id="configuracion"><img src="./imagenes/Setting.svg">
		<div class="enlaces" id="enlaces">
		<h3 class= "setting"><a href="#/editarPerfil">Editar Perfil</a></h3>
		<h3 class= "setting" id="cerrar-sesion"><a href="#">Cerrar sesion</a></h3>
		</div>
		</div> 
	 </header>
      <section>
	  <div class="perfil">
	  <img src="./imagenes/usuario.png" id="foto-perfil">
	  <h1 id="Nombre-de-usuario">Pepito Perez</h1>
	  <p class="descripcion">Aqui va una breve descripcion del usuario</p>
	  </div>
	  <div class="all-post" id="all-post"></div>
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
	let Nombre_usuario = document.getElementById("Nombre-de-usuario");
	let  user = firebase.auth().currentUser;//esta variable se usara en el documento firebaseauth
	let n =user.displayName;
	Nombre_usuario.innerHTML =  n;
  }

			
					 

    function configuracion(){
		const BotonConfiguracion = document.getElementById('configuracion');
		BotonConfiguracion.addEventListener('click', () =>{
		 document.querySelectorAll('.enlaces').style.display = "block";	
		})
	
	}
	
	
