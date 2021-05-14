import {SaveUser} from '../Firebase/firebaseAuth.js'


export function perfil(){

    let html= `
	
	<div class="container">
	 <nav>
	   <div id="menu">
		<div id="logo"> 
		<h1>FoodFans<h1></div>
		<div id="configuracion"><img src="./imagenes/Setting.svg">
		<div class="enlaces" id="enlaces">
          <a href="" id="editar-perfil">Editar Perfil</a>
		  <a  href="" id="close-sesion">Cerrar Sesion</a>
		</div>
		</div> 
		
	  </nav>
      <section>
	  <form>
	  <input type="text" class="input" id="name" placeholder="Name" name="name"></input>
	  <input type="text" class="input"id="apellido" placeholder="Apellido" name="apellido"></input>
	  <input type="text" class="input" id="descripcion" placeholder="Descripcion" name="descripcion"></input>
	  <button id='guardar'>Guardar</button>
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
    const guardarCambios = document.getElementById('guardar');
	guardarCambios.addEventListener('click',(e) =>{
		event.preventDefault();
       let nombre = document.getElementById('name').value;
	   let apellido = document.getElementById('apellido').value;
	   let descripcion = document.getElementById('descripcion').value;
		console.log('hola')

		const user = {
			nombre,
			apellido,
			descripcion
		}
		SaveUser(user)
	});


	}
	/* export function CloseSesion(){
		const Cerrar = document.getElementById('close-sesion');
	    Cerrar.addEventListener('click', Salir);
	} */
