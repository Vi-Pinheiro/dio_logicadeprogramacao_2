// 2º Desafio de Código - DIO

//Função
function getRank(playerVictories, playerDefeats){
    return playerVictories - playerDefeats;
}

// Variável
let rankPlayer = getRank(150, 125);
let nivelHeroi = "" 

//Condicional
if(getRank >= 10){
    nivelHeroi = "ferro"

} else if (rankPlayer >= 11 && rankPlayer <= 20){
    nivelHeroi = "bronze"

} else if (rankPlayer >= 21 && rankPlayer <= 50){
    nivelHeroi = "prata"

} else if (rankPlayer >= 51 && rankPlayer <= 80){
    nivelHeroi = "ouro"

} else if (rankPlayer >= 81 && rankPlayer <= 90){
    nivelHeroi = "diamante"

} else if (rankPlayer >= 91 && rankPlayer <= 100){
    nivelHeroi = "lendario"

} else {
    nivelHeroi = "imortal"
}

//Saída
console.log("O herói tem o saldo de vitórias " + rankPlayer + " e está no rank de " + nivelHeroi + ".")
