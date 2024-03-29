import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MessageStatusCounts from './MessageStatusCountsContainer';

// TODO: Convert string to local date

function SourceDetail({
  sourceId,
  source,
  location,
  history,
  fetchSource,
  fetchMessageStatusCountsForSource,
  deleteSource
}) {
  useEffect(
    () => {
      // Need to chain, otherwise FETCH_SOURCE_SUCCEEDED will clear currentMessageStatusCounts
      fetchSource(sourceId).then(() =>
        fetchMessageStatusCountsForSource(sourceId)
      );
    },
    [sourceId]
  );

  const handleDeleteClick = () => {
    // Very basic confirmation
    if (!window.confirm('Delete this source?')) {
      return;
    }

    deleteSource(sourceId).then(() => {
      history.push('/');
    });
  };

  if (!source) {
    return null;
  }

  return (
    <div>
      <h3>Source</h3>
      <div>ID: {source.id}</div>
      <div>Name: {source.name}</div>
      <div>Environment: {source.environment}</div>
      <div>Encoding: {source.encoding}</div>
      <div>Created: {source.created_at}</div>
      <div>Updated: {source.updated_at}</div>
      <Link to={location.pathname + '/edit'}>Edit</Link>
      <br />
      <button type="button" onClick={handleDeleteClick}>
        Delete
      </button>
      <MessageStatusCounts />
    </div>
  );
}

SourceDetail.propTypes = {
  sourceId: PropTypes.string.isRequired,
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    environment: PropTypes.string.isRequired,
    encoding: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  fetchSource: PropTypes.func.isRequired,
  fetchMessageStatusCountsForSource: PropTypes.func.isRequired,
  deleteSource: PropTypes.func.isRequired
};

export default SourceDetail;
