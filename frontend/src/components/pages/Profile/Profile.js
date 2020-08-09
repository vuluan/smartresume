
import React, { useState, useEffect } from 'react';
import ProfileForm from './ProfileForm';
import ProfileTable from './ProfileTable';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import axios, { HOST } from '../../../utils/httpUtilities';
import LocalStorageService from './../../../utils/localStorage';
import { Modal, Button } from 'react-bootstrap';

function Profile() {
  let BASE_URL = 'https://smartresumebuild.herokuapp.com/api';

  const [profile, setProfile] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [show, setShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleClose = () => setShow(false);


  useEffect(() => {
    getProfileList();
  }, [])

  const getProfileList = () => {
    let userId = LocalStorageService.getUserInfo().userId;
    axios.get(`${BASE_URL}/jobprofile/list/${userId}`).then((response) => {
      setProfile(response.data.data);
    });
  }

  const handleSave = (data) => {
    if (isEditing) {
      data.user_id = LocalStorageService.getUserInfo().userId;
      data.id = formValues._id
      axios.put(`${BASE_URL}/jobprofile`, data).then((response) => {
        setShow(false)
        getProfileList();
      }).catch((error) => {
        console.log(error);
      });
    } else {
      data.user_id = LocalStorageService.getUserInfo().userId;
      axios.post(`${BASE_URL}/jobprofile/add`, data)
        .then((response) => {
          setShow(false)
          getProfileList();
        }).catch((error) => {
          console.log(error);
        });
    }
  }

  const handleDelete = (id) => {
    let deleteId = { id }
    axios.delete(`${BASE_URL}/jobprofile`, {
      data: deleteId
    }).then((response) => {
      getProfileList();
    }).catch((error) => {
      console.log(error);
    });
  }

  const handleEdit = (index) => {
    setFormValues(profile[index]);
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
      label: 'Profile',
      path: '/profile',
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
          <Modal.Title>{(isEditing) ? 'Update Profile' : 'Add Profile'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProfileForm onSave={handleSave} formValues={formValues} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Button className='btn btn-success float-right' onClick={handleAddNew}>Add Profile</Button>
      <ProfileTable profile={profile} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
}

export default Profile;
