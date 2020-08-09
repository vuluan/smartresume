import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  objective: Yup.string()
    .required("*Objective is required"),

});

const JobObjectiveForm = ({ onSave, formValues }) => {
  return (<div>
    <Formik
      enableReinitialize={true}
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setTimeout(() => {
          onSave(values);
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="mx-auto">
            <Form.Group controlId="formObjective">
              <Form.Label>Objective :</Form.Label>
              <Form.Control
                as="textarea" rows="3"
                name="objective"
                placeholder="Enter your objective here.. A resume objective is a statement of your goals for employment, usually listed at the top of your resume."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.objective}
              />
              {touched.objective && errors.objective ? (
                <div className="error-message">{errors.objective}</div>
              ) : null}
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

export default JobObjectiveForm;
