/* eslint-disable jsx-a11y/alt-text */

/*This function is used to take and show the user input */

import React, { useState } from "react";
import ReactModal from "react-modal";
import logo from "./svg/radicalli.jpg";
import "./css_Component/Addtodo.css";

if (process.env.NODE_ENV !== "test") ReactModal.setAppElement("#root");

export const Addtodo = ({ addtodo_item }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const [modalIsOpen, setModel] = useState(false);

  /*Fuction to Check Input from User */

  const submit = () => {
    if (!title || !desc || !date || !status) {
      window.alert("Required to Fill all");
    } else {
      setModel(true);
    }
  };

  /* Function to add todo from user Input  */
  const action = () => {
    addtodo_item(title, desc, date, status);
    console.log(addtodo_item);
    setTitle("");
    setDesc("");
    setDate("");
    setStatus("");
    setModel(false);
  };

  return (
    <div className="container">
      <h3>Add Todo</h3>
      <form className="fm">
        <div className="cta_1">
          <label htmlFor="title" className="cta-title">
            Title
          </label>
          <br />
          <input
            type="text"
            id="title"
            value={title}
            className="inpt-title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Write title for your todo"
            autoComplete="off"
          />
        </div>

        <div className="cta_2">
          <label htmlFor="desc" className="cta-desc">
            Description
          </label>
          <br />
          <input
            type="text"
            id="desc"
            value={desc}
            className="inpt-desc"
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Little description"
            autoComplete="off"
          />
        </div>

        <div className="cta_3">
          <label htmlFor="date" className="cta-date">
            Due Date
          </label>
          <br />
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="inpt-date"
            autoComplete="off"
          />
        </div>

        <div className="cta_2">
          <label htmlFor="status" className="cta-desc">
            Status
          </label>
          <br />

          <input
            type="text"
            id="status"
            value={status}
            className="inpt-desc"
            onChange={(e) => setStatus(e.target.value)}
            placeholder="E.g. OnGoing , Stalled ,ToDo ,Done"
            autoComplete="on"
          />
        </div>
      </form>
      <button
        type="submit"
        className="btn_a"
        onClick={() => {
          submit();
        }}
      >
        Add Todo
      </button>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModel(false);
        }}
      >
        <h1 style={{ color: "black", alignItems: "center" }}>TODO Summary</h1>
        <h3 style={{ color: "black", alignItems: "center" }}>Title: {title}</h3>
        <h3 style={{ color: "black", alignItems: "center" }}>
          Desciption: {desc}
        </h3>
        <h3 style={{ color: "black", alignItems: "center" }}>Date: {date}</h3>
        <h3 style={{ color: "black", alignItems: "center" }}>
          Status: {status}
        </h3>

        <img
          src={logo}
          style={{
            position: "absolute",
            top: "170px",
            right: "180px",
            height: "35%",
            alt: "logo",
          }}
        />

        <button
          className="btn-action"
          onClick={() => {
            action();
          }}
        >
          Save
        </button>
        <button
          className="btn-close"
          onClick={() => {
            setModel(false);
          }}
        >
          Close
        </button>
      </ReactModal>
    </div>
  );
};

export default Addtodo;
