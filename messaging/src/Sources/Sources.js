import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Sources({ sources, fetchSources }) {
  useEffect(() => {
    fetchSources();
  }, []);

  const items = sources.map(source => <li key={source.id}>{source.name}</li>);

  return (
    <div>
      <h2>Sources</h2>
      <ul>{items}</ul>
    </div>
  );
}

Sources.propTypes = {
  sources: PropTypes.array.isRequired,
  fetchSources: PropTypes.func.isRequired
};

export default Sources;
