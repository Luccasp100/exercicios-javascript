let nome, resposta;
let largura, comprimento, area, area_total;
area_total = 0;

do {
  nome = prompt("Digite o nome do cômodo:");
  largura = parseFloat(prompt("Digite a largura do cômodo (em metros):"));
  comprimento = parseFloat(prompt("Digite o comprimento do cômodo (em metros):"));

  area = largura * comprimento;

  alert("A área do cômodo " + nome + " é " + area.toFixed(2) + " metros quadrados.");

  area_total += area;

  resposta = prompt("Deseja calcular a área de outro cômodo? (sim/nao):");
} while (resposta.toLowerCase() !== "nao");

alert("A área total da residência é " + area_total.toFixed(2) + " metros quadrados.");
