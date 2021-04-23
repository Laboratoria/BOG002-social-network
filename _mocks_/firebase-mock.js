const auth = () => {
  return {
    createUserWithEmailAndPassword: (email, password) => {
        return new Promise ((resolve) => {
             resolve( {
                 isNewUser: true,
                 email: email, 
                 pasword: password
             })
        })
    }
  }
}
 

const firebase = {
    auth: auth
}

export default jest.fn(() => {
    return firebase;
})
