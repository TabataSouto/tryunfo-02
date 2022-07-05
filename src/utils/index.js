const enableButton = (state) => {
  const { name, image, description, attr1, attr2, attr3, rare } = state;

  const strings = [name, description, image, rare];
  const numbers = [+attr1, +attr2, +attr3];

  // valida se todos os campos de string tem o tamanho maior que 0;
  const stringsValidation = strings
    .every(({ length }) => length > 0);

  const MAGIC_NUMBER_MAX = 90;
  const MAGIC_NUMBER_SUM = 210;

  // valida se os numeros informados são maiores que 0 e no máxim 90;
  const numbersValidation = numbers
    .every((number) => number <= MAGIC_NUMBER_MAX && number >= 0);

  // valida se a soma dos 3 números não ultrapassam 210;
  const sumNumbers = numbers
    .reduce((acc, number) => acc + number, 0) <= MAGIC_NUMBER_SUM;

  // se todas as validações forem true, retorna false
  if (stringsValidation && numbersValidation && sumNumbers) {
    return false;
  }

  return true;
};

const isTrunfo = (saveCards) => saveCards.some(({ trunfo }) => trunfo);

const superTrunfoDelete = (saveCards) => {
  const trunfoExisted = saveCards
    .some(({ trunfo }) => {
      if (trunfo) return false;
      return true;
    });
  return trunfoExisted;
};

export default {
  enableButton,
  isTrunfo,
  superTrunfoDelete,
};
