// el metodo firestore
const firestore = () =>{
  return {
      colletion : (nameColletion) => {
          return {
              add: (objData) => {
                  return new Promise ((resolve) => {
                    resolve('el post fue publicado')
                  })
              }
          }
      }
  }
}
//el metodo auth
const auth = () =>{
    return {
        createUserWithEmailAndPassword: (email, password)=> {
            return new Promise ((resolve) =>{
                resolve({
                    isNewUser: true,
                    Email: email,
                    Pasword: password,
                });
            });
        },
        signInWithEmailAndPassword: (email, password) => {
            return new Promise ((resolve) =>{
                resolve({
                    Login: true,
                    Email: email,
                    Pasword: password,
                });
            });
        },
    
    }

}


const firebase = {
    auth: auth,
    firestore: firestore
}

export default jest.fn(()=>{
    return firebase;
})