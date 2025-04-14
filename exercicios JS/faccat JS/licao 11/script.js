alert("Calcular a taxa de vendas de carros usados");
let salarioFixo = parseFloat(prompt("Digite o salário fixo: "));
let quantidadeCarros = parseFloat(prompt("Digite a quantidade de carros"));
let comissaoFixa = parseFloat(prompt("Digite o valor da comissão"));

let valorTotalCarros = quantidadeCarros * comissaoFixa;
let totalDeVendas = 0.05 * salarioFixo;
let lucroTotal = salarioFixo + valorTotalCarros + totalDeVendas;
alert("O salário total foi de: " + lucroTotal);