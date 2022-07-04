import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Testarea extends Component {
  render() {
    const { id, title, testId, name, value, onChange } = this.props;
    return (
      <div>
        <label htmlFor={ id }>
          { title }
          <textarea
            id={ id }
            data-testid={ testId }
            name={ name }
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Testarea.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Testarea;
