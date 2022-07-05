import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilteredCardByName extends Component {
  render() {
    const { findCard, onChange, disabled } = this.props;
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
          disabled={ disabled }
        />
      </label>
    );
  }
}

FilteredCardByName.propTypes = {
  findCard: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default FilteredCardByName;
