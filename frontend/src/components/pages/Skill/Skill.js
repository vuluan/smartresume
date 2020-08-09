import React, { Component } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPenSquare, FaTrash } from 'react-icons/fa';
import * as skillServices from './../../../services/skillServices';
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

class Skill extends Component {

  state = {
    skills: [],
    searchKeyword: ''
  }

  onLoadData() {
    const userInfo = LocalStorageService.getUserInfo();
    const payload = { userId: userInfo.userId };

    skillServices.getAllSkills(payload).then(res => {
      if (res.status === 200) {
        this.setState({
          skills: res.data.data
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
            skillServices.deleteSkll(id).then(response => {
                  this.onLoadData();
                })
                .catch((error) => {
                  console.log('Delete skill: ' + error);
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
          <Card.Header>Skills</Card.Header>
          <Card.Body>
            <Form className='float-left'>
              <Form.Row className="align-items-center">
                <Col xs="auto">
                  <Form.Label srOnly>Skill</Form.Label>
                  <Form.Control
                    size="sm"
                    className="mb-4"
                    id="inlineFormInput"
                    placeholder="Skill"
                    name="searchKeyword"
                    onChange={this.handleValueChange}
                  />
                </Col>
                <Col xs="auto">
                  <Button size="sm" type="submit" className="mb-4" variant='info'>Search</Button>
                </Col>
              </Form.Row>
            </Form>
            <NavLink exact to='/skill/add' className='btn btn-sm btn-outline-secondary float-right'>New Skill</NavLink>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Skill</th>
                  <th>Hard Skill</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.skills.map((skill, index) =>
                  skill.skill_name.toLowerCase().includes(this.state.searchKeyword.toLowerCase()) ?
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{skill.skill_name}</td>
                        <td>{skill.is_hard_skill ? 'Yes' : 'No'}</td>
                        <td className='text-center'>
                          <NavLink exact to={'/skill/edit/' + skill._id} className='mr-3'><FaPenSquare className='text-warning' /></NavLink>
                          <NavLink exact to='#' className='mr-3'><FaTrash className='text-danger' onClick={() => this.onDeleteHandler(skill._id)} /></NavLink>
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

export default Skill;
