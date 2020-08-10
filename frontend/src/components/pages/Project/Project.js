import React, { Component } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPenSquare, FaTrash } from 'react-icons/fa';
import * as projectServices from './../../../services/projectServices';
import LocalStorageService from './../../../utils/localStorage';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Skill',
    path: '/skill',
    active: true
  }
];

class Project extends Component {

  state = {
    projects: [],
    searchKeyword: ''
  }

  onLoadData() {
    const userInfo = LocalStorageService.getUserInfo();
    const payload = { userId: userInfo.userId };

    projectServices.getAllProjects(payload).then(res => {
      if (res.status === 200) {
        this.setState({
          projects: res.data.data
        });
      }
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
            projectServices.deleteProject(id).then(response => {
                  this.onLoadData();
                })
                .catch((error) => {
                  console.log('Delete project: ' + error);
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
          <Card.Header>Project</Card.Header>
          <Card.Body>
            <Form className='float-left'>
              <Form.Row className="align-items-center">
                <Col xs="auto">
                  <Form.Label srOnly>Project</Form.Label>
                  <Form.Control
                    size="sm"
                    className="mb-4"
                    id="inlineFormInput"
                    placeholder="Project"
                    name="searchKeyword"
                    onChange={this.handleValueChange}
                  />
                </Col>
                <Col xs="auto">
                  <Button size="sm" type="submit" className="mb-4" variant='info'>Search</Button>
                </Col>
              </Form.Row>
            </Form>
            <NavLink exact to='/skill/add' className='btn btn-sm btn-outline-secondary float-right'>New Project</NavLink>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.projects.map((project, index) =>
                  project.name.toLowerCase().includes(this.state.searchKeyword.toLowerCase()) ?
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{project.name}</td>
                        <td>{project.description}</td>
                        <td className='text-center'>
                          <NavLink exact to={'/project/edit/' + project._id} className='mr-3'><FaPenSquare className='text-warning' /></NavLink>
                          <NavLink exact to='#' className='mr-3'><FaTrash className='text-danger' onClick={() => this.onDeleteHandler(project._id)} /></NavLink>
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

export default Project;
