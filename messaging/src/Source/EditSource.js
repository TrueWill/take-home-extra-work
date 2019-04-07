import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import { Formik, Field, Form, ErrorMessage } from 'formik'

function EditSource({ sourceId, source, fetchSource }) {
  useEffect(
    () => {
      // If loading page directly then need to fetch data
      // But might as well fetch anyway to reduce staleness
      fetchSource(sourceId);
    },
    [sourceId]
  );

  return (
    <div>
      <Link to={'/source/' + sourceId}>Back</Link>
      <h4>Edit Source ID {sourceId}</h4>
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
  fetchSource: PropTypes.func.isRequired
};

export default EditSource;
