

export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        case '[newTodo]':
            return [ ...initialState, action.payload ];
            
        case '[deleteTodo]':
            return initialState.filter( todo => todo.id !== action.payload );
        
        case '[doneTodo]':
            return initialState.map( todo => {
                
                if( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo; 
            } )

        default:
            return initialState
    }
    
}