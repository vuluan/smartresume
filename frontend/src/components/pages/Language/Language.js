import React from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Table, Button, Pagination, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPenSquare, FaTrash } from 'react-icons/fa';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Language',
    path: '/language',
    active: true
  }
];

function Language() {
  return (
    <div>
      <Breadcrumbs links={breadcrumbLinks} />
      <Card
        bg='light'
        text='dark'
      >
        <Card.Header>Languages</Card.Header>
        <Card.Body>
          <Form className='float-left'>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Label for="inlineFormInput" srOnly>Language</Form.Label>
                <Form.Control
                  size="sm"
                  className="mb-4"
                  id="inlineFormInput"
                  placeholder="Language"
                />
              </Col>
              <Col xs="auto">
                <Button size="sm" type="submit" className="mb-4" variant='info'>Search</Button>
              </Col>
            </Form.Row>
          </Form>
          <NavLink exact to='/language/add' className='btn btn-sm btn-outline-secondary float-right'>New Language</NavLink>
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Language</th>
                <th>Proficiency</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>English</td>
                <td>Professional working proficiency</td>
                <td className='text-center'>
                  <NavLink exact to='/language/edit' className='mr-3'><FaPenSquare className='text-warning' /></NavLink>
                  <NavLink exact to='/language/delete'><FaTrash className='text-danger' /></NavLink>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Vietnamese</td>
                <td>Full professional proficiency</td>
                <td className='text-center'>
                  <NavLink exact to='/language/edit' className='mr-3'><FaPenSquare className='text-warning' /></NavLink>
                  <NavLink exact to='/language/delete'><FaTrash className='text-danger' /></NavLink>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer>
          <div className='float-left mt-1 mb-1'>Showing 1 to 10 of 100 entries</div>
          <Pagination size='sm' className='float-right pagination-danger'>
            <Pagination.Item key='1' active='true'>1</Pagination.Item>
            <Pagination.Item key='2'>2</Pagination.Item>
            <Pagination.Item key='3'>3</Pagination.Item>
          </Pagination>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Language;
