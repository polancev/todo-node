import React from 'react';
import PropTypes from 'prop-types';

const SimpleButton = ({ onClick, children }) => (
  <button
    className="simple bordered"
    onClick={onClick}
  >
    {children}
  </button>
);

SimpleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default SimpleButton;
