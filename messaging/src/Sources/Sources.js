import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SourceBasic from './SourceBasic';
import { Link } from 'react-router-dom';

function Sources({ sources, fetchSources }) {
  useEffect(() => {
    fetchSources();
  }, []);

  const items = sources.map(source => (
    <SourceBasic key={source.id} source={source} />
  ));

  return (
    <div>
      <h2>Sources</h2>
      <ul>{items}</ul>
      <Link to="/createSource">Create new</Link>
    </div>
  );
}

Sources.propTypes = {
  sources: PropTypes.array.isRequired,
  fetchSources: PropTypes.func.isRequired
};

export default Sources;
