import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

function EditSource({ sourceId, source, history, fetchSource, updateSource }) {
  useEffect(
    () => {
      // If loading page directly then need to fetch data
      // But might as well fetch anyway to reduce staleness
      fetchSource(sourceId);
    },
    [sourceId]
  );

  if (!source) {
    return null;
  }

  // NOTE: To avoid overwrites with optimistic locking, check updated_at
  // against initial value server-side before committing.

  return (
    <div>
      <Link to={'/source/' + sourceId}>Back</Link>
      <h4>Edit Source ID {sourceId}</h4>
      <Formik
        initialValues={{
          name: source.name,
          environment: source.environment,
          encoding: source.encoding
        }}
        validate={validate}
        onSubmit={(values, actions) => {
          updateSource(sourceId, values)
            .then(() => {
              history.push('/source/' + sourceId);
            })
            .finally(() => {
              actions.setSubmitting(false);
            });
        }}
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
    </div>
  );
}

EditSource.propTypes = {
  sourceId: PropTypes.string.isRequired,
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    environment: PropTypes.string.isRequired,
    encoding: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  fetchSource: PropTypes.func.isRequired,
  updateSource: PropTypes.func.isRequired
};

export default EditSource;
