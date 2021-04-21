// importamos la funcion que vamos a testear
import { Information } from '../src/lib/index';

const email = 'nomadas123x@gmail.com';
const password = 'colombia123';

describe('Information', () => {
  it('debería ser una función', () => {
    expect(typeof Information).toBe('function');
  });
  test('Promise then information', () => {
    Information(email, password).then((user) => {
      expect(user.email).toEqual(email);
    });
  });
  test('Promise catch information', () => {
    Information('garavitobarretonatalia@gmail.com', password).catch((error) => {
      expect(error).toEqual('auth/email-already-in-use');
    });
  });
});
/*
describe('assignName', () => {
  it('debería ser una función', () => {
    expect(typeof assignName).toBe('function');
  });
  test('asigna nombre usuario', () => {
    assignName('Valentina Zea').then((user) => {
      expect(user.displayName).toBe('Valentina Zea');
    });
  });
}); */
