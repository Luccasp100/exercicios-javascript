alert("salário funcionario 40 horas");
let tempoTrabalho = parseInt(prompt("Digite o tempo de trabalho: "));
let salario = parseInt(prompt("Digite o valor do salário: "));
let horaExtra = 0.50;
if (tempoTrabalho >= 40) {
    let total = (salario * horaExtra) + salario;
    alert(`Parabéns, você recebeu ${total} por causa do bonus!!`);
} else {
 alert(`Infelizmente você não cumpriu a meta semanal, logo seu salário é apenas ${salario}`);
}