import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { id, title, testId, name, options } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          { title }
          <select
            id={ id }
            data-testid={ testId }
            name={ name }
          >
            { options.map((item, index) => (
              <option
                key={ index }
              >
                { item }
              </option>
            )) }
          </select>
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  testId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Input;
