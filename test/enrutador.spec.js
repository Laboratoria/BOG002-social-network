import { router } from '../src/lib/enrutador.js';

describe('enrutador', () => {
  it('debería ser una función', () => {
 
    expect(typeof router.isValid).toBe('Object');
  });

    it.skip('Pintarme un console.log si esta enrutando donde deberia', () => {
      expect(typeof init).toBe('function');
    });
  });
  /*describe('isValidpruebita', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });
    it('debería retornar true para "4083952015263"', () => {
      
    });
    
    it('debería retornar true para "79927398713"', () => {
      // escribe aquí tu test
    });

    it('debería retornar false para "1234567890"', () => {
      // escribe aquí tu test
    });
  });*/