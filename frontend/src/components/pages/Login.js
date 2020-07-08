import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

function Login() {
  return (
    <Row>
      <Col md={{ span: 4, offset: 4 }} className='mt-5'>
        <Card>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/login.jpg'} />
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button className='float-right' variant="carrot" type="submit">Login</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Login;
