// import { LogIn } from '../src/auth/logInUser.js';
// import { createUser } from '../src/auth/newUser.js';

// const { mockFirebase } = require('firestore-jest-mock');
// const {
//   mockSignInWithEmailAndPassword
// } = require('firestore-jest-mock/mocks/auth');


// mockFirebase({
//   database: {
//     users: [
//       {
//         id: 'abc123', name: 'Homer Simpson', email: 'correo@prueba.com', password: '1234567',
//       },
//       { id: 'abc456', name: 'Lisa Simpson' },
//     ],
//     posts: [{ id: '123abc', title: 'Really cool title' }],
//   },
// });
// const firebase = require('firebase');

// global.firebase = firebase;
// const email = 'testnomadas0123467s@gmail.com';
// const password = 'colombia123';
// // const name = 'valen';
// /*  -------  Pruebas de Registro   ----------   */
// describe('createUser', () => {
//   it('debería ser una función', () => {
//     expect(typeof createUser).toBe('function');
//   });
//   test('Promise then information', () => {
//     console.log('then en registro');
//     return createUser(email, password).then((user) => {
//       expect(typeof user).toBe('object');
//     });
//   });
//   test('Promise catch information', () => {
//     console.log('Catch en Registro');
//     return createUser('garavitobarretonatalia@gmail.com', password).catch((error) => {
//       expect(error).toEqual('auth/email-already-in-use');
//     });
//   });
// });

// /*  -------  Pruebas de LogIn  ----------   */
// describe('LogIn', () => {
//   it('debería ser una función', () => {
//     expect(typeof LogIn).toBe('function');
//   });
//   test('Promise then LogIn', () => {
//     console.log('valida login');
//     return LogIn(email, password).then((user) => {
//       expect(typeof user).toBe('object');
//     });
//   });
//   test('Clave Incorrecta', () => {
//     mockSignInWithEmailAndPassword.mockImplementationOnce( ()=> {
//       return Promise.reject(new Error('auth/wrong-password'));
//     });
//     console.log('valida clave incorrecta');
//     return LogIn('nataliasita04@gmail.com', password).catch((error) => {
//       expect(error.code).toBe('auth/wrong-password');
//     });
//   });
//   test('Correo no registrado', () => {
//     mockSignInWithEmailAndPassword.mockImplementationOnce( ()=> {
//       return Promise.reject(new Error('auth/user-not-found'));
//     });
//     console.log('valida correo no registrado');
//     return LogIn('correo_no_existente@gmail.com', password).catch((error) => {
//       expect(error.code).toEqual('auth/user-not-found');
//     });
//   });
// });

