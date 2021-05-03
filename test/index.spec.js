// importamos la funcion que vamos a testear
import { register } from '../src/index.js';



describe('casos de prueba registro', () => {
  it('registro de usuario nuevo', () => {
    let datos = register('sergio@gmail.com','contraseña') 
    expect (typeof datos).toBe (Promise)
  });
});

//export const register = (email, password) => {
//  return firebase.auth().createUserWithEmailAndPassword(email, password);
//};