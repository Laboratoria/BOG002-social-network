//  import {MostrarPublicaciones} from '../Firebase/firebase-collection'


    export function PrintCollection (Publicar, ID, NombreUser, Descripcion, Fecha, Lugar){{
        Publicar.innerHTML += `	
        <div class="post" data-id="${ID}">
          <span class="nombre-usuario"  > ${NombreUser} </span>
          <span class="contenido">${Descripcion } </span>
          <div id="fecha-lugar">
             <span class="fecha" > ${Fecha}</span>
             <span class="lugar"> <img src="./imagenes/Location-1.svg">${Lugar }</span>
          </div>
          <div class="interaciones">
              <img src="./imagenes/Star-1.svg"> 
              <img src="./imagenes/More Square.png">
              <i class="far fa-edit" ></i>
              <span class="basura">
              <i class="fas fa-trash-alt" ></i>
              </span>
          </div>
        <div>`
     
    }}
  
