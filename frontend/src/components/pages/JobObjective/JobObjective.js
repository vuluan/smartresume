import React, { useState } from 'react';
import JobObjectiveForm from './JobObjectiveForm';
import JobObjectiveTable from './JobObjectiveTable';
import Breadcrumbs from '../../layouts/Breadcrumbs';


function JobObjective() {
  const [objective, setObjective] = useState([
    {
      id: 1,
      objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
    {
      id: 2,
      objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    }, {
      id: 3,
      objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    },
  ]);

  const handleEdit = () => {
    console.log("Edit clicked");
  }

  const handleSave = (data) => {

    console.log("Save clicked: " + JSON.stringify(data));
    data.id = objective.length + 1;
    setObjective(prevObjective => [...prevObjective, data]);
  }

  const handleDelete = (id) => {
    console.log("Delete clicked:" + id);

    setObjective(prevObjective => prevObjective.filter((g) => g.id !== id))

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
      <JobObjectiveForm onSave={handleSave} />
      <JobObjectiveTable objective={objective} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
}

export default JobObjective;
