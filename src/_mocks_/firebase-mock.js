class GoogleAuthProvider{
    constructor() {
        this.provider = 'google'
    }
}

const auth = () => {
    return {
        signInWithEmailAndPassword:(email, password) => {
            return Promise.resolve(email);
        },
        signInWithPopup: (provider) => {
            return new Promise((resolve) => {
                resolve(provider);
            })
        },
        createUserWithEmailAndPassword: (email, password)=> {
            return Promise.resolve("Usuario registrado");
        },
        signOut:() => {
            return Promise.resolve("Usuario deslogueado");
        }
    }
}

const firebase = {
    auth : auth
}

firebase.auth.GoogleAuthProvider = GoogleAuthProvider;

export default jest.fn(() => {
    return firebase
})