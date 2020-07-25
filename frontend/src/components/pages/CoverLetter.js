import React, { useState } from 'react';
import { Form, Container, Jumbotron, Accordion, Card, Button} from 'react-bootstrap';
import axios from 'axios';

function CoverLetter(props) {

  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  const { title, body } = formData;
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
  };





  
  return (
    <Container className="mb-2">
    <Accordion defaultActiveKey="1">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="primary" eventKey="0">
        Cover Letter Title
      </Accordion.Toggle>     
    </Card.Header>
    <Accordion.Collapse eventKey="0">
    <Container>
    <Form className="mt-4 mb-4" onSubmit={(e) => onSubmit(e)}>
  <Form.Group controlId="title">
    <Form.Control 
                value={title}
                onChange={(e) => onChange(e)} 
                type="text" placeholder="Title" required />
  </Form.Group>
  <Form.Group controlId="body">
    <Form.Control
                value={body}
                onChange={(e) => onChange(e)} 
                as="textarea" rows="6" placeholder="Body.." required />
  </Form.Group>
  <Button controlId="save" variant="success" type="submit">
    Save
  </Button>
  <Button controlId="remove" variant="danger" className="ml-4" type="submit">
    Remove
  </Button> 
</Form>
    </Container>
    </Accordion.Collapse>
  </Card>
</Accordion>
</Container>
  );
}

export default CoverLetter;
