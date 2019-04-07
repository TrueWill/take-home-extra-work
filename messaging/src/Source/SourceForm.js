import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import environments from '../constants/environments';
import encodings from '../constants/encodings';

function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.length > 255) {
    errors.name = 'Name must be 255 characters or less';
  }

  return errors;
}

const environmentOptions = environments.map(env => (
  <option key={env} value={env}>
    {env}
  </option>
));

const encodingOptions = encodings.map(enc => (
  <option key={enc} value={enc}>
    {enc}
  </option>
));

// Used for both create and edit
function SourceForm({ source, onSubmit }) {
  return (
    <Formik
      initialValues={{
        name: source.name,
        environment: source.environment,
        encoding: source.encoding
      }}
      validate={validate}
      onSubmit={onSubmit}
      render={({ errors, status, touched, isSubmitting, dirty }) => (
        <Form>
          <label>
            Name: <Field type="text" size="50" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            Environment:
            <Field component="select" name="environment">
              {environmentOptions}
            </Field>
          </label>
          <label>
            Encoding:
            <Field component="select" name="encoding">
              {encodingOptions}
            </Field>
          </label>
          <input
            type="submit"
            value="Save"
            disabled={isSubmitting || !isEmpty(errors) || !dirty}
          />
        </Form>
      )}
    />
  );
}

SourceForm.propTypes = {
  source: PropTypes.shape({
    name: PropTypes.string.isRequired,
    environment: PropTypes.string.isRequired,
    encoding: PropTypes.string.isRequired
  }).isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SourceForm;
