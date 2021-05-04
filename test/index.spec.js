import { LogIn } from '../src/auth/logInUser.js';
import { Information } from '../src/auth/newUser.js';

const { mockFirebase } = require('firestore-jest-mock');

mockFirebase({
  database: {
    users: [
      {
        id: 'abc123', name: 'Homer Simpson', email: 'correo@prueba.com', password: '1234567',
      },
      { id: 'abc456', name: 'Lisa Simpson' },
    ],
    posts: [{ id: '123abc', title: 'Really cool title' }],
  },
});
const firebase = require('firebase');

global.firebase = firebase;
const email = 'testnomadas0123467s@gmail.com';
const password = 'colombia123';
// const name = 'valen';
/*  -------  Pruebas de Registro   ----------   */
describe('Information', () => {
  it('debería ser una función', () => {
    expect(typeof Information).toBe('function');
  });
  test('Promise then information', () => {
    console.log('then en registro');
    return Information(email, password).then((user) => {
      expect(typeof user).toBe('object');
      // expect(user.displayName).toEqual(name);
    });
  });
  test('Promise catch information', () => {
    console.log('Catch en Registro');
    return Information('garavitobarretonatalia@gmail.com', password).catch((error) => {
      expect(error).toEqual('auth/email-already-in-use');
    });
  });
});

/*  -------  Pruebas de LogIn  ----------   */
describe('LogIn', () => {
  it('debería ser una función', () => {
    expect(typeof LogIn).toBe('function');
  });
  test('Promise then LogIn', () => {
    console.log('valida login');
    return LogIn(email, password).then((user) => {
      expect(typeof user).toBe('object');
      // expect(user.email).toEqual(email);
      // expect(user.uid).not.toBeNull();
    });
  });
  test('Clave Incorrecta', () => {
    console.log('valida clave incorrecta');
    return LogIn('nataliasita04@gmail.com', password).catch((error) => {
      expect(typeof error).toBe('object');
    });
  });
  test('Correo no registrado', () => {
    console.log('valida correo no registrado');
    return LogIn('correo_no_existente@gmail.com', password).catch((error) => {
      expect(error).toEqual('auth/user-not-found');
    });
  });
  test('Error cualquiera', () => {
    console.log('Entra al error');
    return expect(LogIn('correo@prueba.com', password)).rejects.toEqual({
      error: 'auth/user-not-found',
    });
  });
});

/*  -------  Pruebas de Google   ----------   */
describe('LogInGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof Information).toBe('function');
  });
  // test('Promise then LogInGoogle', () => {
  //   console.log('valida login');
  //   return LogInGoogle('mavalezea@gmail.com', 'nutella98').then(() => {
  //     // expect(result.user.emailVerified).toBeTruthy();
  //     // expect(result.credential.accessToken).not.toBeNull();
  //     // expect(window.location.hash).resolves.toBe('#home');
  //   });
  //   // return expect(LogInGoogle('mavalezea@gmail.com', 'nutella98').resolves.toBe();
  // });
});

/*
jest.mock('firebase', () => {
  const auth = jest.fn();
  const mAuth = { signInWithPopup: jest.fn() };
  // @ts-ignore
  auth.GoogleAuthProvider = jest.fn();
  // @ts-ignore
  auth.Auth = jest.fn(() => mAuth);
  return { auth };
});
describe('signInWithgoogle', () => {
  it('should mock firebase with typescript namespace', () => {
    // @ts-ignore
    firebase.auth.mockImplementation(() => new firebase.auth.Auth());
    LogInGoogle();
    expect(firebase.auth.GoogleAuthProvider).toBeCalledTimes(1);
    expect(firebase.auth).toBeCalledTimes(1);
    expect(firebase.auth().signInWithRedirect).toBeCalledTimes(1);
  });
});
*/
