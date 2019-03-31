import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MessageStatusCounts({ counts, location }) {
  const countMap = new Map(counts.map(c => [c.status, c.count]));
  const getStatusCount = status => countMap.get(status) || 0;

  return (
    <div>
      <h4>Message Statuses (click to view messages)</h4>
      <div>
        <Link to={location.pathname + '/messages/error'}>Error:</Link>{' '}
        {getStatusCount('error')}
      </div>
      <div>
        <Link to={location.pathname + '/messages/enqueued'}>Enqueued:</Link>{' '}
        {getStatusCount('enqueued')}
      </div>
      <div>
        <Link to={location.pathname + '/messages/finished'}>Finished:</Link>{' '}
        {getStatusCount('finished')}
      </div>
      <div>
        <Link to={location.pathname + '/messages/processing'}>Processing:</Link>{' '}
        {getStatusCount('processing')}
      </div>
      <p />
      <Link to={location.pathname + '/messages'}>All messages for source</Link>
    </div>
  );
}

MessageStatusCounts.propTypes = {
  counts: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    })
  ).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default MessageStatusCounts;
