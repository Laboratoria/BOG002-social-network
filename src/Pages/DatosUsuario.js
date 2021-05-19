import {SaveUser} from '../Firebase/firebase-collection.js';

export function FormularioPerfilDeUsuario(){
    const html = `
    <section>
      <div class="perfil">
	   <img src=" ">
       
       </div>
      </section><br>
    <form id="formulario">
	<input type='file' id='my-file'></input>
      <input type="text" class="input" id="name" placeholder="Name" name="name"></input>
	  <input type="text" class="input"id="apellido" placeholder="Apellido" name="apellido"></input>
	  <input type="text" class="input" id="descripcion" placeholder="Descripcion" name="descripcion"></input>
	  <button type="submit" class="btn">Guardar</button>
      </form>`;
      return html;
}

export function EditarPerfil (){
    const InfoPerfil = document.getElementById('formulario');
	InfoPerfil.addEventListener('submit',(event) =>{
		event.preventDefault();
	   let fileImage = document.getElementById('my-file');
	   console.log(fileImage.files)
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

	export function cargarImagen(){
		const file = document.getElementById('my-file')[0];
		console.log(file);
	}