import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Link to="/forgetPassword">Forgot Password</Link>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        dont have an account ? <Link to="/signup">sign up</Link>
      </Container>
    </>
  );
};

export default Login;
