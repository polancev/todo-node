import React from 'react';
import PropTypes from 'prop-types';
import SimpleButton from '../SimpleButton/index';

class EditDialog extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.value = this.props.initialValue;
    this.textInput.current.focus();
  }

  render() {
    const { title, onSubmit, onReset } = this.props;
    return (
      <div className="edit-dialog">
        <h3>{title}</h3>
        <input
          type="text"
          ref={this.textInput}
        />
        <div className="edit-dialog__buttons">
          <SimpleButton onClick={onSubmit}>Save</SimpleButton>
          <SimpleButton onClick={onReset}>Cancel</SimpleButton>
        </div>
      </div>
    );
  }
}

EditDialog.propTypes = {
  title: PropTypes.string,
  initialValue: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

EditDialog.defaultProps = {
  title: '',
  initialValue: '',
};

export default EditDialog;

