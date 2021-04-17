import React from "react";
import { Todolist } from "../Component/Todolist";

/*This function is used to hold the Todolist.js   */

export const Todos = (props) => {
  const disp = {
    fontSize: "18px",
    paddingLeft: "450px",
    paddingBottom: "30px",
  };

  const myStyle = {
    color: "#FC7A4A",
    padding: "20px",
    fontSize: "28px",
  };

  return (
    <div>
      <h3 style={myStyle}>Todo List</h3>
      {props.todo_item.length === 0 ? (
        <h1 style={disp}>You haven't added anything to your todo!</h1>
      ) : (
        props.todo_item.map((todo) => {
          return (
            <Todolist todo={todo} key={todo.no} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
};
