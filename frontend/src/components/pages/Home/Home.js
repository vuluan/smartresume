
import React, { useState, useEffect } from 'react';
import ResumeTable from './ResumeTable';
import { NavLink, useHistory } from 'react-router-dom';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import axios, { HOST } from '../../../utils/httpUtilities';
import LocalStorageService from './../../../utils/localStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home(props) {
  let BASE_URL = HOST;

  const [resume, setResume] = useState([]);
  const history = useHistory();

  let success = props.location.success
  let message = props.location.message



  useEffect(() => {
    getResumeList();
  }, [])

  const successToast = (msg) => {

    toast.success(`😀 ${msg}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  if (success === true) {
    successToast(message);
  }


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

  const handleEdit = (id) => {

    history.push({
      pathname: '/resume/create',
      resumeId: id,
    });
  }

  function handleShow(id) {

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
      <ToastContainer />
      <NavLink exact to='/resume/create' className='btn btn-success float-right'>New Resume</NavLink>
      <ResumeTable resume={resume} onEdit={handleEdit} onShow={handleShow} onDelete={handleDelete} />
    </>
  );
}

export default Home;
