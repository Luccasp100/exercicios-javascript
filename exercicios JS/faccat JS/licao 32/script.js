alert("ganhador da partida");
let time1 = prompt("Digite o nome do primeiro time: ");
let time1Gols = parseInt(prompt("quantos gols fizeram?: "));
let time2 = prompt("Digite o nome do segundo time: ");
let time2Gols = parseInt(prompt("quantos gols fizeram?: "));
let total
if (time1Gols > time2Gols){
    alert("O time " + time1 + " Ganhou a partida com " + time1Gols + " gols!!")
} else if (time2Gols > time1Gols){
    alert("O time " + time2 + " Ganhou a partida com " + time2Gols + " gols!!")
} else {
    alert("infelizmente a partida deu empate")
}
