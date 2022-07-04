import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { title, testId, name, disabled, onClick } = this.props;
    return (
      <div>
        <button
          id="button"
          type="button"
          data-testid={ testId }
          name={ name }
          disabled={ disabled }
          onClick={ onClick }
        >
          { title }
        </button>
      </div>
    );
  }
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Input;
