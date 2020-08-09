import React, { useState } from 'react';
import { Form, Container, Jumbotron, Button } from 'react-bootstrap';
import * as coverLetterServices from './../../../services/coverLetterServices';
import LocalStorageService from './../../../utils/localStorage';
import { useHistory } from 'react-router-dom';


function CoverLetter() {

  const history = useHistory();
  const [messageVariant, setMessageVariant] = useState('danger');
  const [hasMessage, setHasMessage] = useState(false);
  const [messageInfo, setMessageInfo] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  const { title, body } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    const userInfo = LocalStorageService.getUserInfo();
    const payload = {
      user_id: userInfo.userId,
      title,
      body
    };

    coverLetterServices.addCoverLetter(payload)
      .then(response => {
        console.log(response.data);
        history.push('/cover-letter');
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setMessageVariant('danger');
        setHasMessage(true);
        setMessageInfo(error.response.data.errors[0].msg);
      });
  };





  return (
    <Container>
      <Jumbotron>
        <h5>Add Cover Letter</h5>
        <Form className="mt-4 mb-4" onSubmit={(e) => onSubmit(e)}>
          <Form.Group controlId="title">
            <Form.Control
              name="title"
              value={title}
              onChange={(e) => onChange(e)}
              type="text" placeholder="Title" required />
          </Form.Group>
          <Form.Group controlId="letter">
            <Form.Control
              name="body"
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
