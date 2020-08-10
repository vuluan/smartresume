import React from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Col, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import * as projectServices from '../../../services/projectServices';
import LocalStorageService from '../../../utils/localStorage';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Project',
    path: '/project',
  },
  {
    label: 'Edit Project',
    active: true
  }
];

class EditProject extends React.Component {

  constructor() {
    super();

    this.state = {
      messageVariant: 'danger',
      hasMessage: false,
      messageInfo: '',
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.match.params.id
    });
    projectServices.detailProject(this.props.match.params.id).then(res => {
      if (res.status === 200) {
        this.setState({ 
          name: res.data.data.name,
          description: res.data.data.description,
        });
      }
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
        name: this.state.name,
        description: this.state.description,
      };
  
      projectServices.updateProject(payload)
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
          <Card.Header>New Project</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control size='sm' type="text" name='name' placeholder="Enter project name" value={this.state.name} onChange={this.handleValueChange} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control size='sm' as="textarea" rows="8" name='description' value={this.state.description} onChange={this.handleValueChange} />
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button size='sm' onClick={this.saveHandler} variant="success" type="submit" className='float-right'>Save</Button>
            <NavLink exact to='/project' className='btn btn-outline-secondary btn-sm float-left'>Back to Project</NavLink>
          </Card.Footer>
        </Card>
      </div>
    );
  }

}

export default EditProject;
