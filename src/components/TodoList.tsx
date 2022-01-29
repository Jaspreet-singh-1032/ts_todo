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
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Active tasks</span>
        {todos.map((item) => {
          return (
            !item.isDone && (
              <SingleTodo todo={item} todos={todos} setTodos={setTodos} />
            )
          );
        })}
      </div>
      <div className="todos completed">
        <div className="todos__heading">Completed tasks</div>
        {todos.map((item) => {
          return (
            item.isDone && (
              <SingleTodo todo={item} todos={todos} setTodos={setTodos} />
            )
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
