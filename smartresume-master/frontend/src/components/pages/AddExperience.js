import React from 'react';
import Breadcrumbs from '../layouts/Breadcrumbs';
import { Table, ButtonGroup, Button, Pagination, Card, Form, Col, InputGroup, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Experience',
    path: '/experience',
  },
  {
    label: 'New experience',
    path: '/experience/add',
    active: true
  }
];

function AddExperience() {
  return (
    <div>
      <Breadcrumbs links={breadcrumbLinks} />
      <Card
        bg='light'
        text='dark'
      >
        <Card.Header>
          <NavLink exact to='/experience' className='btn btn-outline-secondary float-left'>Back to Experiences</NavLink>
          <Button variant="success" className='float-right'>Save</Button>
        </Card.Header>
        <Card.Body>
          <Card.Title>New Experience</Card.Title>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
  </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AddExperience;
