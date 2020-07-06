import React from 'react';
import { Form, Container, Jumbotron, Accordion, Card, Button, Col} from 'react-bootstrap';

function ResumeInfo() {
  return (
    <Container>
    <Jumbotron>
    <Accordion defaultActiveKey="1">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="primary" eventKey="0">
        Resume Information
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
    <Container>
    <Form className="mt-4 mb-4">
  <Form.Row>
    <Form.Group as={Col} controlId="firstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="lastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Last Name" />
    </Form.Group>
  </Form.Row>
  
  <Form.Row>
    <Form.Group as={Col} controlId="email">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="phone">
      <Form.Label>Phone</Form.Label>
      <Form.Control type="tel" placeholder="Phone Number" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="address">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St E" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="city">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>
    
    <Form.Group as={Col} controlId="country">
      <Form.Label>Country</Form.Label>
      <Form.Control />
    </Form.Group>

  </Form.Row>
  
  <Form.Row>
    <Form.Group as={Col} controlId="gitHub">
      <Form.Label>GitHub Link</Form.Label>
      <Form.Control type="text" placeholder="Type github link.." />
    </Form.Group>

    <Form.Group as={Col} controlId="linkedin">
      <Form.Label>LinkedIn</Form.Label>
      <Form.Control type="text" placeholder="Type linkedin link" />
    </Form.Group>
  </Form.Row>
  
  <Button variant="primary" type="submit">
    Save
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

export default ResumeInfo;
