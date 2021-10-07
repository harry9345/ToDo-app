import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import classes from "../ui/App.module.css";
import TodoList from "./TodoList";

import { insertTodo } from "../redux/todo/actions";

class AddToDo extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  };
  clickHandler = (e) => {
    e.preventDefault();
    this.props.insertTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md={{ span: 5 }} className={classes.AddToDo}>
            <input
              type="text"
              value={this.state.input}
              onChange={this.changeHandler}
            />
            <Button variant="outline-secondary" onClick={this.clickHandler}>
              New
            </Button>
          </Col>
          <Col md={{ span: 5, offset: 1 }} className={classes.ToDoList}>
            <TodoList />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(null, { insertTodo })(AddToDo);
