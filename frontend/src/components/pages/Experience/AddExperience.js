import React from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const employmentType = ['Full-time', 'Part-time', 'Self-employed',
  'Freelance', 'Contract', 'Internship', 'Apprenticeship'];

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Experience',
    path: '/experience',
  },
  {
    label: 'New experience',
    path: '/experience/add',
    active: true
  }
];

class AddExperience extends React.Component {

  state = {
    startDate: new Date(),
    endDate: new Date()
  };

  handleChangeStartDate = date => {
    this.setState({
      startDate: date
    });
  };

  handleChangeEndDate = date => {
    this.setState({
      endDate: date
    });
  };

  render() {
    return (
      <div>
        <Breadcrumbs links={breadcrumbLinks} />
        <Card
          bg='light'
          text='dark'
        >
          <Card.Header>New Experience</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Label>Title</Form.Label>
                    <Form.Control size='sm' type="text" placeholder="Enter title" />
                  </Col>
                  <Col>
                    <Form.Label>Employment Type</Form.Label>
                    <Form.Control size='sm' as="select">
                      {
                        employmentType.map((value, index) => (
                          <option value={index} key={index}>{value}</option>
                        ))
                      }
                    </Form.Control>
                  </Col>
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>Company Name</Form.Label>
                <Form.Control size='sm' type="text" placeholder="Enter company name" />
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Label>Location</Form.Label>
                    <Form.Control size='sm' type="text" placeholder="Enter location" />
                  </Col>
                  <Col>
                    <Form.Label>Start Date</Form.Label>
                    <DatePicker
                      className='form-control form-control-sm'
                      selected={this.state.startDate}
                      onChange={this.handleChangeStartDate}
                    />
                  </Col>
                  <Col>
                    <Form.Label>End Date</Form.Label>
                    <DatePicker
                      className='form-control form-control-sm'
                      selected={this.state.endDate}
                      onChange={this.handleChangeEndDate}
                    />
                  </Col>
                </Form.Row>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control size='sm' as="textarea" rows="8" />
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button size='sm' variant="success" type="submit" className='float-right'>Save</Button>
            <NavLink exact to='/experience' className='btn btn-outline-secondary btn-sm float-left'>Back to Experiences</NavLink>
          </Card.Footer>
        </Card>
      </div>
    );
  }

}

export default AddExperience;
