import React from 'react';
import PropTypes from 'prop-types';

function MessageStatusCounts({ counts }) {
  const countMap = new Map(counts.map(c => [c.status, c.count]));
  const getStatusCount = status => countMap.get(status) || 0;

  return (
    <div>
      <h4>Message Statuses</h4>
      <div />
      <div>Error: {getStatusCount('error')}</div>
      <div>Enqueued: {getStatusCount('enqueued')}</div>
      <div>Finished: {getStatusCount('finished')}</div>
      <div>Processing: {getStatusCount('processing')}</div>
    </div>
  );
}

MessageStatusCounts.propTypes = {
  counts: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    })
  ).isRequired
};

export default MessageStatusCounts;
