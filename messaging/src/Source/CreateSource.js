import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import SourceForm from './SourceForm';
import environments from '../constants/environments';
import encodings from '../constants/encodings';

const defaultValues = {
  name: '',
  environment: environments[0],
  encoding: encodings[0]
};

// newLocation isn't set when the promise resolves.
// Currently set up reducer to clear it out everywhere else.
// A better solution could be to use connected-react-router.

function CreateSource({ newLocation, createSource }) {
  const handleSubmit = (values, actions) => {
    createSource(values).finally(() => {
      actions.setSubmitting(false);
    });
  };

  if (newLocation) {
    return <Redirect to={newLocation} />;
  }

  return (
    <div>
      <h4>Create Source</h4>
      <SourceForm source={defaultValues} onSubmit={handleSubmit} />
    </div>
  );
}

CreateSource.propTypes = {
  newLocation: PropTypes.string,
  createSource: PropTypes.func.isRequired
};

export default CreateSource;
