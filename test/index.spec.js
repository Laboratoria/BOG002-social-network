// importamos la funcion que vamos a testear
import { Information } from '../src/auth/newUser.js';
import { configurationFireBase } from '../src/firebase/config.js';

const { mockFirebase } = require('firestore-jest-mock');
const firebase = require('firebase');
// const firebase = require('firestore-jest-mock');
global.firebase = firebase;
configurationFireBase();

// Create a fake Firestore with a `users` and `posts` collection
mockFirebase({
  database: {
    posts: [{ id: '123abc', title: 'Really cool title' }],
  },
});

const email = 'nomadas12j@gmail.com';
const password = 'colombia123';
const name = 'valen';

describe('Information', () => {
  it('debería ser una función', () => {
    expect(typeof Information).toBe('function');
  });
  test('Promise then information', () => {
    console.log('hola mundo');
    return Information(email, password, name).then((user) => {
      expect(user.email).toEqual(email);
      expect(user.displayName).toEqual(name);
    });
  });
  test('Promise catch information', () => {
    console.log('hola mundo');
    return Information('garavitobarretonatalia@gmail.com', password).catch((error) => {
      expect(error).toEqual('auth/email-already-in-use');
    });
  });
  // test('asigna nombre usuario', () => {
  //   return Information(email, password).then((user) => {
  //     expect(user.email).toEqual(email);
  //   });
});

// describe('assignName', () => {
//   it('debería ser una función', () => {
//     expect(typeof assignName).toBe('function');
//   });
//   });
// });
// console.log(mockFirebase);
// const { mockCollection } = require('firestore-jest-mock/mocks/firestore');
/*
test('testing stuff', () => {
  const firebase = require('firebase'); // or import firebase from 'firebase';
  const db = firebase.firestore();

  return db
    .collection('users')
    .get()
    .then(userDocs => {
      // Assert that a collection ID was referenced
      expect(mockCollection).toHaveBeenCalledWith('users');

      // Write other assertions here
    });
}); */
