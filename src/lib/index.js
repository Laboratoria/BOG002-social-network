// aqui exportaras las funciones que necesites


const idregistro= document.getElementById("registro")


const vistas = ()=>{
  const texto=
  `<h5>Holis esto es una prueba</h5>
  <p>A ver si esta verga funciona</p>`;
  const divregistro=document.createElement('div');
  divregistro.innerHTML=texto;
  console.log(vistas)
  return divregistro
  };
const router = (route)=>{
  console.log(route)
  switch (route){
    case '#/inicio':
        return console.log ("aiuda")
   case '#/registro':{
     return idregistro.appendChild(vistas())
   }
       default:
           return console.log("si funciona pero  esta enlazando la principal")
      
}
};

export const myFunction = () => {
  // aqui tu codigo

  window.addEventListener('hashchange',()=>{
    router(window.location.hash);
    
  });
};