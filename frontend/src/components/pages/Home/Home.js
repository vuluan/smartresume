
import React, { useState } from 'react';
import ResumeCreate from './ResumeCreate';
import ResumeTable from './ResumeTable';
import ResumeSearch from './ResumeSearch';
import { NavLink } from 'react-router-dom';
import Breadcrumbs from '../../layouts/Breadcrumbs';


function Home() {
  const [resume, setResume] = useState([
    {
      id: 1,
      title: "This is the resume title/name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      date_created: "1/1/2020"

    },
    {
      id: 2,
      title: "This is the resume title/name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date_created: "1/1/2020"
    }, {
      id: 3,
      title: "This is the resume title/name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date_created: "1/1/2020"
    },
  ]);

  const handleEdit = () => {
    console.log("Edit clicked");
  }

  const handleSave = (data) => {

    console.log("Save clicked: " + JSON.stringify(data));
    data.id = resume.length + 1;
    setResume(prevResume => [...prevResume, data]);
  }

  const handleDelete = (id) => {
    console.log("Delete clicked:" + id);
    setResume(prevResume => prevResume.filter((g) => g.id !== id))

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
      <ResumeTable resume={resume} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
}

export default Home;
