import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <Container className="mt-3">
      <ul>
        {props.todos && props.todos.length ? (
          props.todos.map((row, index) => {
            return <Todo key={index} row={row} />;
          })
        ) : (
          <li>nothing</li>
        )}
      </ul>
    </Container>
  );
}

const mapState = (state) => ({ todos: state.data });
export default connect(mapState)(TodoList);
