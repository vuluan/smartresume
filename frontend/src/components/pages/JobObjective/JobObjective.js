import React, { useState, useEffect } from 'react';
import JobObjectiveForm from './JobObjectiveForm';
import JobObjectiveTable from './JobObjectiveTable';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import axios, { HOST } from '../../../utils/httpUtilities';
import LocalStorageService from './../../../utils/localStorage';
import { Modal, Button } from 'react-bootstrap';

function JobObjective() {
  let BASE_URL = 'https://smartresumebuild.herokuapp.com/api';
  const [objective, setObjective] = useState([]);

  const [formValues, setFormValues] = useState({});
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    getObjectiveList();
  }, [])

  const getObjectiveList = () => {
    let userId = LocalStorageService.getUserInfo().userId;
    axios.get(`${BASE_URL}/objective/list/${userId}`).then((response) => {
      setObjective(response.data.data);
    });
  }

  const handleSave = (data) => {
    if (isEditing) {
      data.user_id = LocalStorageService.getUserInfo().userId;
      data.id = formValues._id
      axios.put(`${BASE_URL}/objective`, data).then((response) => {
        setShow(false)
        getObjectiveList();
      }).catch((error) => {
        console.log(error);
      });
    } else {
      data.user_id = LocalStorageService.getUserInfo().userId;
      axios.post(`${BASE_URL}/objective/add`, data)
        .then((response) => {
          setShow(false)
          getObjectiveList();
        }).catch((error) => {
          console.log(error);
        });
    }
  }

  const handleDelete = (id) => {
    let deleteId = { id }
    axios.delete(`${BASE_URL}/objective`, {
      data: deleteId
    }).then((response) => {
      getObjectiveList();
    }).catch((error) => {
      console.log(error);
    });
  }

  const handleEdit = (index) => {
    setFormValues(objective[index]);
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
      label: 'Job Objectives',
      path: '/job-objective',
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
          <Modal.Title>{(isEditing) ? 'Update Objective' : 'Add Objective'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <JobObjectiveForm onSave={handleSave} formValues={formValues} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>




      <Button className='btn btn-success float-right' onClick={handleAddNew}>Add Objective</Button>
      <JobObjectiveTable objective={objective} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
}

export default JobObjective;
