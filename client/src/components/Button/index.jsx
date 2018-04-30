import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, onClick, children }) => (
  <button
    type={type}
    className="simple bordered"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  onClick() {},
};

export default Button;
