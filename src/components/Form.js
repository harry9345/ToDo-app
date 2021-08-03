import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function MyForm(props) {
  let form = (
    <Form className="mt-3" onSubmit={props.addTo}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-muted">Add Your Todo Here :</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Todo"
          ref={props.inputEl}
        />
        <Form.Text className="text-muted">
          You Will Never Miss Anything Again
        </Form.Text>
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        ADD
      </Button>
    </Form>
  );
  if (props.editModeState.isInMode) {
    form = (
      <Form className="mt-3" onSubmit={props.editTodo}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-muted">Edit Your Todo Here :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Edit Todo"
            ref={props.inputEl}
          />
          <Form.Text className="text-muted">You Can Edit Now!</Form.Text>
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Edit
        </Button>
      </Form>
    );
  } else {
    <Form className="mt-3" onSubmit={props.addTo}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-muted">Add Your Todo Here :</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Todo"
          ref={props.inputEl}
        />
        <Form.Text className="text-muted">
          You Will Never Miss Anything Again
        </Form.Text>
      </Form.Group>
      <Button variant="outline-primary" type="submit">
        ADD
      </Button>
    </Form>;
  }
  return <div>{form}</div>;
}
