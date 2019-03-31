import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Messages from '../Sources/Messages';
import MessageStatusCounts from '../Sources/MessageStatusCounts';

// TODO: Convert string to local date

function SourceDetail({
  sourceId,
  source,
  messages,
  messageStatusCounts,
  fetchSource,
  fetchMessagesForSource,
  fetchMessageStatusCountsForSource
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

  const handleLoadMessagesClick = () => {
    fetchMessagesForSource(source.id);
  };

  if (!source) return null;

  return (
    <div>
      <h3>Source</h3>
      <div>ID: {source.id}</div>
      <div>Name: {source.name}</div>
      <div>Environment: {source.environment}</div>
      <div>Encoding: {source.encoding}</div>
      <div>Created: {source.created_at}</div>
      <div>Updated: {source.updated_at}</div>
      <MessageStatusCounts counts={messageStatusCounts} />
      <button type="button" onClick={handleLoadMessagesClick}>
        Load messages
      </button>
      <Messages messages={messages} />
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
  messages: PropTypes.array.isRequired,
  messageStatusCounts: PropTypes.array.isRequired,
  fetchSource: PropTypes.func.isRequired,
  fetchMessagesForSource: PropTypes.func.isRequired,
  fetchMessageStatusCountsForSource: PropTypes.func.isRequired
};

export default SourceDetail;
