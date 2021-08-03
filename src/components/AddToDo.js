import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "../ui/App.module.css";
import TodoList from "./TodoList";
import MyForm from "./Form";

export default function AddToDo() {
  const [todoState, setTodoState] = useState([
    { id: 1, job: "will do it ", isActive: true },
    { id: 2, job: "Maybe tomorow", isActive: true },
    { id: 3, job: "never", isActive: true },
  ]);
  const [editModeState, setEditState] = useState({ id: "", isInMode: false });

  const addTo = (e) => {
    e.preventDefault();
    if (e.target[0].value !== "") {
      let randomId = Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
      setTodoState((prevState) => {
        return [
          ...prevState,
          { id: randomId, job: e.target[0].value, isActive: false },
        ];
      });
    } else {
      alert("Please insert somthing");
    }
  };

  const inputEl = useRef("inputEl");
  const toEdit = (id) => {
    for (let todo of todoState) {
      if (todo.id === id) {
        inputEl.current.value = todo.job;
        setEditState({ id: id, isInMode: true });
      }
    }
  };

  const editTodo = (e) => {
    e.preventDefault();
    let allTodo = todoState;
    for (let todo of allTodo) {
      if (todo.id === editModeState.id) {
        todo.job = inputEl.current.value;
      }
    }
    setTodoState(allTodo);
    setEditState({ id: "", isInMode: false });
    inputEl.current.value = "";
  };

  const toRemove = (id) => {
    let allTodo = todoState;

    for (let todo of allTodo) {
      if (todo.id === id) {
        let delIndex = allTodo.indexOf(todo);
        allTodo.splice(delIndex, 1);
        setTodoState(() => {
          return [...allTodo];
        });
      }
    }
  };

  const activity = (id) => {
    let allTodo = todoState;
    for (let todo of allTodo) {
      if (todo.id === id) {
        todo.isActive = !todo.isActive;
      }
    }
    setTodoState(() => {
      return [...allTodo];
    });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={{ span: 5 }} className={classes.AddToDo}>
          <MyForm
            addTo={addTo}
            editModeState={editModeState}
            editTodo={editTodo}
            inputEl={inputEl}
          />
        </Col>
        <Col md={{ span: 5, offset: 1 }} className={classes.ToDoList}>
          <TodoList
            list={todoState}
            toEdit={toEdit}
            toRemove={toRemove}
            activity={activity}
          />
        </Col>
      </Row>
    </Container>
  );
}
