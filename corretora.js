const prompt = require("prompt-sync")();

const corretoras = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome == "";

const indiceInvalido = (indice) =>
  indice < 0 || indice >= corretoras.length || isNaN(indice);

const listagemCorretora = () =>
  corretoras.forEach((corretora, i) => {
    console.log(`${i + 1} - ${corretora.nome}`);
  });

const modeloCorretora = () => {
  let corretora = {};

  while (true) {
    corretora.nome = prompt("Qual é o nome da corretora? ");
    if (nomeInvalido(corretora)) {
      console.log("O nome não pode ser vazio");
    } else {
      break;
    }
  }
  return corretora;
};

const criarCorretora = () => {
  const corretora = modeloCorretora();

  corretoras.push(corretora);

  console.log("Corretora adicionada com sucesso.");
};

const atualizarCorretora = () => {
  while (true) {
    if (corretoras.length == 0) {
      console.log("Lista de corretoras esta vazia.");
      break;
    }

    listagemCorretora();

    const indice =
      lerIndice("Qual o ID de corretora que deseja atualizar? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Indice inválido");
    } else {
      const corretora = modeloCorretora();
      corretoras[indice] = corretora;
      break;
    }
  }
};

const removerCorretora = () => {
  while (true) {
    listagemCorretora();

    const indice =
      lerIndice("Qual é o ID de corretora que deseja remover? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Indice inválido");
    } else {
      corretoras.forEach((corretora) => {
        if (corretora.sequencia == indice) {
          corretora.sequencia = -1;
        }
      });
      corretoras.splice(indice, 1);
      console.log("Corretora removida com sucesso");
      break;
    }
  }
};

module.exports = {
  modeloCorretora,
  criarCorretora,
  listagemCorretora,
  atualizarCorretora,
  removerCorretora,
};
