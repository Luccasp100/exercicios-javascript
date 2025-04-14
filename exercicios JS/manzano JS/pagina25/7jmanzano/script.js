let cotacao_dolar;
let quantidade_dolares;
let valor_em_reais;
cotacao_dolar = parseFloat(prompt("Digite a cotação do dólar (valor em reais):"));
quantidade_dolares = parseFloat(prompt("Digite a quantidade de dólares:"));
valor_em_reais = cotacao_dolar * quantidade_dolares;
alert("O valor em reais é: R$ " + valor_em_reais.toFixed(2));
