import sortCharacters from '../sorted';

test.each([
  [{
    inputMassive: [
      { name: 'Маг', health: 10 },
      { name: 'мМаг', health: 100 },
      { name: 'Маг', health: 80 },
    ],
  },
  {
    outputMassive: [
      { name: 'Маг', health: 100 },
      { name: 'Маг', health: 80 },
      { name: 'Маг', health: 10 },
    ],
  }],
])('testing sortCharacters func ', ({ inputMassive, outputMassive }) => {
  const result = sortCharacters(inputMassive);
  expect(result).toEqual(outputMassive);
});
