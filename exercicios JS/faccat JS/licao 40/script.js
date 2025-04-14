alert("Ler Produtos");
let nomeProduto = prompt("Digite a descrição do produto:");
let quantidade = parseInt(prompt("Digite a quantidade adquirida:"));
let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"));

let total = quantidade * precoUnitario;

let desconto = 0;
if (quantidade <= 5) {
    desconto = total * 0.02;
} else if (quantidade > 5 && quantidade <= 10) {
    desconto = total * 0.03;
} else if (quantidade > 10) {
    desconto = total * 0.05;
}

let totalPagar = total - desconto;

alert("Produto: " + nomeProduto +
      "Quantidade: " + quantidade +
      "Preço unitário: R$ " + precoUnitario.toFixed(2) +
      "Total: R$ " + total.toFixed(2) +
      "Desconto: R$ " + desconto.toFixed(2) +
      "Total a pagar: R$ " + totalPagar.toFixed(2));
