import React from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const CONTAINER = styled.div`
  background: #F7F9FA;
  height: auto;
  width: 90%;
  margin: 5em auto;
  color: snow;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  @media(min-width: 786px) {
    width: 60%;
  }

  label {
    color: #24B9B6;
    font-size: 1.2em;
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
  font-size: 1.2em;
  font-weight: 400;

  &:hover {
    background: #1D3461;
  }
`;


// Schema for yup
const validationSchema = Yup.object().shape({
  school: Yup.string()
  .required("*School is required"),
  degree: Yup.string()
  .required("*Degree is required"),
  field: Yup.string()
  .required("*Field of study is required"),
  start: Yup.number()
  .required("*Start year is required"),
  end: Yup.number()
  .required("*End year is required")
});

const EducationForm = () => {
  return(
    <CONTAINER>
    
    <Formik
      initialValues={{ school:"", degree:"", field:"", start:"", end:""}}
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
              className={touched.degree && errors.degree ? "has-error" : null}
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
              className={touched.field && errors.field ? "has-error" : null}
               />
             {touched.field && errors.field ? (
                 <div className="error-message">{errors.field}</div>
               ): null}
          </Form.Group>
          <Form.Group controlId="formStart">
            <Form.Label>Start :</Form.Label>
            <Form.Control
              type="text"
              name="start"
              placeholder="Start Year"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.start}
              className={touched.start && errors.start ? "has-error" : null}
              />
            {touched.start && errors.start ? (
                <div className="error-message">{errors.start}</div>
              ): null}
          </Form.Group>

          <Form.Group controlId="formEnd">
            <Form.Label>Start :</Form.Label>
            <Form.Control
              type="text"
              name="end"
              placeholder="end Year"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.end}
              className={touched.end && errors.end ? "has-error" : null}
              />
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
