import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Card from './Card';
import FilteredByRare from './FilteredByRare';
import FilteredCardByName from './FilteredCardByName';

class CardList extends Component {
  render() {
    const { findCard, onFindCard,
      findRare, onFindCardRare,
      saveCards, onClick } = this.props;

    return (
      <section>
        <p>Todas as cartas</p>
        <div>
          <FilteredCardByName
            findCard={ findCard }
            onChange={ onFindCard }
          />
          <FilteredByRare
            findRare={ findRare }
            onChange={ onFindCardRare }
          />
          { saveCards
            .filter((card) => card.name.includes(findCard))
            .filter((cardRare) => {
              if (findRare === 'todas') return saveCards;
              return cardRare.rare === findRare;
            })
            .map((card) => (
              <div key={ card.name }>
                <Card
                  cardName={ card.name }
                  cardImage={ card.image }
                  cardDescription={ card.description }
                  cardAttr1={ card.attr1 }
                  cardAttr2={ card.attr2 }
                  cardAttr3={ card.attr3 }
                  cardRare={ card.rare }
                  cardTrunfo={ card.trunfo }
                />
                <button
                  name={ card.name }
                  type="button"
                  data-testid="delete-button"
                  onClick={ onClick }
                >
                  Excluir
                </button>
              </div>
            ))}
        </div>
      </section>
    );
  }
}

CardList.propTypes = {
  findCard: PropTypes.string.isRequired,
  onFindCardRare: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  onFindCard: PropTypes.func.isRequired,
  saveCards: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  findRare: PropTypes.string.isRequired,
};

export default CardList;
