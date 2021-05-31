import mockFirebase from 'firebase-mock';
import {
  register,
  Login,
  registerGoogle,
  signOut,
} from '../src/index.js';

global.firebase = {
  auth: () => {
    const newMockFirebase = new mockFirebase.MockAuthentication();
    return newMockFirebase;
  },
};

describe('Registrarse', () => {
  it('Deberia crear un nuevo usuario', () => {
    register('lupe@gmail.com', 'contraseña');

    firebase.auth().getUserByEmail('lupe@gmailcom').then((user) => {
      expect(user).toBe('ben was created');
    });
  });
});

describe('Registrarse con google', () => {
  it('Deberia crear un nuevo usuario con google', () => {
    registerGoogle('provider');

    firebase.auth().signInWithPopup('rosanny.oropeza82@gmail.com').then((user) => {
      expect(user).toBe('ben was created');
    });
  });
});

describe('Iniciar sesión', () => {
  it('Deberia iniciar sesión con un usuario registrado', () => {
    Login('sara2020@gmail.com', 'contraseña');

    firebase.auth().signInWithEmailAndPassword('sara2020@gmail.com').then((user) => {
      expect(user).toBe('sign in sucess');
    });
  });
});

describe('Cerrar sesión', () => {
  it('Deberia cerrar sesión', () => {
    signOut();

    firebase.auth().signOut().then((user) => {
      expect(user).toBe('sign Out sucess');
    });
  });
});
