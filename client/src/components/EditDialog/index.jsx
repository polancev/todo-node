import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/index';

class EditDialog extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.value = this.props.initialValue;
    this.textInput.current.focus();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.textInput.current.value);
  }

  handleReset = (event) => {
    event.preventDefault();
    this.props.onReset();
  }

  render() {
    const { title } = this.props;
    return (
      <form
        className="edit-dialog"
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
      >
        <h3>{title}</h3>
        <input
          type="text"
          ref={this.textInput}
        />
        <div className="edit-dialog__buttons">
          <Button type="submit">Save</Button>
          <Button type="reset">Cancel</Button>
        </div>
      </form>
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

