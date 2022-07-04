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
        attr1: '',
        attr2: '',
        attr3: '',
        rare: 'normal',
        trunfo: false,
      },
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
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
      this.setState({
        isSaveButtonDisabled: enable,
      });
    });
  }

  render() {
    const {
      form:
        { name, image, description, attr1, attr2, attr3, rare, trunfo },
      isSaveButtonDisabled,
    } = this.state;

    const { onInputChange } = this;

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
          // onSaveButtonClick
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
      </section>
    );
  }
}

export default App;
