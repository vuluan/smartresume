import React from 'react';
import Breadcrumbs from '../layouts/Breadcrumbs';
import { Form, Pagination, Container, Jumbotron, Accordion, Card, Button} from 'react-bootstrap';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Contact Me',
    path: '/contact-me',
    active: true
  }
];

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function ContactMe() {
  return (
    <Container>
    <div>
      <Breadcrumbs links={breadcrumbLinks} />
      <Card
        bg='light'
        text='dark'
      ></Card>
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
</div>
</Container>
  );
}

export default ContactMe;
