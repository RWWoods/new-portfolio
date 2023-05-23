import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function contactForm() {
  return (
    <Form>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Name
        </InputGroup.Text>
        <Form.Control
          aria-label="Name"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3" controlId="formBasicEmail">
        <InputGroup.Text id="inputGroup-sizing-default">Email address</InputGroup.Text>
        <Form.Control
          aria-label="Name"
          aria-describedby="inputGroup-sizing-default"
        />

      </InputGroup>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default contactForm;
