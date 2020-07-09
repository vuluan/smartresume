import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import GoogleLoginButton from './GoogleLoginButton';

function Register() {
  return (
    <Row>
      <Col md={{ span: 4, offset: 4 }} className='mt-5 mb-5'>
        <Card>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/register.jpg'} />
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control size='sm' type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control size='sm' type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control size='sm' type="password" placeholder="Confirm Password" />
              </Form.Group>
              <Form.Group className='clearfix'>
                <Button size='sm' className='btn-block' variant="carrot" type="submit">Register</Button>
              </Form.Group>
              <Form.Group>
                <GoogleLoginButton />
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer className="text-muted text-center text-danger">Already have an account? <NavLink exact to='/login' className='text-center'>Sign in here</NavLink></Card.Footer>
        </Card>
      </Col>
    </Row>
  );
}

export default Register;
