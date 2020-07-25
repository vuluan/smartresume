import React, { useState } from 'react';
import Breadcrumbs from '../layouts/Breadcrumbs';
import { Form, Container, Pagination, Jumbotron, Accordion, Card, Button, Col} from 'react-bootstrap';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import axios from 'axios';


function BasicInformation() {


  const [formData, setFormData] = useState({
    firstName : '',
lastName : '',
email : '',
phone : '',
address : '',
country : '',
region : '',
gitHub : '',
linkedin : '',
  });

  const { firstName,
    lastName,
    email,
    phone,
    address,
    country,
    region,
    gitHub,
    linkedin, } = formData;

    const onLoad = async (e) => {
      /* try {
        const response = await axios.get(
          'http://localhost:5000/api/basicinfo',
          data,
          config
        );
  
        console.log('Basic Info Updated');
      } catch (e) {
        console.log(e.response.data.errors);
      }
      setFormData({ ...formData, [e.target.name]: e.target.value }); */
    }

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    // let token = localStorage.getItem('token');
    // let config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'x-auth-token': token,
    //   },
    // };

    /* let data = {
      firstName,
lastName,
email,
phone,
address,
country,
region,
gitHub,
linkedin,
    };
    try {
      const response = await axios.post(
        'http://localhost:5000/api/basicinfo',
        data,
        config
      );

      console.log('Basic Info Updated');
    } catch (e) {
      console.log(e.response.data.errors);
    } */
  };





  // const [country, setCountry] = useState(0);
  // const [region, setRegion] = useState(0);

  function selectCountry (val) {
    setFormData({ ...formData, country: val });
  }
 
  function selectRegion (val) {
    setFormData({ ...formData, region: val });
  }

  const breadcrumbLinks = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'Basic Information',
      path: '/basic-information',
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

  return (
    <Container>
    <div>
      <Breadcrumbs links={breadcrumbLinks} />
      <Card
        bg='light'
        text='dark'
      ></Card>
    <Jumbotron>
    <Form className="mt-4 mb-4" onSubmit={(e) => onSubmit(e)}>
  <Form.Row>
    <Form.Group as={Col} controlId="firstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control 
                value={firstName}
                onChange={(e) => onChange(e)} 
                type="text" placeholder="Enter First Name" required />
    </Form.Group>

    <Form.Group as={Col} controlId="lastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control 
                value={lastName}
                onChange={(e) => onChange(e)}
                type="text" placeholder="Enter Last Name" required />
    </Form.Group>
  </Form.Row>
  
  <Form.Row>
    <Form.Group as={Col} controlId="email">
      <Form.Label>Email</Form.Label>
      <Form.Control 
                value={email}
                onChange={(e) => onChange(e)}
                type="email" placeholder="Enter email" required />
    </Form.Group>

    <Form.Group as={Col} controlId="phone">
      <Form.Label>Phone</Form.Label>
      <Form.Control 
                value={phone}
                onChange={(e) => onChange(e)} 
                type="tel" placeholder="Phone Number" required />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="address">
    <Form.Label>Address</Form.Label>
    <Form.Control 
                value={address}
                onChange={(e) => onChange(e)} 
                placeholder="1234 Main St E" required />
  </Form.Group>

  <Form.Row>
            <Form.Group as={Col} controlId="country">
              <Form.Label>Country</Form.Label>
              <CountryDropdown
                className='form-control'
                value={country} 
                onChange={(val) => selectCountry(val)} 
                required />
            </Form.Group>

            <Form.Group as={Col} controlId="region">
              <Form.Label>Region</Form.Label>
              <RegionDropdown
                className='form-control'
                country={country}
                value={region}
                onChange={(val) => selectRegion(val)} 
                required />
            </Form.Group>
          </Form.Row>
  
  <Form.Row>
    <Form.Group as={Col} controlId="gitHub">
      <Form.Label>GitHub Link</Form.Label>
      <Form.Control 
                value={gitHub}
                onChange={(e) => onChange(e)} 
                type="text" placeholder="Type github link.." />
    </Form.Group>

    <Form.Group as={Col} controlId="linkedin">
      <Form.Label>LinkedIn</Form.Label>
      <Form.Control 
                value={linkedin}
                onChange={(e) => onChange(e)} 
                type="text" placeholder="Type linkedin link" />
    </Form.Group>
  </Form.Row>
  
  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
    </Jumbotron>
</div>
</Container>
  );
}

export default BasicInformation;
