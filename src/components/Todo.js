import React from "react";
import { Container, Row } from "react-bootstrap";

import { connect } from "react-redux";
import classes from "../ui/App.module.css";

import { toggleTodo } from "../redux/todo/actions";

function Todo(props) {
  return (
    <Container className={classes.TodoCon}>
      <Row onClick={() => props.toggle(props.row.id)}>
        {props.row && props.row.isComplete ? (
          <span style={{ color: "green" }}>Done</span>
        ) : (
          <span style={{ color: "red" }}>To Do </span>
        )}
        -{props.row.content}
      </Row>
    </Container>
  );
}

const mapState = (dispatch) => ({
  toggle: (id) => dispatch(toggleTodo(id)),
});

export default connect(null, mapState)(Todo);
