import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SourceForm from './SourceForm';

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

  const handleSubmit = (values, actions) => {
    updateSource(sourceId, values)
      .then(() => {
        history.push('/source/' + sourceId);
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  };

  return (
    <div>
      <Link to={'/source/' + sourceId}>Back</Link>
      <h4>Edit Source ID {sourceId}</h4>
      <SourceForm source={source} onSubmit={handleSubmit} />
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
