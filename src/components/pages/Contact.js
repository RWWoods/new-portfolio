import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';


const style = {
      container: {
        height: '50vh'
      },
      form: {
        marginTop: '50%',
        marginBottom: '50%'
      }
}


function contactForm() {
  return (
    <Container style={style.container}>
    <Form style={style.form}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Name
        </InputGroup.Text>
        <Form.Control
          aria-label="Name"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-1 mx-3" controlId="formBasicEmail">
        <InputGroup.Text id="inputGroup-sizing-default">Email address</InputGroup.Text>
        <Form.Control
          aria-label="Name"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3" size="lg">
        <InputGroup.Text id="inputGroup-sizing-default">
          Message
        </InputGroup.Text>
        <Form.Control
          as="textarea" aria-label="Message"
        />
      </InputGroup>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default contactForm;
