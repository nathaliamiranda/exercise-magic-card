const { getMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');
// I - Implemente um teste que verifique que após a execução da função getMagicCard, favoriteCards passa a possuir length === 5.

// II - Implemente um teste que verifique que na última posição do array favoriteCards existe um card com o a propriedade name e valor "Beacon of Immortality".

// Para os próximos exercícios descomente o teste dentro do escopo do segundo it.

// III - Após descomentar o teste dentro do segundo it, rode os testes.

// Você vai perceber que o teste falhou. Consegue entender porque ele falha? Isso mesmo, a função getMagicCard modificou o arquivo favoriteCards no escopo do it anterior. Desta maneira, para o Jest, o array favoriteCards não possui quatro cards, mas sim, seis.

// IV - Utilizando a função afterEach crie uma lógica capaz de restaurar o array favoriteCards que faça com que o teste passe.

const retrievesFavoriteCards = () => {
  // implemente sua função aqui
}

describe(' Testa a função getMagicCard', () => { 

  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(3);
    await getMagicCard('130553');
      expect(favoriteCards).toHaveLength(5);
      expect(favoriteCards[4].name).toEqual('Beacon of Immortality');
      await getMagicCard('130554');
      expect(favoriteCards).toHaveLength(6);
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(1);

    expect(favoriteCards).toHaveLength(6);
    // implemente seus testes aqui

  });
});
