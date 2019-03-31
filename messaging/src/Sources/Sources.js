import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SourceBasic from './SourceBasic';
import SourceDetail from '../Source/SourceDetailContainer';

function Sources({ sources, currentSource, fetchSources, fetchSource }) {
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
      {currentSource && <SourceDetail />}
    </div>
  );
}

Sources.propTypes = {
  sources: PropTypes.array.isRequired,
  currentSource: PropTypes.object,
  fetchSources: PropTypes.func.isRequired,
  fetchSource: PropTypes.func.isRequired
};

export default Sources;
