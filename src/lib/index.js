// aqui exportaras las funciones que necesites



export const myFunction = () => {
  // aqui tu codigo

  window.addEventListener('hashchange',()=>{
    let hashito=window.addEventListener('hashchange')
    router(hashito);
    console.log(hashito)
  });
};

export const router = (route)=>{
  switch (route){
      case '/#inicio':
          return console.log ("aiuda")
     case '/#registro':
         return console.log("esta funcionando registro ")
        //  default:
        //      return console.log("si funciona pero  esta enlazando la principal")
  }
};