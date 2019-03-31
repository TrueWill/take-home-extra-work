import React from 'react';
import PropTypes from 'prop-types';
import Messages from '../Sources/Messages';
import MessageStatusCounts from '../Sources/MessageStatusCounts';

// TODO: Convert string to local date

function SourceDetail({
  source,
  messages,
  messageStatusCounts,
  fetchSource,
  fetchMessagesForSource,
  fetchMessageStatusCountsForSource
}) {
  const handleLoadMessagesClick = () => {
    fetchMessagesForSource(source.id);
  };

  const handleLoadMessageStatusCountsClick = () => {
    fetchMessageStatusCountsForSource(source.id);
  };

  return (
    <div>
      <h3>Source</h3>
      <div>ID: {source.id}</div>
      <div>Name: {source.name}</div>
      <div>Environment: {source.environment}</div>
      <div>Encoding: {source.encoding}</div>
      <div>Created: {source.created_at}</div>
      <div>Updated: {source.updated_at}</div>
      <button type="button" onClick={handleLoadMessageStatusCountsClick}>
        Load message status counts
      </button>
      <MessageStatusCounts counts={messageStatusCounts} />
      <button type="button" onClick={handleLoadMessagesClick}>
        Load messages
      </button>
      <Messages messages={messages} />
    </div>
  );
}

SourceDetail.propTypes = {
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    environment: PropTypes.string.isRequired,
    encoding: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string
  }).isRequired,
  messages: PropTypes.array.isRequired,
  messageStatusCounts: PropTypes.array.isRequired,
  fetchSource: PropTypes.func.isRequired,
  fetchMessagesForSource: PropTypes.func.isRequired,
  fetchMessageStatusCountsForSource: PropTypes.func.isRequired
};

export default SourceDetail;
