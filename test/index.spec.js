// importamos la funcion que vamos a testear
import { crearUsuario } from "../src/firebaseController/firebaseFunctions";


describe('Registrarse', () => {
  it('Deberia poder crear una cuenta', () => crearUsuario('correo@correo.com', '123abc')
    .then((user) => {
      expect(user.email).toBe('correo@correo.com');
    }));
});
