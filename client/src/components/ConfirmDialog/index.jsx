import React from 'react';
import PropTypes from 'prop-types';
import SimpleButton from '../Button';
import './index.css';

function ConfirmDialog(props) {
  return (
    <div className="confirm">
      <div className="confirm__title">{props.title}</div>
      <div className="confirm__buttons">
        <SimpleButton onClick={props.onSubmit}>Ok</SimpleButton>
        <SimpleButton onClick={props.onReset}>Cancel</SimpleButton>
      </div>
    </div>
  );
}

ConfirmDialog.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

ConfirmDialog.defaultProps = {
  title: '',
};

export default ConfirmDialog;
