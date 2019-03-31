import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SourceBasic({ source }) {
  return (
    <li>
      <Link to={'/source/' + source.id}>{source.name}</Link>
    </li>
  );
}

SourceBasic.propTypes = {
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default SourceBasic;
