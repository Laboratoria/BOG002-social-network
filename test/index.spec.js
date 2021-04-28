// importamos la funcion que vamos a testear
// import { getAuth, useAuthEmulator } from 'firebase/auth';
import { configurationFireBase } from '../src/firebase/config.js';
import { LogIn, LogInGoogle } from '../src/auth/logInUser.js';
import { Information } from '../src/auth/newUser.js';

const { mockFirebase } = require('firestore-jest-mock');
const firebase = require('firebase');
// const firebase = require('firestore-jest-mock');
global.firebase = firebase;
configurationFireBase();
// const auth = firebase.auth();
// auth.useEmulator('http://localhost:9099');
// useAuthEmulator(auth, 'http://localhost:9099');
// Create a fake Firestore with a `users` and `posts` collection
mockFirebase({
  database: {
    posts: [{ id: '123abc', title: 'Really cool title' }],
  },
});

const email = 'testnomadas01234s@gmail.com';
const password = 'colombia123';
const name = 'valen';
/*  -------  Pruebas de Registro   ----------   */
describe('Information', () => {
  it('debería ser una función', () => {
    expect(typeof Information).toBe('function');
  });
  test('Promise then information', () => {
    console.log('then en registro');
    return Information(email, password, name).then((user) => {
      expect(user.email).toEqual(email);
      expect(user.displayName).toEqual(name);
    });
  });
  test('Promise catch information', () => {
    console.log('Catch en Registro');
    return Information(email, password).catch((error) => {
      expect(error).toEqual('auth/email-already-in-use');
    });
  });
});

/*  -------  Pruebas de LogIn  ----------   */
describe('LogIn', () => {
  it('debería ser una función', () => {
    expect(typeof Information).toBe('function');
  });
  test('Promise then LogIn', () => {
    console.log('valida login');
    return LogIn(email, password).then((user) => {
      expect(user.email).toEqual(email);
      expect(user.uid).not.toBeNull();
    });
  });
  test('Clave Incorrecta', () => {
    console.log('valida clave incorrecta');
    return LogIn('nataliasita04@gmail.com', password).catch((error) => {
      expect(error).toEqual('auth/wrong-password');
    });
  });
  test('Correo no registrado', () => {
    console.log('valida correo no registrado');
    return LogIn('correo_no_existente@gmail.com', password).catch((error) => {
      expect(error).toEqual('auth/user-not-found');
    });
  });
});

/*  -------  Pruebas de Google   ----------   */
describe('LogInGoogle', () => {
  it('debería ser una función', () => {
    expect(typeof Information).toBe('function');
  });
  test('Promise then LogInGoogle', () => {
    console.log('valida login');
    return LogInGoogle('mavalezea@gmail.com', 'nutella98').then(() => {
      // expect(result.user.emailVerified).toBeTruthy();
      // expect(result.credential.accessToken).not.toBeNull();
      // expect(window.location.hash).resolves.toBe('#home');
    });
    // return expect(LogInGoogle('mavalezea@gmail.com', 'nutella98').resolves.toBe();
  });
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
