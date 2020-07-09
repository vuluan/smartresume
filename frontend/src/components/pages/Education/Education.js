import React, { useState } from 'react';
import EducationForm from './EducationForm';
import EducationTable from './EducationTable';
import Breadcrumbs from '../../layouts/Breadcrumbs';


function Education() {

  const [education, setEducation] = useState([
    {
      id: 1,
      school: "Humber College",
      degree: "Post Grad Diploma",
      field: "IT",
      start: 2019,
      finish: 2020
    },
    {
      id: 2,
      school: "UCT",
      degree: "Bachelors of Commerce",
      field: "Information Systems",
      start: 2019,
      finish: 2020
    },
    {
      id: 3,
      school: "Agha Khan Mzizima",
      degree: "Diploma",
      field: "PCM",
      start: 2019,
      finish: 2020
    },
  ]);

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
