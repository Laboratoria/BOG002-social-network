// importamos la funcion que vamos a testear
import { singUp } from "../src/Firebase/Services.js";

describe("Se crea nuevo usuario", () => {
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
    it.only("Usuario nuevo con correo y contraseña", () => {
        const email = 'hohjanna@gmail.com';
        const password = '123456';


        expect(singUp(email, password)).toBe([]);
    });

    it("Este es un test que va a pasar", () => {
        console.log("Hola mundo")
    })

    const mockGoogle = [

        "email",
        "family_name",
        "given_name",
        "granted_scopes",
        "id",
        "locale",
        "name",
        "picture",
        "verified_email"
    ]

    it("Usuario registrado con Google", () => {
        global.firebase.auth.mockGoogle(() => ({

        }));

    })
});