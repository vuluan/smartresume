import React, { Component } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPenSquare, FaTrash } from 'react-icons/fa';
import * as experienceServices from './../../../services/experienceServices';
import LocalStorageService from './../../../utils/localStorage';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Experience',
    path: '/experience',
    active: true
  }
];

class Experience extends Component {

  state = {
    experiences: [],
    searchKeyword: ''
  }

  onLoadData() {
    const userInfo = LocalStorageService.getUserInfo();
    const payload = { userId: userInfo.userId };

    experienceServices.getAllExperiences(payload)
    .then(res => {
      if (res.status === 200) {
        console.log(res.data);
        this.setState({
          experiences: res.data.data
        });
      }
    })
    .catch((error) => {
      console.log('onLoadData ' + error);
    });
  }

  componentDidMount() {
    this.onLoadData();
  }

  handleValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onDeleteHandler = (id) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            experienceServices.deleteExperience(id).then(response => {
                  console.log(response.data);
                  this.onLoadData();
                })
                .catch((error) => {
                  console.log('Delete experience: ' + error);
                });
          }
        },
        {
          label: 'No'
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <Breadcrumbs links={breadcrumbLinks} />
        <Card
          bg='light'
          text='dark'
        >
          <Card.Header>Experiences</Card.Header>
          <Card.Body>
            <Form className='float-left'>
              <Form.Row className="align-items-center">
                <Col xs="auto">
                  <Form.Label srOnly>Title</Form.Label>
                  <Form.Control
                    size="sm"
                    className="mb-4"
                    id="inlineFormInput"
                    placeholder="Title"
                    name="searchKeyword"
                    onChange={this.handleValueChange}
                  />
                </Col>
                <Col xs="auto">
                  <Button size="sm" type="submit" className="mb-4" variant='info'>Search</Button>
                </Col>
              </Form.Row>
            </Form>
            <NavLink exact to='/experience/add' className='btn btn-sm btn-outline-secondary float-right'>New Experience</NavLink>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Employment Type</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.experiences.map((exp, index) => 
                    exp.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()) ? 
                    <tr key={index}>
                      <td>{ index + 1 }</td>
                      <td>{ exp.title }</td>
                      <td>{ exp.type }</td>
                      <td>{ exp.company }</td>
                      <td>{ exp.location }</td>
                      <td className='text-center'>
                        <NavLink exact to={'/experience/edit/' + exp._id } className='mr-3'><FaPenSquare className='text-warning' /></NavLink>
                        <NavLink exact to='#' className='mr-3'><FaTrash className='text-danger' onClick={() => this.onDeleteHandler(exp._id)}/></NavLink>
                      </td>
                    </tr> : ''
                  )
                }
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Experience;
