import { todoReducer } from '../../src/08-useReducer/todoReducer'

describe('Pruebas en todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]

    test('debe de regresar el estado inicial', () => { 
        
        const newState = todoReducer( initialState, {})
        expect( newState ).toBe( initialState ) 
     });

     test('debe de agregar un todo', () => { 
        
        const action = {
            type: '[newTodo]',
            payload: {
                id: 2,
                description: 'Demo todo',
                done: false
            }
        }

        const newState = todoReducer( initialState, action)
        expect( newState.length ).toBe(2);
        expect( newState ).toContain(action.payload);

      })

      test('debe de eliminar un todo', () => { 
        const action = {
            type: '[deleteTodo]',
            payload: 1
        }

        const newState = todoReducer( initialState, action)
        expect( newState.length ).toBe(0);
       })

      test('debe de realizar el toggle del todo', () => { 
        const action = {
            type: '[doneTodo]',
            payload: 1
        }

        const newState = todoReducer( initialState, action)
        expect( newState[0].done ).toBe(true);
       })
 })