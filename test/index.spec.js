// importamos el mock creado para testear

import MockFirebase from "../_mocks_/firebase-mock";

// importamos la funcion que vamos a testear
import { crearUsuario, nuevoIngreso, providerFacebook } from "../src/firebaseController/firebaseFunctions";

global.firebase = MockFirebase();
// testeando funcion de registro con email and pwd
// eslint-disable-next-line no-undef
describe("Registrarse", () => {
  // eslint-disable-next-line no-undef
  it("Deberia poder crear una cuenta", () => {
    crearUsuario("correo@correo.com", "123abc").then((user) => {
      // eslint-disable-next-line no-undef
      expect(user.isNewUser).toBe(true);
    });
  });
});
// testeando ingreso
// eslint-disable-next-line no-undef
describe("ingresar con email", () => {
  // eslint-disable-next-line no-undef
  it("Deberia poder ingresar con email registrado", () => {
    nuevoIngreso("correo@correo.com", "123abc").then((user) => {
      // eslint-disable-next-line no-undef
      expect(user.operationType).toBe("signIn");
    });
  });
});

describe("ingresar con facebook", () => {
  it("ingresar con usuario de Facebbok", () => {
    providerFacebook().then((credential) => {
      console.log(credential);
      expect(credential).toBe("signIn");
    });
  });
});
