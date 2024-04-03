import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, handleEditSubmit } from "../Redux/todoapp/actions";

const TaskInput = ({ editFormVisibility, editTodo, cancelUpdate }) => {
  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // todo value state for normal add todo form
  const [todoValue, setTodoValue] = useState("");

  // state for if someone changes the (to edit) value in update form
  const [editValue, setEditValue] = useState("");

  // useEffect is to show the (to edit) value in update form
  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  // normal add todo submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };

  // update form submit
  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: false,
    };
    dispatch(handleEditSubmit(editedObj));
  };

  return (
    <>
      {editFormVisibility === false ? (
        <form className="form-group custom-form" onSubmit={handleSubmit}>
          <label>Add your todo-items</label>
          <div className="input-and-btn">
            <input
              type="text"
              className="form-control"
              required
              value={todoValue}
              onChange={(e) => setTodoValue(e.target.value)}
            />
            {/* Add margin-right to create space between input and button */}
            <button
              type="submit"
              className="btn btn-success btn-md"
              style={{ marginLeft: "10px" }}
            >
              ADD
            </button>
          </div>
        </form>
      ) : (
        <form className="form-group custom-form" onSubmit={editSubmit}>
          <label>Update your todo-items</label>
          <div className="input-and-btn">
            <input
              type="text"
              className="form-control"
              required
              value={editValue || ""}
              onChange={(e) => setEditValue(e.target.value)}
              style={{
                border:
                  editTodo.id === editValue
                    ? "2px solid yellow"
                    : "1px solid #ced4da",
              }} // Corrected condition
            />
            {/* Add margin-right to create space between input and button */}
            <button
              type="submit"
              className="btn btn-warning btn-md"
              style={{ marginLeft: "10px" }}
            >
              UPDATE
            </button>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-md back-btn"
            onClick={cancelUpdate}
          >
            BACK
          </button>
        </form>
      )}
    </>
  );
};

export default TaskInput;
