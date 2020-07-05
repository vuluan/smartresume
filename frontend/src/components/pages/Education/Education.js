import React, {useState} from 'react';
import EducationForm from './EducationForm';
import EducationTable from './EducationTable';

function Education() {

  const [education,setEducation] = useState([]);

  const handleEdit = () =>{
    console.log("Edit clicked");
    
  }

  const handleDelete = () =>{
    console.log("Delete clicked");
  }

  return (
    <>
    <EducationForm />
    <EducationTable education ={education} onEdit={handleEdit} onDelete={handleDelete}/>
    </>
  );
}

export default Education;
