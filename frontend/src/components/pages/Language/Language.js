import React, { Component } from 'react';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import { Table, Button, Card, Form, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPenSquare, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const breadcrumbLinks = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Language',
    path: '/language',
    active: true
  }
];

class Language extends Component {

  state = {
    languages: [],
    searchKeyword: ''
  }

  onLoadData() {
    let URL = '/api/language/list/5f0a819684a234361cf9421c';
    let USER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoibmd1eWVudnVsdWFuODlAZ21haWwuY29tIiwiX2lkIjoiNWYwYTgxOTY4NGEyMzQzNjFjZjk0MjFjIn0sImlhdCI6MTU5NjY4MDUxM30._YNjni5cbnNd69Ez8PhYKrXu_4DH6QOrVUBnCvI18V0';

    const AuthStr = 'Bearer '.concat(USER_TOKEN);
    axios.get(URL, { headers: { Authorization: AuthStr } })
        .then(response => {
          console.log(response.data);
          this.setState({
            languages: response.data.data
          });
        })
        .catch((error) => {
          console.log('error 3 ' + error);
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
            let URL = '/api/language';
            let USER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoibmd1eWVudnVsdWFuODlAZ21haWwuY29tIiwiX2lkIjoiNWYwYTgxOTY4NGEyMzQzNjFjZjk0MjFjIn0sImlhdCI6MTU5NjczMTA4OX0.VdVmVDtS-zI_ZNRqirXRM_FKV02V_eU7qqvWAq8N4PE';
            const AuthStr = 'Bearer '.concat(USER_TOKEN);
            axios.delete(URL, 
              { 
                headers: { 
                  Authorization: AuthStr 
                },
                data: {
                  id: id
                }
              })
              .then(response => {
                console.log(response.data);
                this.onLoadData();
              })
              .catch((error) => {
                console.log('Delete language: ' + error);
              });
          }
        },
        {
          label: 'No',
          onClick: () => {

          }
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
          <Card.Header>Languages</Card.Header>
          <Card.Body>
            <Form className='float-left'>
              <Form.Row className="align-items-center">
                <Col xs="auto">
                  <Form.Label srOnly>Language</Form.Label>
                  <Form.Control
                    size="sm"
                    className="mb-4"
                    id="inlineFormInput"
                    placeholder="Language"
                    name="searchKeyword"
                    onChange={this.handleValueChange}
                  />
                </Col>
                <Col xs="auto">
                  <Button size="sm" type="submit" className="mb-4" variant='info'>Search</Button>
                </Col>
              </Form.Row>
            </Form>
            <NavLink exact to='/language/add' className='btn btn-sm btn-outline-secondary float-right'>New Language</NavLink>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Language</th>
                  <th>Proficiency</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.languages.map((lang, index) => 
                    lang.language.toLowerCase().includes(this.state.searchKeyword.toLowerCase()) ? 
                    <tr key={index}>
                      <td>{ index + 1 }</td>
                      <td>{ lang.language }</td>
                      <td>{ lang.proficiency }</td>
                      <td className='text-center'>
                        <NavLink exact to={'/language/edit/' + lang._id } className='mr-3'><FaPenSquare className='text-warning' /></NavLink>
                        <NavLink exact to='#' className='mr-3'><FaTrash className='text-danger' onClick={() => this.onDeleteHandler(lang._id)}/></NavLink>
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

export default Language;
