
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
	  <h1 id="Nombre-de-usuario"></h1>
	  <p class="descripcion"></p>
	  </div>
	  
	  </section>
	  <div class="all-post" id="all-post"></div>
	
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
  export function LeerPublicacionUid() {
	
	db.collection('publicaciones' + user.uid)
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
			<div id="opciones">
			<button class="enable">Delete</button>
		    <button type="button">Editar</button>
			</div>
		</article>
        `
			}))
	
		})
	
}


 // resulta que al obtener nuestro boton editar no permite
 //hacer el addEventListener pues es un NodeList en este caso debemos iterar sobre cada elemento
 // y luego aplicarle el escuchador de eventos
  
 const botonesEditar = document.querySelectorAll('button.enable');
 console.log(botonesEditar);
export function editarPerfil(){
  botonesEditar.forEach(item=>{
	item.addEventListener('click',()=>{
		console.log("aqui edito")
	})
	
  })
}
	
	
	
