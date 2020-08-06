import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../layouts/Breadcrumbs';
import { Button, Pagination, Card, Form, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CoverLetter from './CoverLetter.js';
import axios from 'axios';

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

const formAction = function(e){
   // let token = localStorage.getItem('token');
    // let config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': token,
    //   },
    // };

    /* if(e.name === 'save'){
    let data = {
      title,
      body,
    };
    try {
      const response = await axios.put(
        'http://localhost:5000/api/coverLetter'+{id},
        data,
        config
      );

      console.log('Cover Letter Updated');
    } catch (e) {
      console.log(e.response.data.errors);
    }
  }
  else if(e.name === 'delete'){
    try {
      const response = await axios.delete(
        'http://localhost:5000/api/coverLetter/'+{id},
        data,
        config
      );

      console.log('Cover Letter Deleted');
    } catch (e) {
      console.log(e.response.data.errors);
    }
  } */
}

/*const [formData, setFormData] = useState({
  user_id: '',
  title: '',
  body: '',
  _id: '',
});

useEffect(() => {
  axios.get('http://localhost:5000/api/coverLetter')
  .then(function (response) {
    setFormData(response.data);
    console.log(formData);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
});*/

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
          {/* {formData.map(
    (cl)=>(
      <CoverLetter data ={cl} formAction={formAction} key={cl._id} />
    )
  )} */}
          <div class='float-left'>Showing 1 to 10 of 100 entries</div>
          <Pagination className='float-right'>{items}</Pagination>
        </Card.Body>

      </Card>
    </div>
  );
}

export default CoverLetters;
