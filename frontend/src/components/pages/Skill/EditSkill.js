import React from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Col, Alert, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import * as skillServices from '../../../services/skillServices';
import LocalStorageService from '../../../utils/localStorage';

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Skill',
    path: '/skill',
  },
  {
    label: 'New skill',
    path: '/skill/add',
    active: true
  }
];

class EditSkill extends React.Component {

  constructor() {
    super();

    this.state = {
      messageVariant: 'danger',
      hasMessage: false,
      messageInfo: '',
      is_hard_skill: false,
      skill_name: ''
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.match.params.id
    });
    skillServices.detailSkill(this.props.match.params.id).then(res => {
      if (res.status === 200) {
        console.log(res.data);
        this.setState({ 
            skill_name: res.data.data.skill_name,
            is_hard_skill: res.data.data.is_hard_skill,
        });
      }
    });
  }

  saveHandler = (e) => {
      const userInfo = LocalStorageService.getUserInfo();
      const payload = { 
        id: this.state.id,
        user_id: userInfo.userId,
        skill_name: this.state.skill_name,
        is_hard_skill: this.state.is_hard_skill
      };
  
      skillServices.updateSkill(payload)
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
    if (e.target.name === 'skill_name') {
      this.setState({ 'skill_name': e.target.value });
    }
    
    if(e.target.name === 'is_hard_skill') {
      this.setState({ 'is_hard_skill': e.target.checked });
    }
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
          <Card.Header>New Skill</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Label>Skill</Form.Label>
                    <Form.Control onChange={this.handleValueChange} value={this.state.skill_name} name='skill_name' size='sm' type="text" placeholder="Enter Skill Name" />
                  </Col>
                </Form.Row>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalCheck">
                <Col>
                  <Form.Check onChange={this.handleValueChange} label="Hard Skill" name='is_hard_skill' checked={this.state.is_hard_skill}/>
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button size='sm' onClick={this.saveHandler} variant="success" type="submit" className='float-right'>Save</Button>
            <NavLink exact to='/skill' className='btn btn-outline-secondary btn-sm float-left'>Back to Skill</NavLink>
          </Card.Footer>
        </Card>
      </div>
    );
  }

}

export default EditSkill;
