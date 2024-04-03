import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { removeTodo, handleCheckbox } from "../Redux/todoapp/actions";

const TaskList = ({ handleEditClick, editFormVisibility }) => {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // getting todos from the store
  const todos = useSelector((state) => state.operationsReducer);

  return (
    <div className="task-list-container">
      {todos.map((todo) => (
        <div key={todo.id} className="todo-box">
          <div className="content">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(handleCheckbox(todo.id))}
            />
            <p
              style={
                todo.completed
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {todo.todo}
            </p>
          </div>
          <div className="actions-box">
            {!editFormVisibility && (
              <>
                <span onClick={() => handleEditClick(todo)}>
                  <FontAwesomeIcon icon={faEdit} />
                </span>
                <span onClick={() => dispatch(removeTodo(todo.id))}>
                  <FontAwesomeIcon icon={faTrash} />
                </span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
