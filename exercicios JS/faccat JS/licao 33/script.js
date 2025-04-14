alert("dois valores, três mensagens");
let numero1 = parseInt(prompt("Digite um valor: "));
let numero2 = parseInt(prompt("Digite um valor: "));

if(numero1 > numero2){
    alert("O primeiro número é maior");
} else if(numero2 > numero1){
    alert("O segundo número é maior");
}else{
    alert("Os números são iguais");
}