import React, { Component } from 'react';
import Input from '../Input/Input';
import Textarea from '../Input/Textarea';
import Select from '../Input/Select';
import Button from '../Button/Button';

const rarityLetter = ['normal', 'raro', 'muito raro'];

class Form extends Component {
  render() {
    return (
      <form>
        <Input
          id="name-input"
          title="Nome da Carta"
          testId="name-input"
          type="text"
          name="name"
        />
        <Textarea
          id="description-input"
          title="Descrição"
          testId="description-input"
          name="description"
        />
        <Input
          id="attr1-input"
          title="Attr1"
          testId="attr1-input"
          type="number"
          name="attr1"
        />
        <Input
          id="attr2-input"
          title="Attr2"
          testId="attr2-input"
          type="number"
          name="attr2"
        />
        <Input
          id="attr3-input"
          title="Attr3"
          testId="attr3-input"
          type="number"
          name="attr3"
        />
        <Input
          id="image-input"
          title="Imagem"
          testId="image-input"
          type="text"
          name=""
        />
        <Select
          id="rare-input"
          title="Raridade"
          testId="rare-input"
          name=""
          options={ rarityLetter }
        />
        <Input
          id="trunfo-input"
          title="Super Trunfo"
          testId="trunfo-input"
          type="checkbox"
          name=""
        />
        <Button
          title="Salvar"
          testId="save-button"
          name=""
        />
      </form>
    );
  }
}

export default Form;
