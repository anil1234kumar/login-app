import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <h4>foget passaword</h4>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Button onClick={() => navigate("/forgetReset")}>
            Reset password
          </Button>
          <Link to={"/login"}> back to logIn</Link>
        </Form>
      </Container>
    </>
  );
};

export default ForgetPassword;
