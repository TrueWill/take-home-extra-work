import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SourceBasic from './SourceBasic';
import SourceDetail from './SourceDetail';

function Sources({
  sources,
  currentSource,
  currentMessages,
  fetchSources,
  fetchSource,
  fetchMessagesForSource
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
          fetchMessagesForSource={fetchMessagesForSource}
        />
      )}
    </div>
  );
}

Sources.propTypes = {
  sources: PropTypes.array.isRequired,
  currentSource: PropTypes.object,
  currentMessages: PropTypes.array.isRequired,
  fetchSources: PropTypes.func.isRequired,
  fetchSource: PropTypes.func.isRequired,
  fetchMessagesForSource: PropTypes.func.isRequired
};

export default Sources;
