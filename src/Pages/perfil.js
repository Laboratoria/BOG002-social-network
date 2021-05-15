import {SaveUser} from '../Firebase/firebase-collection.js'



export function perfil(){

    let html= `
	
	<div class="container">
	 <header>
	   <div class="menu">
		<div class="logo"> 
		<h1>FoodFans<h1></div>
		<div id="configuracion"><img src="./imagenes/Setting.svg">
		<div class="enlaces" id="enlaces">
		<span class= "setting">Editar Perfil</span>
		<span class= "setting" id="cerrar-sesion">Cerrar sesion</span>
		</div>
		</div> 
		
	  </header>
      <section>
	  <form>
	  <input type="text" class="input" id="name" placeholder="Name" name="name"></input>
	  <input type="text" class="input"id="apellido" placeholder="Apellido" name="apellido"></input>
	  <input type="text" class="input" id="descripcion" placeholder="Descripcion" name="descripcion"></input>
	  <button id='guardar'class="btn">Guardar</button>
      </form>
	  
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
  
  export function EditarPerfil (){
    const InfoPerfil = document.getElementById('guardar');
	InfoPerfil.addEventListener('click',(event) =>{
		event.preventDefault();
       let nombre = document.getElementById('name').value;
	   let apellido = document.getElementById('apellido').value;
	   let descripcion = document.getElementById('descripcion').value;

		const user = {
			nombre,
			apellido,
			descripcion
		}
		SaveUser(user);
		
	});

}
    function configuracion(){
		const BotonConfiguracion = document.getElementById('configuracion');
		BotonConfiguracion.addEventListener('click', () =>{
		 document.querySelectorAll('.enlaces').style.display = "block";
			
		})
	
	}
	
	