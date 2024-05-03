const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("../../src/08-useReducer/TodoItem");

describe('Pruebas en TodoItem', () => { 

    const todo = {
        id: 1,
        description: 'Piedra del alma',
    }

    const onDeleteTodoMock = jest.fn()   
    const onToggleTodoMock = jest.fn()   
    
    beforeEach( () => jest.clearAllMocks() );

    test('debe de mostrar el TODO pendiente de completar', () => { 
       
        render( <TodoItem 
                    todo={ todo } 
                    onDeleteTodo={ onDeleteTodoMock } 
                    onToggleTodo={ onToggleTodoMock } 
                />
            )

            const liElement = screen.getByRole('listitem')
            expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')

            const spanElement = screen.getByLabelText('span')
            expect( spanElement.className ).toContain("align-self-center")
     });
     

     test('debe de mostrar el TODO completado', () => { 

        todo.done = true
       
        render( <TodoItem 
                    todo={ todo } 
                    onDeleteTodo={ onDeleteTodoMock } 
                    onToggleTodo={ onToggleTodoMock } 
                />
            )

            const spanElement = screen.getByLabelText('span')
            expect( spanElement.className ).toContain("align-self-center")

     });

     test('span debe de llamar el toggleTodo cuando se hace click', () => { 

        render( <TodoItem 
                    todo={ todo } 
                    onDeleteTodo={ onDeleteTodoMock } 
                    onToggleTodo={ onToggleTodoMock } 
                />
            );

            const spanElement = screen.getByLabelText('span')
           fireEvent.click( spanElement );
           
           expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )
 
     });

     test('button debe de llamar al deletTodo', () => { 

        render( <TodoItem 
                    todo={ todo } 
                    onDeleteTodo={ onDeleteTodoMock } 
                    onToggleTodo={ onToggleTodoMock } 
                />
            );

            const button = screen.getByRole('button')
            fireEvent.click( button );
           
           expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id )
            screen.debug()

 
     });

     
 })