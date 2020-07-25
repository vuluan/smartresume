import React, { useState } from 'react';
import { Form, Container, Jumbotron, Accordion, Card, Button} from 'react-bootstrap';
import axios from 'axios';

function CoverLetter() {

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

    /* let data = {
      title,
      body,
    };
    try {
      const response = await axios.post(
        'http://localhost:5000/api/coverLetter',
        data,
        config
      );

      console.log('Cover Letter Added');
    } catch (e) {
      console.log(e.response.data.errors);
    } */
  };





  return (
    <Container>
    <Jumbotron>
    <Form className="mt-4 mb-4" onSubmit={(e) => onSubmit(e)}>
  <Form.Group controlId="title">
    <Form.Control
                value={title}
                onChange={(e) => onChange(e)} 
                 type="text" placeholder="Title" required />
  </Form.Group>
  <Form.Group controlId="letter">
    <Form.Control
                value={body}
                onChange={(e) => onChange(e)} 
                 as="textarea" rows="6" placeholder="Body.." required />
  </Form.Group>
  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
    </Jumbotron>
</Container>
  );
}

export default CoverLetter;
