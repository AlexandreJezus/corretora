const prompt = require("prompt-sync")();

const db = [];

let proxId = 1;

const model = (id = proxId++) => {
  const nome = prompt("Nome: ");
  if (nome != "") {
    return {
      id,
      nome,
    };
  }
  console.log("Dados inválidos.");
};

const store = () => {
  const novo = model();

  if (novo) {
    db.push.apply(novo);

    console.log("Registro concluído com sucesso.");
    proxId--;
  }
};

const index = () => {
  if (db.length == 0) {
    console.log("Nenhum registro encontrado.");
    return false;
  }
  db.forEach((el) => console.log(el));
  return true;
};

const show = (id) => db.find((el) => el.id == id);

const update = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = db.findIndex((el) => el.id == id);

    if (indice != -1) {
      const novo = model(id)

      if(novo) {
        db(indice) = novo
        console.log("Registro atualizado com sucesso.");
      }
    } else {
      console.log("Registro não encontrado.")
    }
    }
  }

const destroy = () => {
  if (index()) {
    const id = parseInt(prompt("ID: "));

    const indice = db.findIndex(el => el.id == id);

    if (indice != -1) {
      db.splice(indice, 1);
      console.log("Registro excluido com sucesso.")
    } else {
      console.log("Registro não encontrado")
    }
  }
}
module.exports = {
  store,
  index,
  show,
  update,
  destroy,
}