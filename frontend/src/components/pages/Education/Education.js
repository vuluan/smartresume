import React, {useState} from 'react';
import EducationForm from './EducationForm';
import EducationTable from './EducationTable';

function Education() {

  const [education,setEducation] = useState([
        {
          id:12345,
          school: "Humber College",
          degree :"Post Grad Diploma",
          field: "IT",
          start: 2019,
          finish: 2020
        },
        {
          id:12346,
          school: "UCT",
          degree :"Bachelors of Commerce",
          field: "Information Systems",
          start: 2019,
          finish: 2020
        },
        {
          id:12347,
          school: "Agha Khan Mzizima",
          degree :"Diploma",
          field: "PCM",
          start: 2019,
          finish: 2020
        },
  ]);

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
