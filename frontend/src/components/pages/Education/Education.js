import React, { useState, useEffect } from 'react';
import EducationForm from './EducationForm';
import EducationTable from './EducationTable';
import Breadcrumbs from '../../layouts/Breadcrumbs';
import axios from 'axios';

function Education() {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdGFwcDU1QG1id2FzaS5jb20iLCJfaWQiOiI1ZjJjZDM3NjJlZTlkYjAwMTcyOGVkOTIifSwiaWF0IjoxNTk2NzczNDg5fQ.MHKYgOw8wmHIVn7SM2qNliVQUPfJoWJV5FImkHmWZeI'

  const [education, setEducation] = useState([]);

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

  useEffect(() => {
    getEducationList();
  }, [])

  const handleEdit = () => {
    console.log("Edit clicked");
  }

  const handleSave = (data) => {

    console.log("Save clicked: " + JSON.stringify(data));
    data.id = education.length + 1;
    setEducation(prevEducation => [...prevEducation, data]);
  }

  const handleDelete = (id) => {
    console.log("Delete clicked:" + id);

    setEducation(prevEducation => prevEducation.filter((g) => g.id !== id))

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
      <EducationForm onSave={handleSave} />
      <EducationTable education={education} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
}

export default Education;
