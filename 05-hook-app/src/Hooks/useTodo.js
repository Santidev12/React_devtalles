import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}


export const useTodo = () => {
    const [todos, dispatch] = useReducer( todoReducer, [], init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ));

    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[newTodo]',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[deleteTodo]',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[doneTodo]',
            payload: id
        })
    }


    return {
        todos,
        todosCount: todos.length,
        pendingTodoCount: todos.filter(todo => !todo.done).length,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}

