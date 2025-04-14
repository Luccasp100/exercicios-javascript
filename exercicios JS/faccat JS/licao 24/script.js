alert("Calcular salário vendas");
let salario = parseFloat(prompt("Digite o valor do salário: "));
let comissao;
let limite = 1500;
if (salario >= 1500) {
    comissao = (0.08 * salario) + 1500;
    alert("Você conseguiu a comissão! seu salario é de " + comissao)
} else {
    comissao = 0.03 * salario
    alert("Você não alcançou os R$1500, logo seu salário foi de " + comissao)
}