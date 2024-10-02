//Questão 14: Utilize um loop do while que continue pedindo ao usuário para 
//digitar "sim" até que ele digite algo diferente.

let resposta;
do {
    resposta = prompt("Digite 'sim' para continuar:");
} while (resposta.toLowerCase()!== "sim");