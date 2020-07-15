import React from 'react';
import Breadcrumbs from '../layouts/Breadcrumbs';
import { Button, Pagination, Card, Form, Col} from 'react-bootstrap';
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


function CoverLetters() {
  return (
    <div>
      <Breadcrumbs links={breadcrumbLinks} />
      <Card
        bg='light'
        text='dark'
      >
        <Card.Header>
          <NavLink exact to='/cover-letter/add' className='btn btn-outline-danger float-right'>New Cover Letter</NavLink>
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
