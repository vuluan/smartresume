import React from 'react';
import Breadcrumbs from '../layouts/Breadcrumbs';
import { Table, ButtonGroup, Button, Pagination, Card, Form, Col, InputGroup, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CoverLetter from './CoverLetter.js';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Cover Letters',
    path: '/cover-letter',
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

const paginationBasic = (
  <div>
    <Pagination>{items}</Pagination>
    <br />

    <Pagination size="lg">{items}</Pagination>
    <br />

    <Pagination size="sm">{items}</Pagination>
  </div>
);

function CoverLetters() {
  return (
    <div>
      <Breadcrumbs links={breadcrumbLinks} />
      <Card
        bg='light'
        text='dark'
      >
        <Card.Header>
          <Form className='float-left'>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Label for="inlineFormInput" srOnly>Title</Form.Label>
                <Form.Control
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="Title"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit" className="mb-2">Search</Button>
              </Col>
            </Form.Row>
          </Form>
          <NavLink exact to='/cover-letter/add' className='btn btn-outline-secondary float-right'>New CoverLetter</NavLink>
        </Card.Header>
        <Card.Body>
          <Card.Title>Cover Letters</Card.Title>
          <CoverLetter/>
          <CoverLetter/>
          <div class='float-left'>Showing 1 to 10 of 100 entries</div>
          <Pagination className='float-right'>{items}</Pagination>
        </Card.Body>

      </Card>
    </div>
  );
}

export default CoverLetters;
