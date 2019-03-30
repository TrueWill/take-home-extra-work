import React from 'react';
import PropTypes from 'prop-types';

function SourceBasic({ source, fetchSource }) {
  const handleClick = () => {
    fetchSource(source.id);
  };

  return <li onClick={handleClick}>{source.name}</li>;
}

SourceBasic.propTypes = {
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  fetchSource: PropTypes.func.isRequired
};

export default SourceBasic;
