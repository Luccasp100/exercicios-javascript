let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let palpite = 0;

while (palpite !== numeroSecreto) {
    palpite = parseInt(prompt("Tente adivinhar o número secreto entre 1 e 10:"));

    if (palpite < numeroSecreto) {
        alert("O número secreto é maior. Tente novamente.");
    } else if (palpite > numeroSecreto) {
        alert("O número secreto é menor. Tente novamente.");
    }
}
alert("Parabéns! Você acertou o número secreto: " + numeroSecreto);
