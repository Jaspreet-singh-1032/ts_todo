import React, { useState, useRef, useEffect } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./SingleTodo.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const editInputRef = useRef<HTMLInputElement>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>(todo.todo);
  const handleDone = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDelete = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos(
      todos.map((item) =>
        item.id === todo.id ? { ...item, todo: editedTodo } : item
      )
    );
    setEdit(false);
  };

  useEffect(() => {
    editInputRef.current?.focus();
  }, [edit]);
  return (
    <form className="todos__single" onSubmit={handleSubmit}>
      {edit ? (
        <input
          type="text"
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
          className="todos__single__text"
          ref={editInputRef}
        />
      ) : todo.isDone ? (
        <s className="todos__single__text">{todo.todo}</s>
      ) : (
        <span className="todos__single__text">{todo.todo}</span>
      )}
      <div>
        <span className="icon">
          <AiFillEdit
            onClick={() => {
              if (!todo.isDone) {
                setEdit(!edit);
              }
            }}
          />
        </span>
        <span className="icon">
          <AiFillDelete onClick={handleDelete} />
        </span>
        <span className="icon">
          <MdDone onClick={handleDone} />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
