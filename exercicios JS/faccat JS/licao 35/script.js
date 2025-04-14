alert("Preço da Gasolina e Álcool");
let litrosVendidos = parseFloat(prompt("Digite a quantidade de litros que você vai abastecer:"));
let tipoCombustivel = prompt("Digite o tipo de combustível: 'A' para Álcool ou 'G' para Gasolina:").toUpperCase();
let precoAlcool = 2.90;
let precoGasolina = 3.30;
let valorFinal;

if (tipoCombustivel === 'A') {
    if (litrosVendidos <= 20) {
        valorFinal = litrosVendidos * precoAlcool * 0.97; // Desconto de 3%
    } else {
        valorFinal = litrosVendidos * precoAlcool * 0.95; // Desconto de 5%
    }
} else if (tipoCombustivel === 'G') {
    if (litrosVendidos <= 20) {
        valorFinal = litrosVendidos * precoGasolina * 0.96; // Desconto de 4%
    } else {
        valorFinal = litrosVendidos * precoGasolina * 0.94; // Desconto de 6%
    }
} else {
    alert("Tipo de combustível inválido! Use 'A' para Álcool ou 'G' para Gasolina.");
}

alert("Valor a ser pago: R$ " + valorFinal.toFixed(2));

