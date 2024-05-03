import { getHeroeById, getHeroesByOwner } from "../../src/bases/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Puerbas en 08-imp-exp.js', () => {
    test('getHeroeById debe de retornar un heroe por ID', () => {
         

        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById debe de retornar undefined si no existe el heroe 100', () => {
         

        const id = 100;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy()
    });

    //Tarea

    test('getHeroeByOwner debe de retornar heroes de DC', () => {
         

        const owner = 'DC';
        const hero = getHeroesByOwner( owner );

        expect( hero.length ).toBe( 3 )
        expect( hero ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }])

        expect( hero ).toEqual( hero.filter ( (heroe) => heroe.owner === owner))
    });

    test('getHeroeByOwner debe de retornar heroes de DC', () => {
         

        const owner = 'Marvel';
        const hero = getHeroesByOwner( owner );

        expect( hero.length ).toBe( 2 )

        expect( hero ).toEqual([
            {id: 2, name: 'Spiderman',owner: 'Marvel'},
            {id: 5, name: 'Wolverine', owner: 'Marvel'
    }])
    })

    
})