import mockFirebase from '../src/_mocks_/firebase-mock.js';
import { LogIn, LogInGoogleAuth, LogOutAuth, createUser } from '../src/auth/logInUser.js';
global.firebase = mockFirebase(); 

describe('LogIn', () => {
    it('Debería permitir loguearse', () => {
        return LogIn('pruebaLogIn@lab.com', 'abcd1234').then((user =>{
            expect(user).toBe('pruebaLogIn@lab.com');
        }))
    });
})

describe('LogInGoogle', () => {
    it('Debería permitir loguearse con Google', () => {
        return LogInGoogleAuth().then((provider) =>{
            expect(provider.provider).toBe('google');
        })
    });
})

describe('LogOut', () => {
    it('Debería permitir cerrar sesión', () => {
        return LogOutAuth().then((result) =>{
            expect(result).toBe('Usuario deslogueado');
        })
    });
})

describe('createUser', () => {
    it('Debería permitir crear un usuario', () => {
        return createUser().then((result) =>{
            expect(result).toBe('Usuario registrado');
        })
    });
})

