import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import utils from './utils';

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
      findCard: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onDeleteCard = this.onDeleteCard.bind(this);
    this.onFindCard = this.onFindCard.bind(this);
  }

  onFindCard({ target: { value } }) {
    this.setState({ findCard: value });
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
      // habilita o botão salvar caso os campos estejam preenchidos;
      this.setState({
        isSaveButtonDisabled: utils.enableButton(form),
      });
    });
  }

  onSaveButtonClick() {
    const { form } = this.state;
    this.setState((prevState) => ({
      saveCards: [...prevState.saveCards, form],
    }), () => {
      const { saveCards } = this.state;
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
        hasTrunfo: utils.isTrunfo(saveCards),
      }));
    });
  }

  onDeleteCard({ target: { name } }) {
    const { saveCards } = this.state;
    this.setState((prevState) => ({
      saveCards: prevState.saveCards.filter((card) => card.name !== name),
      hasTrunfo: utils.superTrunfoDelete(saveCards),
    }));
  }

  render() {
    const {
      form:
        { name, image, description, attr1, attr2, attr3, rare, trunfo },
      isSaveButtonDisabled, saveCards, hasTrunfo, findCard,
    } = this.state;

    const { onInputChange, onSaveButtonClick, onDeleteCard, onFindCard } = this;

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

        <div>
          <p>Todas as cartas</p>
          <label htmlFor="filtered">
            Filtros do busca
            <input
              type="text"
              id="filtered"
              value={ findCard }
              name="findCard"
              onChange={ onFindCard }
              data-testid="name-filter"
            />
          </label>
          { saveCards
            .filter((card) => card.name.includes(findCard)).map((card) => (
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
        </div>
      </section>
    );
  }
}

export default App;
