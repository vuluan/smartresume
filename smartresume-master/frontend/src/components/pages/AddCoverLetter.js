import React from 'react';
import { Form, Container, Jumbotron, Accordion, Card, Button} from 'react-bootstrap';

function AddCoverLetter() {
  return (
    <Container>
    <Form className="mt-4 mb-4">
  <Form.Group controlId="title">
    <Form.Control type="text" placeholder="Title" />
  </Form.Group>
  <Form.Group controlId="letter">
    <Form.Control as="textarea" rows="6" placeholder="Body.." />
  </Form.Group>
  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
    </Container>
  );
}

export default AddCoverLetter;
