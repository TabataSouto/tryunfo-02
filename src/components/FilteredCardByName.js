import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilteredCardByName extends Component {
  render() {
    const { findCard, onChange } = this.props;
    return (
      <label htmlFor="filtered">
        Filtros do busca
        <input
          type="text"
          id="filtered"
          value={ findCard }
          name="findCard"
          onChange={ onChange }
          data-testid="name-filter"
        />
      </label>
    );
  }
}

FilteredCardByName.propTypes = {
  findCard: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilteredCardByName;
