import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import utils from './utils';
import CardList from './components/CardList';

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
      findRare: 'todas',
      isButtonDisabled: false,
      filterTrunfo: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onDeleteCard = this.onDeleteCard.bind(this);
    this.onFindCard = this.onFindCard.bind(this);
    this.onFindCardRare = this.onFindCardRare.bind(this);
    this.onFilterTrunfo = this.onFilterTrunfo.bind(this);
  }

  onFindCardRare({ target: { value } }) {
    this.setState({ findRare: value });
  }

  onFindCard({ target: { value } }) {
    this.setState({ findCard: value });
  }

  onFilterTrunfo({ target: { checked } }) {
    this.setState({
      filterTrunfo: checked,
    }, () => {
      const { filterTrunfo } = this.state;
      this.setState({
        isButtonDisabled: filterTrunfo === true,
      });
      // if (filterTrunfo === true) {
      //   return this.setState({
      //     isButtonDisabled: true,
      //   });
      // }
      // return this.setState({
      //   isButtonDisabled: false,
      // });
    });
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
    this.setState((prevState) => ({
      saveCards: prevState.saveCards.filter((card) => card.name !== name),
    }), () => {
      const { saveCards } = this.state;
      this.setState({
        hasTrunfo: utils.superTrunfoDelete(saveCards),
      });
    });
  }

  render() {
    const {
      form:
        { name, image, description, attr1, attr2, attr3, rare, trunfo },
      isSaveButtonDisabled, saveCards, hasTrunfo, findCard, findRare,
      isButtonDisabled, filterTrunfo,
    } = this.state;

    const { onInputChange, onSaveButtonClick, onDeleteCard,
      onFindCard, onFindCardRare, onFilterTrunfo } = this;

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

        <CardList
          findCard={ findCard }
          onFindCard={ onFindCard }
          findRare={ findRare }
          onFindCardRare={ onFindCardRare }
          saveCards={ saveCards }
          onClick={ onDeleteCard }
          isButtonDisabled={ isButtonDisabled }
          filterTrunfo={ filterTrunfo }
          onFilterTrunfo={ onFilterTrunfo }
        />
      </section>
    );
  }
}

export default App;
