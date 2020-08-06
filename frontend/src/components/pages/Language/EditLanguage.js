import React from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Button, Card, Form, Col } from 'react-bootstrap';
import { NavLink, Redirect } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const Proficiencies = ['Elementary proficiency', 'Limited working proficiency', 'Professional working proficiency',
  'Full professional proficiency', 'Native or bilingual proficiency'];

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Language',
    path: '/language',
  },
  {
    label: 'Update language',
    active: true
  }
];

class EditLanguage extends React.Component {

  constructor() {
    super();
    this.state = {
      language: '',
      proficiency: ''
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    console.log(id);
    let URL = '/api/language/' + id;
    let USER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoibmd1eWVudnVsdWFuODlAZ21haWwuY29tIiwiX2lkIjoiNWYwYTgxOTY4NGEyMzQzNjFjZjk0MjFjIn0sImlhdCI6MTU5NjcxODEyNn0.bTPA7D8yPX0nzAPd4x4bzGCy9i1Bc6vf_KGNPm_OK5Y';
    const AuthStr = 'Bearer '.concat(USER_TOKEN);
    axios.get(URL, { headers: { Authorization: AuthStr } })
      .then(response => {
          // If request is good...
          console.log(response.data);
          this.setState({ 
            language: response.data.data.language,
            proficiency: response.data.data.proficiency,
          });
        })
      .catch((error) => {
          console.log('error ' + error);
        });
  }

  saveHandler = (e) => {
    let USER_ID = '5f0a819684a234361cf9421c'
    let URL = '/api/language/add';
    let USER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoibmd1eWVudnVsdWFuODlAZ21haWwuY29tIiwiX2lkIjoiNWYwYTgxOTY4NGEyMzQzNjFjZjk0MjFjIn0sImlhdCI6MTU5NjcxODEyNn0.bTPA7D8yPX0nzAPd4x4bzGCy9i1Bc6vf_KGNPm_OK5Y';
    const AuthStr = 'Bearer '.concat(USER_TOKEN);
    axios.post(URL, 
      {
        user_id: USER_ID,
        language: this.state.language,
        proficiency: this.state.proficiency
      },
      { 
        headers: { Authorization: AuthStr } 
      })
      .then(response => {
        console.log(response.data);
        this.props.history.push('/language')
      })
      .catch((error) => {
        console.log('error 3 ' + error);
      });
  }

  handleValueChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Breadcrumbs links={breadcrumbLinks} />
        <Card
          bg='light'
          text='dark'
        >
          <Card.Header>Update Language</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Label>Language</Form.Label>
                    <Form.Control onChange={this.handleValueChange} value={this.state.language} name='language' size='sm' type="text" placeholder="Enter language" />
                  </Col>
                  <Col>
                    <Form.Label>Proficiency</Form.Label>
                    <Form.Control onChange={this.handleValueChange} name='proficiency' size='sm' as="select">
                      <option value='' key='-1'>--- Please select proficiency ---</option>
                      {
                        Proficiencies.map((value, index) => (
                          <option value={value} key={index} { this.state.proficiency } >{value}</option>
                        ))
                      }
                    </Form.Control>
                  </Col>
                </Form.Row>
              </Form.Group>
            </Form>
          </Card.Body>
          <Card.Footer>
            <Button size='sm' onClick={this.saveHandler} variant="success" type="submit" className='float-right'>Save</Button>
            <NavLink exact to='/language' className='btn btn-outline-secondary btn-sm float-left'>Back to Language</NavLink>
          </Card.Footer>
        </Card>
      </div>
    );
  }

}

export default EditLanguage;
