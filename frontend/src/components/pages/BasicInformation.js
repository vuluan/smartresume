import React, { useState } from 'react';
import { Form, Container, Jumbotron, Accordion, Card, Button, Col} from 'react-bootstrap';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import styles from  '../styles/BasicInformation.module.css';

function BasicInformation() {

  const [country, setCountry] = useState(0);
  const [region, setRegion] = useState(0);

  function selectCountry (val) {
    setCountry(val);
  }
 
  function selectRegion (val) {
    setRegion(val);
  }

  return (
    <Container>
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
    <Form.Group as={Col} controlId="region">
      <Form.Label>Region</Form.Label>
      <div></div>
      <RegionDropdown 
      className={styles.custom}
          country={country}
          value={region}
          onChange={(val) => selectRegion(val)} />
    </Form.Group>
    
    <Form.Group as={Col} controlId="country">
      <Form.Label>Country</Form.Label>
      <CountryDropdown 
      className={styles.custom}
          value={country}
          onChange={(val) => selectCountry(val)} />
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
</Container>
  );
}

export default BasicInformation;
