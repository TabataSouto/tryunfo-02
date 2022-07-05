import PropTypes from 'prop-types';
import React, { Component } from 'react';

class FilteredSuperTrunfo extends Component {
  render() {
    const { checked, onChange } = this.props;
    return (
      <label htmlFor="trunfo-filter">
        Super Trunfo
        <input
          id="trunfo-filter"
          data-testid="trunfo-filter"
          type="checkbox"
          name="findTrunfo"
          checked={ checked }
          onChange={ onChange }
        />
      </label>
    );
  }
}

FilteredSuperTrunfo.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilteredSuperTrunfo;
