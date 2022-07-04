import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Button from './Button';

const rarityLetter = ['normal', 'raro', 'muito raro'];

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick, hasTrunfo } = this.props;

    return (
      <form>
        <Input
          id="name-input"
          title="Nome da carta"
          testId="name-input"
          type="text"
          name="name"
          value={ cardName }
          onChange={ onInputChange }
        />
        <Textarea
          id="description-input"
          title="Descrição"
          testId="description-input"
          name="description"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <Input
          id="attr1-input"
          title="Attr1"
          testId="attr1-input"
          type="number"
          name="attr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          id="attr2-input"
          title="Attr2"
          testId="attr2-input"
          type="number"
          name="attr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          id="attr3-input"
          title="Attr3"
          testId="attr3-input"
          type="number"
          name="attr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          id="image-input"
          title="Imagem"
          testId="image-input"
          type="text"
          name="image"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <Select
          id="rare-input"
          title="Raridade"
          testId="rare-input"
          name="rare"
          options={ rarityLetter }
          value={ cardRare }
          onChange={ onInputChange }
        />
        {
          hasTrunfo
            ? <p>Você já tem um Super Trunfo em seu baralho</p>
            : (
              <label htmlFor="trunfo-input">
                Super Trunfo
                <input
                  id="trunfo-input"
                  data-testid="trunfo-input"
                  type="checkbox"
                  name="trunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>
            )
        }
        <Button
          title="Salvar"
          testId="save-button"
          name=""
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
