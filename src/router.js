
//  class Router {
//     // Carga el listado de rutas y el inicializa el router 
//     constructor(Rutas){
//       this.ruta = ruta;
//       this.initRouter();
//     }
  
//   // Identificar ruta de nuestro navegador
//   initRouter() {
//   const { location: { pathname ="/"} } =window;
//   const URL = pathname === "home"? "home" : pathname.replace("/","");
//   this.load(URL);
//   } 
  
//   // Pagina principal que se encargara de cargar el resto de vistas 
//   load(page="home"){
//   const {Rutas} = this;
//   const {ruta, template} = Rutas[page] || Rutas.error;
//   const contenedor = document.getElementById(content);
//   contenedor.innerHTML = template;
//   window.history.pushState({}, "done", ruta);
  
//   }}











  
