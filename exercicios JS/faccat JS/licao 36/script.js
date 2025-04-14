alert("Idade dos homens e mulheres");
let homem1 = parseInt(prompt("Digite a idade do primeiro homem: "));
let homem2 = parseInt(prompt("Digite a idade do segundo homem (diferente do primeiro): "));
let mulher1 = parseInt(prompt("Digite a idade da primeira mulher: "));
let mulher2 = parseInt(prompt("Digite a idade da segunda mulher (diferente da primeira): "));

if (homem1 === homem2 || mulher1 === mulher2) {
    alert("As idades devem ser diferentes entre si.");
} else {
    let homemMaisVelho = Math.max(homem1, homem2);
    let homemMaisNovo = Math.min(homem1, homem2);

    let mulherMaisNova = Math.min(mulher1, mulher2);

    let soma = homemMaisVelho + mulherMaisNova;
    let soma2 = homemMaisNovo * mulherMaisVelha;

    alert("Soma do homem mais velho com a mulher mais nova: " + soma);
    alert("Soma do homem mais novo com a mulher mais velha: " + soma2);
}
