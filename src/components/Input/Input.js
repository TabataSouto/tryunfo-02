import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { id, title, testId, type, name } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          { title }
          <input
            id={ id }
            data-testid={ testId }
            type={ type }
            name={ name }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
