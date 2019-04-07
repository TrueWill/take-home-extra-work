import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function EditSource({ sourceId }) {
  return (
    <div>
      <Link to={'/source/' + sourceId}>Back</Link>
      <h4>Edit Source ID {sourceId}</h4>
    </div>
  );
}

EditSource.propTypes = {
  sourceId: PropTypes.string.isRequired
};

export default EditSource;
