import React from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Years from './Years';

const validationSchema = Yup.object().shape({
  school: Yup.string()
  .required("*School is required"),
  degree: Yup.string()
  .required("*Degree is required"),
  field: Yup.string()
  .required("*Field of study is required"),
});

const EducationForm = ({onSave}) => {
  return(<div> 
    <Formik
      initialValues={{ school:"", degree:"", field:"", start:"2019", finish:"2020"}}
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting, resetForm}) => {
          setSubmitting(true);
          setTimeout(() => {
           onSave(values);
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
        <Form onSubmit={handleSubmit} className="mx-auto">
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

          <Form.Group controlId="formFinish">
            <Form.Label>Finish :</Form.Label>
            <Form.Control
               as="select" 
              name="finish"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.finish}
              > 
              <Years/>
          </Form.Control>
            {touched.finish && errors.finish ? (
                <div className="error-message">{errors.finish}</div>
              ): null}
          </Form.Group>
     
          <Button variant="primary" type="submit" disabled={isSubmitting} >
            Save
          </Button>
        </Form>
      )}
    </Formik>
    </div>
  );
}

export default EducationForm;
