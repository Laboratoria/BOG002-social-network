// importamos el mock manual que creamos
import MockFirebase from '../_mock_/firebase-mock.js'
global.firebase = MockFirebase();

// importamos la funcion que vamos a testear
import { myFunction } from '../src/lib/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});

describe(' expresion regular', () => {
  test('debería retornar el email', () => {
    expect("ejemplo@gmail.com").toBe('function');
  });
});

// usar --watch para ver el teste en vivo.
// jest.fn() funcion tipo mock, MockResolveValue