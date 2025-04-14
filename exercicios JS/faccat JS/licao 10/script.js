alert("Calcular a taxa do preço do carro");
let carroNovo = parseFloat(prompt("Digite o valor do carro: "));
let custoDeFabrica = 0.45 * carroNovo; 
let custoDoDistribuidor = 0.28 * carroNovo;
let custoTotal = carroNovo + custoDeFabrica + custoDoDistribuidor;
alert("O custo final do carro ficou em: " + custoTotal);
