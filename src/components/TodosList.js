import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleCheck,
    faPenToSquare,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
    const handleComplete = ({ id }) => {
        setTodos(todos.map((item) => {
            if (item.id === id) {
                return { ...item, completed: !item.completed };
            }
            return item;
      }));
    };
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
  return (
    <div>
      {todos.map((todo) => (
        <li className="todo-list" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? 'complete' : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <FontAwesomeIcon icon={faCircleCheck} />
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}


export default TodosList;
