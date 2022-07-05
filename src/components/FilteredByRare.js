import React, { Component } from 'react';
import PropTypes from 'prop-types';

const rarityLetter = ['todas', 'normal', 'raro', 'muito raro'];

class FilteredByRare extends Component {
  render() {
    const { findRare, onChange } = this.props;
    return (
      <label htmlFor="rare">
        <select
          id="rare"
          data-testid="rare-filter"
          name="findRare"
          value={ findRare }
          onChange={ onChange }
        >
          { rarityLetter.map((item, index) => (
            <option
              key={ index }
            >
              { item }
            </option>
          )) }
        </select>
      </label>
    );
  }
}

FilteredByRare.propTypes = {
  findRare: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilteredByRare;
