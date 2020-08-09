import React, { useState } from 'react';
import { Form, Container, Accordion, Card, Button } from 'react-bootstrap';

function CoverLetter(props) {

  const [formData, setFormData] = useState({
    id: props.data._id,
    user_id: props.data.user_id,
    title: props.data.title,
    body: props.data.body,
  });

  const { id, title, body } = formData;

  const remove = function (e) {
    e.preventDefault();
    props.formRemove(id)
  }

  const update = function (e) {
    e.preventDefault();
    props.formUpdate(formData)
  }

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


  return (
    <Container className="mb-2">
      <Accordion defaultActiveKey="1">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="primary" eventKey="0">
              {title}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Container>
              <Form className="mt-4 mb-4" >
                <Form.Group controlId="title">
                  <Form.Control
                    name="title"
                    value={title}
                    onChange={(e) => onChange(e)}
                    type="text" placeholder="Title" required />
                </Form.Group>
                <Form.Group controlId="body">
                  <Form.Control
                    name="body"
                    value={body}
                    onChange={(e) => onChange(e)}
                    as="textarea" rows="6" placeholder="Body.." required />
                </Form.Group>
                <Button name="save" controlId="save" variant="success" type="submit"
                  onClick={update}>
                  Save
  </Button>
                <Button name="remove" controlId="remove" variant="danger" className="ml-4" type="submit"
                  onClick={remove}>
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
