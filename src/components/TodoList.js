import React from "react";
import { Container } from "react-bootstrap";
import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <Container className="mt-3">
      {props.list.map((todo) => (
        <Todo
          key={todo.id}
          todoTask={todo}
          toEdit={props.toEdit}
          toRemove={props.toRemove}
          activity={props.activity}
        />
      ))}
    </Container>
  );
}
