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
    label: 'Edit experience',
    active: true
  }
];

class EditExperience extends React.Component {

  constructor() {
    super();

    this.state = {
      title: '',
      type: '',
      company: '',
      location: '',
      description: '',
      startDate: new Date(),
      endDate: new Date(),
      messageVariant: 'danger',
      hasMessage: false,
      messageInfo: ''
    };

    console.log(this.state.startDate  );
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

  componentDidMount() {
    this.setState({
      id: this.props.match.params.id
    });

    experienceServices.detailExperience(this.props.match.params.id).then(response => {
      if (response.status === 200) {
        console.log(response.data);
        this.setState({ 
          title: response.data.data.title,
          type: response.data.data.type,
          company: response.data.data.company,
          location: response.data.data.location,
          startDate: new Date(response.data.data.start_date),
          endDate: new Date(response.data.data.end_date),
          description: response.data.data.description,
        });
      }
    })
    .catch((error) => {
      this.setState({
        messageVariant: 'danger',
        hasMessage: true,
        messageInfo: error.response.data.errors[0].msg
      });
    });
  }

  saveHandler = (e) => {

    this.setState({
      hasMessage: false
    });

    const userInfo = LocalStorageService.getUserInfo();
    const payload = { 
      id: this.state.id,
      user_id: userInfo.userId,
      title: this.state.title,
      type: this.state.type,
      company: this.state.company,
      location: this.state.location,
      start_date: this.state.startDate,
      end_date: this.state.endDate,
      description: this.state.description,
    };

    experienceServices.updateExperience(payload)
      .then(response => {
        this.setState({
          messageVariant: 'success',
          hasMessage: true,
          messageInfo: 'Update successfully!'
        });
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
          <Card.Header>Edit Experience</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={this.handleValueChange} value={this.state.title} size='sm' type="text" name='title' placeholder="Enter title" />
                  </Col>
                  <Col>
                    <Form.Label>Employment Type</Form.Label>
                    <Form.Control size='sm' as="select" name='type' value={this.state.type}  onChange={this.handleValueChange}>
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
                <Form.Control size='sm' type="text" name='company' value={this.state.company} placeholder="Enter company name" onChange={this.handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Label>Location</Form.Label>
                    <Form.Control size='sm' type="text" name='location' value={this.state.location} placeholder="Enter location" onChange={this.handleValueChange} />
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
                <Form.Control size='sm' as="textarea" rows="8" name='description' value={this.state.description} onChange={this.handleValueChange} />
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

export default EditExperience;
