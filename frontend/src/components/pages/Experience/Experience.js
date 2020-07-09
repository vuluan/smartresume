import React from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Table, ButtonGroup, Button, Pagination, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPenSquare, FaTrash } from 'react-icons/fa';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Experience',
    path: '/experience',
    active: true
  }
];

function Experience() {

  let active = 2;
  let items = [];

  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div>
      <Breadcrumbs links={breadcrumbLinks} />
      <Card
        bg='light'
        text='dark'
      >
        <Card.Header>Experiences</Card.Header>
        <Card.Body>
          <Form className='float-left'>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Label for="inlineFormInput" srOnly>Title</Form.Label>
                <Form.Control
                  size="sm"
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="Title"
                />
              </Col>
              <Col xs="auto">
                <Button size="sm" type="submit" className="mb-2">Search</Button>
              </Col>
            </Form.Row>
          </Form>
          <NavLink exact to='/experience/add' className='btn btn-sm btn-outline-secondary float-right'>New Experience</NavLink>
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Employment Type</th>
                <th>Company</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className='text-center'>
                  <NavLink exact to='/experience/edit' className='mr-1'><FaPenSquare className='text-warning' /></NavLink>
                  <NavLink exact to='/experience/delete'><FaTrash className='text-danger' /></NavLink>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className='text-center'>
                  <NavLink exact to='/experience/edit' className='mr-1'><FaPenSquare className='text-warning' /></NavLink>
                  <NavLink exact to='/experience/delete'><FaTrash className='text-danger' /></NavLink>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td className='text-center'>
                  <NavLink exact to='/experience/edit' className='mr-1'><FaPenSquare className='text-warning' /></NavLink>
                  <NavLink exact to='/experience/delete'><FaTrash className='text-danger' /></NavLink>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer>
          <div class='float-left'>Showing 1 to 10 of 100 entries</div>
          <Pagination size='sm' className='float-right'>{items}</Pagination>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Experience;
