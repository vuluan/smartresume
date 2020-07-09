import React from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form} from 'react-bootstrap';
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
        <Card.Header>New Experience
          
        </Card.Header>
        <Card.Body>
          
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
            <Button variant="primary" type="submit">Submit</Button>
            <NavLink exact to='/experience' className='btn btn-outline-secondary float-right'>Back to Experiences</NavLink>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AddExperience;
