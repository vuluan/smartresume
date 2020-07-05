import React from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Years from './Years';

const CONTAINER = styled.div`
  background: #F7F9FA;
  height: auto;
  width: 90%;
  margin: 1em auto;
  color: snow;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  @media(min-width: 786px) {
    width: 60%;
  }

  label {
    color: #24B9B6;
    font-weight: 400;
  }

  .error {
    border: 2px solid #FF6565;
  }

  .error-message {
    color: #FF6565;
    padding: .5em .2em;
    height: 1em;
    position: absolute;
    font-size: .8em;
  }

  h1 {
    color: #24B9B6;
    padding-top: .5em;
  }

  .form-group {
    margin-bottom: 1.5em;
  }
`;

const MYFORM = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 2em;

  @media(min-width: 786px) {
    width: 50%;
  }
`;

const BUTTON = styled(Button)`
  background: #1863AB;
  border: none;
 
  font-weight: 400;

  &:hover {
    background: #1D3461;
  }
`;

const validationSchema = Yup.object().shape({
  school: Yup.string()
  .required("*School is required"),
  degree: Yup.string()
  .required("*Degree is required"),
  field: Yup.string()
  .required("*Field of study is required"),
});

const EducationForm = () => {
  return(<CONTAINER> 
    <Formik
      initialValues={{ school:"", degree:"", field:"", start:"2019", end:"2020"}}
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting, resetForm}) => {
          setSubmitting(true);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
      }}
    >
      {( {values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting }) => (
        <MYFORM onSubmit={handleSubmit} className="mx-auto">
          <Form.Group controlId="formSchool">
            <Form.Label>School :</Form.Label>
            <Form.Control
              type="text"
              name="school"
              placeholder="School name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.school}
            
              />
              {touched.school && errors.school ? (
                <div className="error-message">{errors.school}</div>
              ): null}
          </Form.Group>
          <Form.Group controlId="formDegree">
            <Form.Label>Degree :</Form.Label>
            <Form.Control
              type="text"
              name="degree"
              placeholder="Degree/Qualification"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.degree}
           
               />
               {touched.degree && errors.degree ? (
                 <div className="error-message">{errors.degree}</div>
               ): null}
          </Form.Group>
          <Form.Group controlId="formField">
            <Form.Label>Field of Study :</Form.Label>
            <Form.Control
              type="text"
              name="field"
              placeholder="Filed of study"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.field}
             
               />
             {touched.field && errors.field ? (
                 <div className="error-message">{errors.field}</div>
               ): null}
          </Form.Group>
          <Form.Group controlId="formStart">
            <Form.Label>Start :</Form.Label>
            <Form.Control as="select" 
             name="start"   
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.start}
            >
              <Years/>
            </Form.Control>
            {touched.start && errors.start ? (
                <div className="error-message">{errors.start}</div>
              ): null}
          </Form.Group>

          <Form.Group controlId="formEnd">
            <Form.Label>Finish :</Form.Label>
            <Form.Control
               as="select" 
              name="end"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.end}
              > 
              <Years/>
          </Form.Control>
            {touched.end && errors.end ? (
                <div className="error-message">{errors.end}</div>
              ): null}
          </Form.Group>
     
          <BUTTON variant="primary" type="submit" disabled={isSubmitting}>
            Save
          </BUTTON>
        </MYFORM>
      )}
    </Formik>
    </CONTAINER>
  );
}

export default EducationForm;
