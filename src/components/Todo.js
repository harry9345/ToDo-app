import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import classes from "../ui/App.module.css";

export default function Todo(props) {
  let active;
  if (props.todoTask.isActive) {
    active = (
      <>
        <Col className={classes.Active}>{props.todoTask.job}</Col>
        <Col xs lg="1" className={classes.Active}>
          <i
            className="fas fa-power-off"
            onClick={() => {
              props.activity(props.todoTask.id);
            }}
          ></i>
        </Col>
      </>
    );
  } else {
    active = (
      <>
        <Col className={classes.NotActive}>{props.todoTask.job}</Col>
        <Col xs lg="1">
          <i
            className="fas fa-power-off"
            onClick={() => {
              props.activity(props.todoTask.id);
            }}
          ></i>
        </Col>
      </>
    );
  }

  return (
    <Container id={props.todoTask.id} className={classes.TodoCon}>
      <Row>
        {active}

        <Col xs lg="1">
          <i
            className="far fa-edit"
            onClick={() => props.toEdit(props.todoTask.id)}
          ></i>
        </Col>
        <Col xs lg="1">
          <i
            className="far fa-trash-alt"
            onClick={() => props.toRemove(props.todoTask.id)}
          ></i>
        </Col>
      </Row>
    </Container>
  );
}
