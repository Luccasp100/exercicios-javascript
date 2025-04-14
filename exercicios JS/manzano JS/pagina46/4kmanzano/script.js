let largura, comprimento, area, total_area = 0;
let nome_comodo, continuar;
nome_comodo = prompt("Digite o nome do cômodo: ");

while (true) {
    largura = parseFloat(prompt("Digite a largura do " + nome_comodo + ": "));
    comprimento = parseFloat(prompt("Digite o comprimento do " + nome_comodo + ": "));

    area = largura * comprimento;
    alert("A área do cômodo " + nome_comodo + " é: " + area.toFixed(2) + " m²");

    total_area += area;

    continuar = prompt("Deseja calcular a área de outro cômodo? (Digite 'NAO' para finalizar): ").toUpperCase();

    if (continuar === "NAO") {
        break;
    } else {
        nome_comodo = prompt("Digite o nome do próximo cômodo: ");
    }
}
alert("A área total da residência é: " + total_area.toFixed(2) + " m²");
