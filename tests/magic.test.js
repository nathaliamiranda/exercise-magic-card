// I - Abra o arquivo tests/magic.test.js. Nele você encontrará a estrutura inicial dos testes ja montada. Essa estrutura no entanto está incompleta e precisa de ajustes para que a sintaxe do async/await seja aplicada de forma correta. Implemente o que falta para que a sintaxe do async/await esteja completa.

// II - Implemente um teste que verifique se o retorno da função getMagicCardSimulator é igual ao objeto expected. spoiler-alert: você pode desestruturar o objeto response e obter diretamente suas propriedades.

// III - Implemente um teste que verifique se a propriedade types é do tipo Array.

// IV - Implemente um teste que verifique se a propriedade subtypes possui length === 2.

// V - Implemente um teste que verifique se a propriedade rarity possui valor Uncommon.

// VI - Implemente um teste que verifique se a propriedade name possui valor Ancestor's Chosen.

// VII - Implemente um teste que verifique se a propriedade manaCost possui valor {5}{W}{W}.
const magic = require('../src/magic.js');
const { trybeSimulator } = require('../simulator/simulator.js');
const { getMagicCard } = magic;
const expected = {
  name: "Ancestor's Chosen",
  manaCost: '{5}{W}{W}',
  types: [ 'Creature' ],
  subtypes: [ 'Human', 'Cleric' ],
  rarity: 'Uncommon'
};

describe(' Testa a função getMagicCard', () => {
  it('Deve retornar um objeto com as propriedades esperadas', async () => {
    const getMagicCardSimulator = trybeSimulator(magic, 'getMagicCard');
    await getMagicCardSimulator('130550');
    const response = await getMagicCard('130550');  
    expect.assertions(6)
    expect(response).toEqual(expected);
    expect(response.types).toBeInstanceOf(Array);
    expect(response.subtypes).toHaveLength(2);
    expect(response.rarity).toBe('Uncommon');
    expect(response.name).toBe("Ancestor's Chosen");
    expect(response.manaCost).toBe('{5}{W}{W}');
  });
  
});
