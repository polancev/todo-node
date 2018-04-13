import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function Header(props) {
  return (
    <h1>{props.title}</h1>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};

export default Header;
