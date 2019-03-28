import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Sources({ sources, foo }) {
  useEffect(() => {
    console.log('mount');
    foo();
  }, []);

  return <div>Sources {JSON.stringify(sources)}</div>;
}

Sources.propTypes = {
  sources: PropTypes.array.isRequired,
  foo: PropTypes.func.isRequired
};

export default Sources;
