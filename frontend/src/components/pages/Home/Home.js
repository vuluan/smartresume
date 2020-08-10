
import React, { useState, useEffect } from 'react';
import ResumeTable from './ResumeTable';
import ResumeSearch from './ResumeSearch';
import { NavLink, useHistory } from 'react-router-dom';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import axios, { HOST } from '../../../utils/httpUtilities';
import LocalStorageService from './../../../utils/localStorage';

function Home() {
  let BASE_URL = HOST;

  const [resume, setResume] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getResumeList();
  }, [])

  const getResumeList = () => {
    let userId = LocalStorageService.getUserInfo().userId;
    axios.get(`${BASE_URL}/resume/list/${userId}`).then((response) => {
      setResume(response.data.data);
    });
  }

  const handleDelete = (id) => {
    let deleteId = { id }
    axios.delete(`${BASE_URL}/resume`, {
      data: deleteId
    }).then((response) => {
      getResumeList();
    }).catch((error) => {
      console.log(error);
    });
  }

  const handleEdit = () => {
    console.log("Edit clicked");
  }

  function handleShow(id) {
    console.log(id);
    // history.push("/resume/render");
    history.push({
      pathname: '/resume/render',
      resumeId: id,
    });
  }


  const breadcrumbLinks = [
    {
      label: 'Home',
      path: '/',
      active: true
    }
  ];

  return (
    <>
      <Breadcrumbs links={breadcrumbLinks} />
      <ResumeSearch />
      <NavLink exact to='/resume/create' className='btn btn-success float-right'>New Resume</NavLink>
      <ResumeTable resume={resume} onEdit={handleEdit} onShow={handleShow} onDelete={handleDelete} />
    </>
  );
}

export default Home;
