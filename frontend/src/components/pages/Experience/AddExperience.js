import React from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Col, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as experienceServices from './../../../services/experienceServices';
import LocalStorageService from './../../../utils/localStorage';

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

  constructor() {
    super();

    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      messageVariant: 'danger',
      hasMessage: false,
      messageInfo: ''
    };
  }

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

  saveHandler = (e) => {

    const userInfo = LocalStorageService.getUserInfo();
    const payload = { 
        user_id: userInfo.userId,
        title: this.state.title,
        type: this.state.type,
        company: this.state.company,
        location: this.state.location,
        start_date: this.state.startDate,
        end_date: this.state.endDate,
        description: this.state.description,
    };

    experienceServices.addExperience(payload)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/experience')
      })
      .catch((error) => {
        this.setState({
          messageVariant: 'danger',
          hasMessage: true,
          messageInfo: error.response.data.errors[0].msg
        });
      });
  }

  handleValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Breadcrumbs links={breadcrumbLinks} />
        {  
          this.state.hasMessage ? <Alert variant={this.state.messageVariant}>{this.state.messageInfo}</Alert> : ''
        }
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
                    <Form.Control size='sm' type="text" name='title' placeholder="Enter title" onChange={this.handleValueChange}/>
                  </Col>
                  <Col>
                    <Form.Label>Employment Type</Form.Label>
                    <Form.Control size='sm' as="select" name='type' onChange={this.handleValueChange}>
                      <option value='' key='-1'>--- Please select employment Type ---</option>
                      {
                        employmentType.map((value, index) => (
                          <option value={value} key={index}>{value}</option>
                        ))
                      }
                    </Form.Control>
                  </Col>
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>Company Name</Form.Label>
                <Form.Control size='sm' type="text" name='company' placeholder="Enter company name" onChange={this.handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Label>Location</Form.Label>
                    <Form.Control size='sm' type="text" name='location' placeholder="Enter location" onChange={this.handleValueChange} />
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
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control size='sm' as="textarea" rows="8" name='description' onChange={this.handleValueChange} />
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button size='sm' onClick={this.saveHandler} variant="success" type="submit" className='float-right'>Save</Button>
            <NavLink exact to='/experience' className='btn btn-outline-secondary btn-sm float-left'>Back to Experiences</NavLink>
          </Card.Footer>
        </Card>
      </div>
    );
  }

}

export default AddExperience;
