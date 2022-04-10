//Ativando botões do HTML
document.getElementById("btnSortear").disabled = false;
document.getElementById("btnParar").disabled = true;

//Baralhos da máquina e do jogador
var baralho1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var baralho2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Espaços para Mesa(Cartas na mesa, na mesa do jogador e na mesa da máquina).
var cartasNaMesa = [];
var mesaDoJogador = [];
var mesaDaMaquina = [];

//Espaços para cálculo das cartas tanto do jogador quanto da máquina.
var cartaSomaJogador = [];
var cartaSomaMaquina = [];

//Armazenamento de dados de cartas do jogador e máquina.
var cartaJogador;
var cartaMaquina;

//Armazenamento de dados dos valores das cartas do jogador e máquina.
var valorCartaDoJogador;
var valorCartaDaMaquina;

//Função executada quando o botão "Pedir carta" é clicado, a função sorteia cartas para jogador e máquina, retira essas cartas dos baralhos e imprime o resultado na tela.
function sortearCarta(valorCartaDoJogador, valorCartaDaMaquina) {
  var multiplicador1 = baralho1.length;
  var multiplicador2 = baralho2.length;

  var acabarCartas = "";

  var numeroCartaJogador = parseInt(Math.random() * multiplicador1);
  var numeroCartaMaquina = parseInt(Math.random() * multiplicador2);

  cartaJogador = baralho1[numeroCartaJogador];
  cartaMaquina = baralho2[numeroCartaMaquina];
  valorCartaDoJogador = baralho1[numeroCartaJogador];
  valorCartaDaMaquina = baralho2[numeroCartaMaquina];

  for (var i = 0; i < cartasNaMesa.length; i++) {}
  if (i == 0) {
    document.getElementById("btnParar").disabled = true;
  } else {
    document.getElementById("btnParar").disabled = false;
  }

  cartasNaMesa.push(+1);
  baralho1.splice(numeroCartaJogador, 1); //Remover carta do baralho
  baralho2.splice(numeroCartaMaquina, 1); //Remover carta do baralho

  if (cartasNaMesa.length < 6) {
    adicionarCartasMesa();
    cartaSomaJogador.push(valorCartaDoJogador);
    cartaSomaMaquina.push(valorCartaDaMaquina);
    somarCartas(cartaSomaJogador, cartaSomaMaquina);
  } else {
    acabarCartas = "<h2>" + "Acabaram suas cartas ! " + "</h2>";
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnParar").disabled = true;

    somarCartas(cartaSomaJogador, cartaSomaMaquina, acabarCartas);
  }
}

function parar() {
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnParar").disabled = true;

  var somaJogador = 0;
  var somaMaquina = 0;

  var elemento = "";
  var elementoMaquina = "";
  var elementoJogador = "";

  for (var i = 0; i < cartaSomaJogador.length; i++) {
    somaJogador += cartaSomaJogador[i];
  }
  for (var i = 0; i < cartaSomaMaquina.length; i++) {
    somaMaquina += cartaSomaMaquina[i];
  }
  for (var i = 0; i < cartaSomaMaquina.length; i++) {
    elementoMaquina += cartaSomaMaquina[i] + " + ";
  }
  for (var i = 0; i < cartaSomaMaquina.length; i++) {
    elementoJogador += cartaSomaJogador[i] + " + ";
  }

  var elementoMaquinaReduzido = elementoMaquina.substring(
    0,
    elementoMaquina.length - 2
  );
  var elementoJogadorReduzido = elementoMaquina.substring(
    0,
    elementoMaquina.length - 2
  );

  if (somaJogador < somaMaquina && somaJogador < 21 && somaMaquina < 21) {
    elemento =
      "<h2>" +
      elementoJogadorReduzido +
      " = " +
      somaJogador +
      " /21 Você perdeu ! " +
      elementoMaquinaReduzido +
      " = " +
      somaMaquina +
      " /21</h2>";
  } else if (somaJogador < 21 && somaMaquina > 21) {
    elemento =
      "<h2>" +
      elementoJogadorReduzido +
      " = " +
      somaJogador +
      " /21 Você ganhou ! " +
      elementoMaquinaReduzido +
      " = " +
      somaMaquina +
      " /21</h2>";
  } else if (
    somaJogador > somaMaquina &&
    somaJogador < 21 &&
    somaMaquina < 21
  ) {
    elemento =
      "<h2>" +
      elementoJogadorReduzido +
      " = " +
      somaJogador +
      " /21 Você ganhou ! " +
      elementoMaquinaReduzido +
      " = " +
      somaMaquina +
      " /21</h2>";
  } else if (somaJogador == somaMaquina) {
    elemento =
      "<h2>" +
      elementoJogadorReduzido +
      " = " +
      somaJogador +
      " /21 Empate ! " +
      elementoMaquinaReduzido +
      " = " +
      somaMaquina +
      " /21</h2>";
  }

  var exibirResultadoJogador = document.getElementById("resultadoCartas");
  exibirResultadoJogador.innerHTML = elemento;
}

function somarCartas(cartaSomaJogador, cartaSomaMaquina, acabarCartas) {
  var somaJogador = 0;
  var somaMaquina = 0;
  var somaMaquinaOculta = 0;

  var elemento = "";
  var elementoMaquina = "";
  var elementoMaquinaOculta = "";
  var elementoJogador = "";

  for (var i = 0; i < cartaSomaJogador.length; i++) {
    somaJogador += cartaSomaJogador[i];
  }
  for (var i = 0; i < cartaSomaMaquina.length; i++) {
    somaMaquina += cartaSomaMaquina[i];
  }
  for (var i = 1; i < cartaSomaMaquina.length; i++) {
    somaMaquinaOculta += cartaSomaMaquina[i];
  }
  for (var i = 0; i < cartaSomaMaquina.length; i++) {
    elementoMaquina += cartaSomaMaquina[i] + " + ";
  }
  for (var i = 1; i < cartaSomaMaquina.length; i++) {
    elementoMaquinaOculta += cartaSomaMaquina[i] + " + ";
  }
  for (var i = 0; i < cartaSomaJogador.length; i++) {
    elementoJogador += cartaSomaJogador[i] + " + ";
  }

  var elementoMaquinaReduzido = elementoMaquina.substring(
    0,
    elementoMaquina.length - 2
  );

  var elementoMaquinaOcultaReduzido = elementoMaquinaOculta.substring(
    0,
    elementoMaquinaOculta.length - 2
  );

  var elementoJogadorReduzido = elementoJogador.substring(
    0,
    elementoJogador.length - 2
  );

  if (somaJogador > 21 && somaMaquina < 21) {
    elemento =
      "<h2>" +
      elementoJogadorReduzido +
      " = " +
      somaJogador +
      "/21 Você perdeu ! " +
      elementoMaquinaReduzido +
      " = " +
      somaMaquina +
      " /21</h2>";
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnParar").disabled = true;
  } else if (somaMaquina == 21) {
    elemento =
      "<h2>" +
      elementoJogadorReduzido +
      " = " +
      somaJogador +
      "/21 Você perdeu ! " +
      elementoMaquinaReduzido +
      " = " +
      somaMaquina +
      " /21</h2>";
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnParar").disabled = true;
  } else if (somaJogador == 21) {
    elemento =
      "<h2>" +
      elementoJogadorReduzido +
      " = " +
      somaJogador +
      " /21 Você ganhou ! " +
      elementoMaquinaReduzido +
      " = " +
      somaMaquina +
      " /21</h2>";
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnParar").disabled = true;
  } else if (somaJogador == 21 && somaMaquina == 21) {
    elemento =
      "<h2>" +
      elementoJogadorReduzido +
      " = " +
      somaJogador +
      " /21 Empate ! " +
      elementoMaquinaReduzido +
      " = " +
      somaMaquina +
      " /21</h2>";
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnParar").disabled = true;
  } else if (somaJogador > 21 && somaMaquina > 21) {
    elemento =
      "<h2>" +
      elementoJogadorReduzido +
      " = " +
      somaJogador +
      " /21 Empate ! " +
      elementoMaquinaReduzido +
      " = " +
      somaMaquina +
      " /21</h2>";
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnParar").disabled = true;
  } else {
    elemento =
      "<h2>" +
      elementoJogadorReduzido +
      " = " +
      somaJogador +
      " /21" +
      " | " +
      " ? + " +
      elementoMaquinaOcultaReduzido +
      " = " +
      somaMaquinaOculta +
      " /21" +
      "</h2>";
  }

  if (acabarCartas == undefined) {
    var exibirResultadoJogador = document.getElementById("resultadoCartas");
    exibirResultadoJogador.innerHTML = elemento;
  } else {
    var exibirResultadoJogador = document.getElementById("resultadoCartas");
    exibirResultadoJogador.innerHTML = acabarCartas + elemento;
  }
}

function adicionarCartasMesa() {
  mesaDoJogador.push(cartaJogador);
  mesaDaMaquina.push(cartaMaquina);
  var elementoJogador = "";
  var elementoMaquina = "";

  for (var j = 1; j < mesaDaMaquina.length; j++) {
    elementoMaquina =
      "<div  class='maquina'><h2>" + mesaDaMaquina[j] + "</h2></div>";
  }

  for (var i = 0; i < mesaDoJogador.length; i++) {
    elementoJogador =
      "<div class='jogador'><h2>" + mesaDoJogador[i] + "</h2></div>";
  }

  var exibirCartas = document.getElementById("mesa");
  exibirCartas.innerHTML = elementoJogador + elementoMaquina;
}

function mostrarRegras() {
  var mostrarRegras = document.getElementById("mostrarRegras");
  var regras = document.getElementById("regras");

  if (mostrarRegras.value == undefined && regras == null) {
    mostrarRegras.innerHTML =
      "<p id='regras'>" +
      "1 - Para começar o jogo clique no botão 'pedir carta', assim que você clicar nesse botão você e máquina receberão uma carta com um valor de 0 a 10, que não será repitido nas próximas jogadas." +
      "<br><br>" +
      "2 - A primeira carta da máquina não será exibida, apenas a partir da segunda carta da máquina será exibida na cor vermelha." +
      "<br><br>" +
      "3 - A partir disto as cartas da máquina e a suas cartas serão somadas, a soma destas cartas não podem passar de 21, o que resultará em derrota automática." +
      "<br><br>" +
      "4 - A soma que chegar a 21 primeiro ganhará automáticamente." +
      "<br><br>" +
      "5 - Você pode clicar no botão 'parar' para não receber mais cartas, a partir disto o valor da soma da máquina será exibido e será comparado com a soma do jogador, a soma que for mais próxima do valor 21 será vencedora do jogo." +
      "</p>";
  } else {
    mostrarRegras.innerHTML = "";
  }
}