import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import enableButton from './utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: '',
        image: '',
        description: '',
        attr1: '0',
        attr2: '0',
        attr3: '0',
        rare: 'normal',
        trunfo: false,
      },
      isSaveButtonDisabled: true,
      saveCards: [],
      hasTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onDeleteCard = this.onDeleteCard.bind(this);
  }

  onInputChange({ target: { name, type, checked, value } }) {
    /* prevState pega o estado anterior para manter
    o que já foi preenchido */
    this.setState((prevState) => ({
      /* dentro do form, é colocado o estado anterior,
      verificado o tipo para considerar o value ou checked */
      form: { ...prevState.form, [name]: type === 'checkbox' ? checked : value },
    }), () => {
      const { form } = this.state;
      const enable = enableButton(form);
      // habilita o botão salvar caso os campos estejam preenchidos;
      this.setState({
        isSaveButtonDisabled: enable,
      });
    });
  }

  onSaveButtonClick() {
    const { form } = this.state;
    this.setState((prevState) => ({
      saveCards: [...prevState.saveCards, form],
    }), () => {
      const { saveCards } = this.state;
      const isTrunfo = saveCards
        .some(({ trunfo }) => trunfo);

      this.setState(({
        form: {
          name: '',
          image: '',
          description: '',
          attr1: '0',
          attr2: '0',
          attr3: '0',
          rare: 'normal',
          trunfo: false,
        },
        hasTrunfo: isTrunfo,
      }));
    });
  }

  onDeleteCard({ target: { name } }) {
    const { saveCards } = this.state;
    const isTrunfo = saveCards.some(({ trunfo }) => {
      if (trunfo) return false;
      return true;
    });
    console.log(isTrunfo);

    this.setState((prevState) => ({
      saveCards: prevState.saveCards.filter((card) => card.name !== name),
      hasTrunfo: isTrunfo,
    }));
  }

  render() {
    const {
      form:
        { name, image, description, attr1, attr2, attr3, rare, trunfo },
      isSaveButtonDisabled, saveCards, hasTrunfo,
    } = this.state;

    const { onInputChange, onSaveButtonClick, onDeleteCard } = this;

    return (
      <section>
        <Form
          cardName={ name }
          cardImage={ image }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ name }
          cardImage={ image }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />

        { saveCards.map((card) => (
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
              onClick={ onDeleteCard }
            >
              Excluir
            </button>
          </div>
        ))}
      </section>
    );
  }
}

export default App;
