let codigo = prompt("Digite o número do empregado (código):");
let anoNascimento = parseInt(prompt("Digite o ano de nascimento do empregado:"));
let anoIngresso = parseInt(prompt("Digite o ano de ingresso na empresa:"));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;
let tempoTrabalho = anoAtual - anoIngresso;
let podeAposentar = false;

if (idade >= 65 || tempoTrabalho >= 30 || (idade >= 60 && tempoTrabalho >= 25)) {
    podeAposentar = true;
}

alert("Código do empregado: " + codigo +
      "Idade: " + idade +
      "Tempo de trabalho: " + tempoTrabalho +
      "Situação: " + (podeAposentar ? "Requerer aposentadoria" : "Não requerer"));
