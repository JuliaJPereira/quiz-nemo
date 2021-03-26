var opcoesPersonagens = [
  {
    nome: "Nemo",
    imagem: "imagens/nemo.jpg",
    opcoes: ["Remo", "Breno", "Nemo", "Neno"],
  },
  {
    nome: "Dory",
    imagem: "imagens/dory.jpg",
    opcoes: ["Dorotéia", "Darla", "Moly", "Dory"],
  },
  {
    nome: "Gill",
    imagem: "imagens/gill.png",
    opcoes: ["Gill", "Grill", "Brill", "Crill"],
  },
  {
    nome: "Marlin",
    imagem: "imagens/marlin.png",
    opcoes: ["Marvin", "Marlin", "Carlin", "Martin"],
  },
  {
    nome: "Bruce",
    imagem: "imagens/bruce.png",
    opcoes: ["Leny", "Frankie", "Bruce", "Chum"],
  },
  {
    nome: "Crush",
    imagem: "imagens/crush.png",
    opcoes: ["Rush", "Crash", "Esguicho", "Crush"],
  },
];

var indice = 0;

var acertos = 0;

function criaBotao(nome) {
  const div = document.getElementById("div-opcoes");
  div.innerHTML += `
    <button class="botao-opcao" onclick="clicou('${nome}')">
        ${nome}
    </button>`;
}

function criaQuestao() {
  const personagem = opcoesPersonagens[indice];
  const imagem = document.getElementById("img-imagem-personagem");
  imagem.setAttribute("src", personagem.imagem);

  const divOpcoes = document.getElementById("div-opcoes");
  divOpcoes.innerHTML = "";

  personagem.opcoes.forEach((opcao) => {
    criaBotao(opcao);
  });
}

function clicou(opcao) {
  const personagem = opcoesPersonagens[indice];
  const acertou = personagem.nome === opcao;
  if (acertou) {
    Swal.fire("Parabéns!", "Você acertou!", "success");
    indice++;
    acertos++;
    criaQuestao();
  } else {
    Swal.fire("Que pena!", "Você errou!", "error");
  }
}

criaQuestao();
