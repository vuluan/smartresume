import React, { useState } from 'react';
import * as emailjs from "emailjs-com";
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Form, Pagination, Container, Jumbotron, Card, Button } from 'react-bootstrap';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Contact Me',
    path: '/contact-me',
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


function ContactMe() {


  let [sender_name, setSender_name] = useState('');
  let [sender_email, setSender_email] = useState('');
  let [subject, setSubject] = useState('');
  let [message, setMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name == "sender_name") { setSender_name(e.target.value) }
    else if (e.target.name == "sender_email") { setSender_email(e.target.value) }
    else if (e.target.name == "subject") { setSubject(e.target.value) }
    else if (e.target.name == "message") { setMessage(e.target.value) }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "gmail",
      "template_IVLImPAD",
      e.target,
      "user_0nuJgQKrnLM3Mfy2SAMQC"
    )
      .then(function (response) {
        alert('Message Sent!');
      }, function (error) {
        alert('Message Sending Failed!');
      });
    setSender_name = "";
    setSender_email = "";
    setSubject = "";
    setMessage = "";
  };



  return (
    <Container>
      <div>
        <Breadcrumbs links={breadcrumbLinks} />
        <Card
          bg='light'
          text='dark'
        ></Card>
        <Jumbotron>
          <h5>Contact Me</h5>
          <Form onSubmit={handleSubmit}
            className="contact_form_class mt-4 mb-4">
            <Form.Group controlId="subject">
              <Form.Control type="text" placeholder="Subject" name="subject" required
                value={subject}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="sender_email">
              <Form.Control type="email" placeholder="Sender Email" name="sender_email" required
                value={sender_email}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="sender_name">
              <Form.Control type="text" placeholder="Sender Name" name="sender_name" required
                value={sender_name}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Control as="textarea" rows="3" placeholder="Message body.." name="message" required
                value={message}
                onChange={handleChange} />
            </Form.Group>
            <Button variant="info" type="submit">
              Send
  </Button>
          </Form>
        </Jumbotron>
      </div>
    </Container>
  );
}

export default ContactMe;
