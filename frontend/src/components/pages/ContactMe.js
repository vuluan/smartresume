import React from 'react';
import { Form, Container, Jumbotron, Accordion, Card, Button} from 'react-bootstrap';

function ContactMe() {
  return (
    <Container>
    <Jumbotron>
    <Form className="mt-4 mb-4">
  <Form.Group controlId="email">
    <Form.Control type="email" placeholder="Your email" />
  </Form.Group>
  <Form.Group controlId="message">
    <Form.Control as="textarea" rows="3" placeholder="Message body.." />
  </Form.Group>
  <Button variant="info" type="submit">
    Send
  </Button>
</Form>
    </Jumbotron>
</Container>
  );
}

export default ContactMe;
