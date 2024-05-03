import { getSaludo } from "../../src/bases/02-template-string";

describe('Pruebas en 02-template-strings', () => {

    test('getSaludo debe ser retornar "Hola Fernando"',  () => {

        const name =  'Fernando';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${ name }!!!`)
    })
})