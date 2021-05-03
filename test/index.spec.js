// importamos la funcion que vamos a testear
// import { Router } from "./components/Router.js";

describe("Prueba de navegacion", () => {
  beforeEach(() => {
    global.firebase = {
      auth: jest.fn(),
    };
  });
  it("Rutas protegidas por sesion", () => {
    global.firebase.auth.mockImplementation(() => ({
      currentUsser: null,
    }));
  });
  it("Usuario nuevo con correo y contraseña", () => {
    global.firebase.auth.mockImplementation(() => ({
      currentUsser: "hohjanna@hotmail.com",
      passwordUsser: "3312123",
    }));
  });
});
