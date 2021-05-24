import mockFirebase from 'firebase-mock';
import {
  register,
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
