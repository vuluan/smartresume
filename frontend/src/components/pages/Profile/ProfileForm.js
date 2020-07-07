import React from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Years from './Years';

const validationSchema = Yup.object().shape({
  profile: Yup.string()
  .required("*Profile is required"),

});

const ProfileForm = ({onSave}) => {
  return(<div> 
    <Formik
      initialValues={{ profile:""}}
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
          <Form.Group controlId="formProfile">
            <Form.Label>Profile :</Form.Label>
            <Form.Control
              as="textarea" rows="3"
              name="profile"
              placeholder="Enter your profile here.."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.profile}
              />
              {touched.profile && errors.profile ? (
                <div className="error-message">{errors.profile}</div>
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

export default ProfileForm;
