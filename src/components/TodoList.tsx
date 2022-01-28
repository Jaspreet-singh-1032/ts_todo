import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./TodoList.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((item) => {
        return (
          <SingleTodo
            key={item.id}
            todo={item}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
