const prompt = require("prompt-sync")();

const corretora = require("./corretora.js");
const cliente = require("./cliente.js");


console.log("Gerenciamento de corretoria de imóveis.");

while(true) {
    console.log(`Escolha o modulo que deseja iniciar:    
    1- Corretoria
    0- Sair`
)
    const opcao = parseInt(prompt(": "));

  switch (opcao) {
    case "1":
        console.log("Gerenciamento de corretora.")
        while (true) {
            console.log(`
            1 - Cadastrar corretora
            2 - Listar corretora
            3 - Atualizar corretora
            4 - Excluir corretora
            5 - Sair`
            )
            const opcaoServico = parseInt(prompt(": "));

        }
      ();
      break;
    case "2":
      ();
      break;
    case "3":
      ();
      break;
    case "4":
      ();
      break;
    case "5":
      process.exit();
      break;
    default:
      console.log("Opção inválida");
      break;
  }
}

menuPrincipal()