import { retornaArreglo } from "../../src/bases/07-deses-arr"

describe('Pruebas en 07-deses-arr.js', () => {
    test('debe de retornar un string y un numero', () => {
            const [ letters, numbers ] = retornaArreglo(); 

            expect( letters ).toBe( 'ABC' );
            expect( numbers ).toBe( 123 );

            expect(typeof letters).toBe( 'string' );
            expect(typeof numbers).toBe( 'number' );
    })
})