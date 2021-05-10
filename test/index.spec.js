// importamos la funcion que vamos a testear

const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
    // use null if your code does not use RTDB
    path => (path ? mockdatabase.child(path) : null),
    () => mockauth,
    () => mockfirestore
);

import { login } from "../src/Firebase/Services.js";

describe('lista de notas', () => {
    it('Debería poder registrarse', () => {
        return login('mica19@hotmail.com', '123456')
            .then((user) => {
                expect(user.email).toBe('mica19@hotmail.com');
            });
    });
});














/*import { singUp } from "../src/Firebase/Services.js";
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockAuthentication();
const mocksdk = new firebasemock.MockFirebaseSdk(
    () => {
        return null;
    },
    () => {
        return mockauth;
    }
);
mockauth.autoFlush();
global.firebase = mocksdk;

describe('register', () => {

    test('deberia de loguearme', () => {
        const promesa = singUp({
            email: 'dayana@gmail.com',
            password: '123456'
        });
        return promesa
            .then((promesa) => {
                console.log(promesa);
                //console.log(usuario);
                //console.log(user);
                //expect(typeof promesa).toBe("object");
                //expect(usuario.email).toBe("dayana@gmail.com")
            })
    })
});







/*describe("Se crea nuevo usuario", () => {
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
});*/