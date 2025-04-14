let quadro = 1;
let grao = 1;
let soma = 0;
while (quadro <= 63) {
  soma = soma + grao;
  grao = grao * 2;
  quadro = quadro + 1;
}
alert("O total de grãos no tabuleiro de xadrez é: " + soma);
