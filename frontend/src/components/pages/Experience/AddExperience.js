import React from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Col} from 'react-bootstrap';
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
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control size='sm' type="text" placeholder="Enter title" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Employment Type</Form.Label>
              <Form.Control size='sm' as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Company Name</Form.Label>
              <Form.Control size='sm' type="text" placeholder="Enter company name" />
            </Form.Group>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Form.Label>Location</Form.Label>
                  <Form.Control size='sm' type="text" placeholder="Enter location" />
                </Col>
                <Col>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control size='sm' placeholder="Start Date" />
                </Col>
                <Col>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control size='sm' placeholder="End Date" />
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control size='sm' as="textarea" rows="3" />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button size='sm' variant="success" type="submit" className='float-right'>Save</Button>
          <NavLink exact to='/experience' className='btn btn-outline-secondary btn-sm float-left'>Back to Experiences</NavLink>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default AddExperience;
