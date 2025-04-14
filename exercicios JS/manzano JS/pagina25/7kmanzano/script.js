let cotacao_dolar;
let quantidade_reais;
let valor_em_dolares;
cotacao_dolar = parseFloat(prompt("Digite a cotação do dólar (valor em reais):"));
quantidade_reais = parseFloat(prompt("Digite a quantidade de reais:"));
valor_em_dolares = quantidade_reais / cotacao_dolar;
alert("O valor em dólares é: US$ " + valor_em_dolares.toFixed(2));
