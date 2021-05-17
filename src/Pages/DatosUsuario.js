import {SaveUser} from '../Firebase/firebase-collection.js';

export function FormularioPerfilDeUsuario(){
    const html = `
    <section>
      <div class="perfil">
	   <img src="./imagenes/usuario.png" id="foto-perfil">
       <button>Elegir Foto</button>
       </div>
      </section><br>
    <form>
      <input type="text" class="input" id="name" placeholder="Name" name="name"></input>
	  <input type="text" class="input"id="apellido" placeholder="Apellido" name="apellido"></input>
	  <input type="text" class="input" id="descripcion" placeholder="Descripcion" name="descripcion"></input>
	  <button id='guardar'class="btn">Guardar</button>
      </form>`;
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