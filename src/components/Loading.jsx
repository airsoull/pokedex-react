import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ extraClass }) => {
  const cssClass = `spinner-border ${extraClass}`;
  return (
    <div className={cssClass} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

Loading.propTypes = {
  extraClass: PropTypes.string,
};

Loading.defaultProps = {
  extraClass: '',
};

export default Loading;
