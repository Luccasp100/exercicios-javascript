alert("partida de xadrez");
let horaInicio = parseInt(prompt("Digite a hora que começou a partida: "));
let horaFinal = parseInt(prompt("Digite a hora que vai acabar a partida: "));
let duracao;
if (horaFinal >= horaInicio) {
    duracao = horaFinal - horaInicio;
} else {
    duracao = (24 - horaInicio) + horaFinal;
}
alert("O tempo de jogo será "+ duracao);
