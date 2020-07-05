import React from 'react';
import { Form, Container, Jumbotron, Accordion, Card, Button} from 'react-bootstrap';

function ContactMe() {
  return (
    <Container>
    <Jumbotron>
    <Accordion defaultActiveKey="1">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="primary" eventKey="0">
        Contact Me
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
    <Container>
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
    </Container>
    </Accordion.Collapse>
  </Card>
</Accordion>
    </Jumbotron>
</Container>
  );
}

export default ContactMe;
