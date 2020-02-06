import React, { Component } from "react";
import "./AddPost.css";
import {
  Container,
  List,
  ListGroupItem,
  Button,
  ListGroup,
  Form,
  FormGroup
} from "reactstrap";
import { Label, Input, FormText } from "reactstrap";
import FormPopUp from "./FormPopUp.js";

class AddPost extends Component {
  renderForm() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
        </Form>
      </div>
    );
  }

  render() {
    return (
      <Container>
        <Button
          className="AddButton"
          color="primary"
          onClick={() => {
            this.renderForm();
          }}
        >
          +
        </Button>
      </Container>
    );
  }
}

export default AddPost;
