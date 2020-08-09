import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EducationForm from './EducationForm';
import EducationTable from './EducationTable';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import axios, { HOST } from '../../../utils/httpUtilities';
import LocalStorageService from './../../../utils/localStorage';

function Education() {
  let BASE_URL = 'https://smartresumebuild.herokuapp.com/api';

  const [education, setEducation] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getEducationList();
  }, [])

  const getEducationList = () => {
    let userId = LocalStorageService.getUserInfo().userId;
    axios.get(`${BASE_URL}/education/list/${userId}`).then((response) => {
      setEducation(response.data.data);
    });
  }

  const handleSave = (data) => {
    if (isEditing) {
      data.user_id = LocalStorageService.getUserInfo().userId;
      data.id = formValues._id
      axios.put(`${BASE_URL}/education`, data).then((response) => {
        setShow(false)
        getEducationList();
      }).catch((error) => {
        console.log(error);
      });
    } else {
      data.user_id = LocalStorageService.getUserInfo().userId;
      axios.post(`${BASE_URL}/education/add`, data)
        .then((response) => {
          setShow(false)
          getEducationList();
        }).catch((error) => {
          console.log(error);
        });

    }
  }

  const handleDelete = (id) => {
    let deleteId = { id }
    axios.delete(`${BASE_URL}/education`, {
      data: deleteId
    }).then((response) => {
      getEducationList();
    }).catch((error) => {
      console.log(error);
    });
  }

  const handleEdit = (index) => {
    setFormValues(education[index]);
    setIsEditing(true);
    setShow(currentSet => !currentSet);
  }

  const handleAddNew = () => {
    setFormValues({})
    setIsEditing(false);
    setShow(currentSet => !currentSet);
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
          <Modal.Title>{(isEditing) ? 'Update Education' : 'Add Education'}</Modal.Title>
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
