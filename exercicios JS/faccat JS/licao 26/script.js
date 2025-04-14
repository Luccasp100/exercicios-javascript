alert("Produtos em estoque");
let quantidadeAtual = parseInt(prompt("Digite a quantidade atual no estoque: "));
let quantidadeMaxima = parseInt(prompt("Digite a quantidade maxima do estoque: "));
let quantidadeMinima = parseInt(prompt("Digite a quantidade minima do estoque: "));
let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

if (quantidadeAtual <= quantidadeMedia) {
    alert("Precisa comprar novos produtos para o estoque");
} else {
    alert("Não precisa comprar novos produtos para o estoque");
}