import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EducationForm from './EducationForm';
import EducationTable from './EducationTable';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import axios from 'axios';

function Education() {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdGFwcDU1QG1id2FzaS5jb20iLCJfaWQiOiI1ZjJjZDM3NjJlZTlkYjAwMTcyOGVkOTIifSwiaWF0IjoxNTk2NzczNDg5fQ.MHKYgOw8wmHIVn7SM2qNliVQUPfJoWJV5FImkHmWZeI'

  const [education, setEducation] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEducationList = () => {
    axios.get('https://smartresumebuild.herokuapp.com/api/education/list/5f2cd3762ee9db001728ed92', {
      headers: {
        Authorization: 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((response) => {
      console.log(response.data.data);
      setEducation(response.data.data);
    });
  }

  const deleteEducationById = (index) => {
    console.log(education[index]);
    // axios.delete('https://smartresumebuild.herokuapp.com/api/education', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: 'Bearer ' + token //the token is a variable which holds the token
    //   }
    // }).then((response) => {
    //   console.log(response.data.data);
    //   setEducation(response.data.data);
    // });
  }

  useEffect(() => {
    getEducationList();
  }, [])

  const handleEdit = (index) => {
    console.log(`Index: ${index}`);
    console.log(`Edit clicked: ${index}`);
    setFormValues(education[index]);
    setShow(currentSet => !currentSet);
  }

  const handleAddNew = () => {
    console.log(`Add New`);
    setFormValues({})
    setShow(currentSet => !currentSet);
  }

  const handleSave = (data) => {
    console.log("Save clicked: " + JSON.stringify(data));
    //data.id = education.length + 1;
    data.user_id = '5f2cd3762ee9db001728ed92'
    axios.post('https://smartresumebuild.herokuapp.com/api/education/add', data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token //the token is a variable which holds the token
      }
    }).then((response) => {
      console.log(response.data.data);
      setShow(false)
      getEducationList();

    }).catch((error) => {
      console.log(error);
    });
  }

  const handleDelete = (id) => {
    console.log("Delete clicked:" + JSON.stringify({ id }));
    let deleteId = { id }


    axios.delete('https://smartresumebuild.herokuapp.com/api/education', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token //the token is a variable which holds the token
      },
      data: deleteId
    }).then((response) => {
      console.log(response.data);
      getEducationList();
    }).catch((error) => {
      console.log(error);
    });
    // setEducation(prevEducation => prevEducation.filter((g) => g.id !== id))
  }

  const breadcrumbLinks = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'Education',
      path: '/education',
      active: true
    }
  ];

  return (
    <>

      <Breadcrumbs links={breadcrumbLinks} />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Education</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EducationForm onSave={handleSave} formValues={formValues} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

      <Button className='btn btn-success float-right' onClick={handleAddNew}>Add Education</Button>
      <EducationTable education={education} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
}

export default Education;
