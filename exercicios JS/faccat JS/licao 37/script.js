alert("Maçã e Morango");
let morango = parseFloat(prompt("Digite a quantidade de morangos (em Kg): "));
let maca = parseFloat(prompt("Digite a quantidade de maçãs (em Kg): "));
let precoMorango;
let precoMaca;
let totalMorango = morango * precoMorango;
let totalMaca = maca * precoMaca;
let total = totalMorango + totalMaca;
let pesoTotal = morango + maca;

if (morango <= 5) {
    precoMorango = 2.50;
} else {
    precoMorango = 2.20;
}

if (maca <= 5) {
    precoMaca = 1.80;
} else {
    precoMaca = 1.50;
}
if (pesoTotal > 8 || total > 25) {
    total = total * 0.90;
    alert("Você ganhou 10% de desconto na sua compra!");
}
alert("O valor total a ser pago é: R$ " + total.toFixed(2));
