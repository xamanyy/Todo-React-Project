import React from "react";
import "./css_Component/Todolist.css";

/* Function to hold all the TodoItem and other utilities */

export const Todolist = ({ todo, onDelete }) => {
  return (
    <div className="container">
      <div className="cont">
        <h4>
          <span className="cta">Title:</span> {todo.title}
        </h4>
        <h4>
          <span className="cta_1">Description:</span> {todo.desc}
        </h4>
        <h4>
          <span className="cta_2">Due Date: </span>
          {todo.date}
        </h4>
        <h4>
          <span className="cta_3">Status:</span> {todo.status}
        </h4>
        <button
          type="button"
          className="btn"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
