import React from 'react'
import { Todo } from '../model'
interface Props{
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo = ({todo, todos, setTodos}: Props) => {
    return <form className='todos__single'>
        <span className='todos__single__text'>
           {todo.todo} 
        </span>
        </form>
}

export default SingleTodo
