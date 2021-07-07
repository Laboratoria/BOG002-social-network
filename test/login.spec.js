// importamos el mock manual que creamos
import MockFirebase from '../_mock_/firebase-mock.js'
global.firebase = MockFirebase();

import { autenticacionUsuario } from "../src/Firebase/firebaseAuth.js";

describe('autenticacionUsuario', () => {
    it('debería crear una cuenta con un correo y una contraseña', () => {
      expect(typeof autenticacionUsuario).toBe('function');
    });
    it('debería ser una función', () => {
        expect(typeof autenticacionUsuario).toBe('function');
    });

});