import { singUp, authGoogle, login } from "../src/Firebase/Services.js";
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
    test('singUp es una función', () => {
        expect(typeof singUp).toBe("function");
    });
    test('deberia de loguearme', () => {
        const promesa = singUp({
            email: 'dayana@gmail.com',
            password: '123456'
        });
        return promesa
            .then((response) => {
                expect(typeof promesa).toBe("object");
                expect(response.email).toBe("dayana@gmail.com", "123456")
            })
    });
})

describe('register con gmail', () => {
    test('authGoogle es una función', () => {
        expect(typeof authGoogle).toBe("function");
    });
    test('deberia de loguearme con Gmail', () => {
        const promesa = authGoogle({
            providerId: 'google.com',
        });
        return promesa
            .then(() => {
                expect(typeof promesa).toBe("object");
                expect("").toBe("")
            })
    });
})

describe('login', () => {
    test('login es una función', () => {
        expect(typeof login).toBe("function");
    });
    test('deberia de loguearme', () => {
        const promesa = login({
            email: 'dayana@gmail.com',
            password: '123456'
        });
        return promesa
            .then((response) => {
                expect(typeof promesa).toBe("object");
                expect(response.email).toBe("dayana@gmail.com", "123456")
            })
    });
})