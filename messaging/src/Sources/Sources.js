import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SourceBasic from './SourceBasic';
import SourceDetail from './SourceDetail';

// TODO: Probably want more connected containers - break up functionality

function Sources({
  sources,
  currentSource,
  currentMessages,
  currentMessageStatusCounts,
  fetchSources,
  fetchSource,
  fetchMessagesForSource,
  fetchMessageStatusCountsForSource
}) {
  useEffect(() => {
    fetchSources();
  }, []);

  const items = sources.map(source => (
    <SourceBasic key={source.id} source={source} fetchSource={fetchSource} />
  ));

  return (
    <div>
      <h2>Sources</h2>
      <ul>{items}</ul>
      {currentSource && (
        <SourceDetail
          source={currentSource}
          messages={currentMessages}
          messageStatusCounts={currentMessageStatusCounts}
          fetchMessagesForSource={fetchMessagesForSource}
          fetchMessageStatusCountsForSource={fetchMessageStatusCountsForSource}
        />
      )}
    </div>
  );
}

Sources.propTypes = {
  sources: PropTypes.array.isRequired,
  currentSource: PropTypes.object,
  currentMessages: PropTypes.array.isRequired,
  currentMessageStatusCounts: PropTypes.array.isRequired,
  fetchSources: PropTypes.func.isRequired,
  fetchSource: PropTypes.func.isRequired,
  fetchMessagesForSource: PropTypes.func.isRequired,
  fetchMessageStatusCountsForSource: PropTypes.func.isRequired
};

export default Sources;
