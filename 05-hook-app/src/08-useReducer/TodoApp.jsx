import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../Hooks/useTodo"


export const TodoApp = () => {

    const { todos, todosCount, pendingTodoCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodo()
    
  return (
    <>
        <h1>TodoApp: {todosCount} <small>pendientes: {pendingTodoCount}</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                todos={ todos } 
                onDeleteTodo={ handleDeleteTodo }
                onToggleTodo={ handleToggleTodo }
                />
            </div>
            <div className="col-5">
                <h4>Agregar ToDo</h4>
                <hr />

                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>

        </div>
       
    </>
  )
}
