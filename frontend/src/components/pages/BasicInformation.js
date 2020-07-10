import React, { useState } from 'react';
import Breadcrumbs from '../layouts/Breadcrumbs';
import { Form, Container, Pagination, Jumbotron, Accordion, Card, Button, Col} from 'react-bootstrap';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


function BasicInformation() {

  const [country, setCountry] = useState(0);
  const [region, setRegion] = useState(0);

  function selectCountry (val) {
    setCountry(val);
  }
 
  function selectRegion (val) {
    setRegion(val);
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
    <Form className="mt-4 mb-4">
  <Form.Row>
    <Form.Group as={Col} controlId="firstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="lastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Last Name" />
    </Form.Group>
  </Form.Row>
  
  <Form.Row>
    <Form.Group as={Col} controlId="email">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="phone">
      <Form.Label>Phone</Form.Label>
      <Form.Control type="tel" placeholder="Phone Number" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="address">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St E" />
  </Form.Group>

  <Form.Row>
            <Form.Group as={Col} controlId="country">
              <Form.Label>Country</Form.Label>
              <CountryDropdown
                className='form-control'
                value={country}
                onChange={(val) => selectCountry(val)} />
            </Form.Group>

            <Form.Group as={Col} controlId="region">
              <Form.Label>Region</Form.Label>
              <RegionDropdown
                className='form-control'
                country={country}
                value={region}
                onChange={(val) => selectRegion(val)} />
            </Form.Group>
          </Form.Row>
  
  <Form.Row>
    <Form.Group as={Col} controlId="gitHub">
      <Form.Label>GitHub Link</Form.Label>
      <Form.Control type="text" placeholder="Type github link.." />
    </Form.Group>

    <Form.Group as={Col} controlId="linkedin">
      <Form.Label>LinkedIn</Form.Label>
      <Form.Control type="text" placeholder="Type linkedin link" />
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
