// importamos la funcion que vamos a testear
import { init } from '../src/main.js';

describe('Init', () => {
  it('debería ser una función de inicializar', () => {
    expect(typeof init).toBe('function');
  });
});
