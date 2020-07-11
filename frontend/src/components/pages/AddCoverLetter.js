import React from 'react';
import { Form, Container, Jumbotron, Accordion, Card, Button} from 'react-bootstrap';

function CoverLetter() {
  return (
    <Container>
    <Jumbotron>
    <Form className="mt-4 mb-4">
  <Form.Group controlId="title">
    <Form.Control type="text" placeholder="Title" required />
  </Form.Group>
  <Form.Group controlId="letter">
    <Form.Control as="textarea" rows="6" placeholder="Body.." required />
  </Form.Group>
  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
    </Jumbotron>
</Container>
  );
}

export default CoverLetter;
