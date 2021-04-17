import "./App.css";
import { Header } from "./Component/Header";
import { Todos } from "./Component/Todos";
import { Addtodo } from "./Component/Addtodo";
import React, { useState, useEffect } from "react";

function App() {
  /*Local Storage to store Todo */

  let initialTodo;

  if (localStorage.getItem("todos") === null) {
    initialTodo = [];
  } else {
    initialTodo = JSON.parse(localStorage.getItem("todos"));
  }

  /*To Delete the particular todo */
  let onDelete = (todo) => {
    console.log("Delete", todo);

    setCount(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  /* ADD TODO FUNCTION */

  const addtodo = (title, desc, date, status) => {
    let no;

    if (todos.length === 0) {
      no = 0;
    } else {
      no = todos[todos.length - 1].no + 1;
    }

    const mylist = {
      no: no,
      title: title,
      desc: desc,
      date: date,
      status: status,
    };
    setCount([...todos, mylist]);
    console.log(mylist);
  };

  const [todos, setCount] = useState(initialTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header />
      <Addtodo addtodo_item={addtodo} />
      <Todos todo_item={todos} onDelete={onDelete} />
    </>
  );
}

export default App;
