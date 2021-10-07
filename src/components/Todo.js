import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { connect } from "react-redux";
import classes from "../ui/App.module.css";

import { toggleTodo } from "../redux/todo/actions";

function Todo(props) {
  return (
    <Container className={classes.TodoCon}>
      <Row onClick={() => props.toggleTodo(props.row.id)}>
        {props.row && props.row.isComplete ? (
          <span style={{ color: "green" }}>Done</span>
        ) : (
          <span style={{ color: "red" }}>To Do </span>
        )}
        -{props.row.content}
        <Col xs lg="1">
          {/* <i
            className="far fa-edit"
            onClick={() => props.toEdit(props.todoTask.id)}
          ></i> */}
        </Col>
        <Col xs lg="1">
          {/* <i
            className="far fa-trash-alt"
            onClick={() => props.toRemove(props.todoTask.id)}
          ></i> */}
        </Col>
      </Row>
    </Container>
  );
}

const mapState = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(null, mapState)(Todo);
