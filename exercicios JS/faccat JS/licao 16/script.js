alert("calculadora de comprar maçãs");
let quantidadeMacas = parseInt(prompt("Digite quantas maçãs foram compradas"));
if (quantidadeMacas < 12) {
    let totalMacasMenosDuzia = quantidadeMacas * 1.30
    alert("O valor total de maçãs é de : " + totalMacasMenosDuzia)
} else {
    let totalMacasMaisDuzia = quantidadeMacas * 1.0
    alert("O valor total de maçãs é de : " + totalMacasMaisDuzia)
}