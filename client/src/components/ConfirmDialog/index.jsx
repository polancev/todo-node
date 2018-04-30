import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './index.css';

function ConfirmDialog(props) {
  return (
    <div className="confirm">
      <div className="confirm__title">{props.title}</div>
      <div className="confirm__buttons">
        <div className="confirm__submit">
          <Button onClick={props.onSubmit}>OK</Button>
        </div>
        <div className="confirm__reset">
          <Button onClick={props.onReset}>Cancel</Button>
        </div>
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
