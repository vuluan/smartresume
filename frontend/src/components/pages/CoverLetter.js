import React from 'react';
import { Form, Container, Jumbotron, Accordion, Card, Button} from 'react-bootstrap';

function CoverLetter() {
  return (
    <Container className="mb-2">
    <Accordion defaultActiveKey="1">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="primary" eventKey="0">
        Cover Letter Title
      </Accordion.Toggle>     
    </Card.Header>
    <Accordion.Collapse eventKey="0">
    <Container>
    <Form className="mt-4 mb-4">
  <Form.Group controlId="title">
    <Form.Control type="text" placeholder="Title" required />
  </Form.Group>
  <Form.Group controlId="letter">
    <Form.Control as="textarea" rows="6" placeholder="Body.." required />
  </Form.Group>
  <Button variant="success" type="submit">
    Save
  </Button>
  <Button variant="danger" className="ml-4" type="submit">
    Remove
  </Button> 
</Form>
    </Container>
    </Accordion.Collapse>
  </Card>
</Accordion>
</Container>
  );
}

export default CoverLetter;
