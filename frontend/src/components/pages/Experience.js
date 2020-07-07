import React from 'react';
import Breadcrumbs from '../layouts/Breadcrumbs';
import { Table, ButtonGroup, Button, Pagination, Card, Form, Col, InputGroup, FormControl, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

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

function Experience() {
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
          <NavLink exact to='/experience/add' className='btn btn-outline-secondary float-right'>New Experience</NavLink>
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
                <td>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="warning">Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="warning">Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="warning">Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="warning">Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="warning">Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="warning">Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="warning">Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="warning">Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="warning">Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="warning">Edit</Button>
                    <Button variant="danger">Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
            </tbody>
          </Table>
          <div class='float-left'>Showing 1 to 10 of 100 entries</div>
          <Pagination className='float-right'>{items}</Pagination>
        </Card.Body>

      </Card>
    </div>
  );
}

export default Experience;
