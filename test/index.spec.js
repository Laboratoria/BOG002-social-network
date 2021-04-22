// importamos el mock creado para testear

import MockFirebase from '../_mocks_/firebase-mock.js';

global.firebase = MockFirebase();

// importamos la funcion que vamos a testear
import { crearUsuario } from "../src/firebaseController/firebaseFunctions";

describe('Registrarse', () => {
  it('Deberia poder crear una cuenta', () => {
    return crearUsuario('correo@correo.com', '123abc').then((user) => {
      expect(user.isNewUser).toBe(true);
    });
  });
});
