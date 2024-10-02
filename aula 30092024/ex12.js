/**Exemplo de Implementação de
Matrizes (Arrays de Arrays)
 */

// Definindo uma matriz 2x3 (2 linhas e 3 colunas)

let matriz = [
 [1,2,3,],
 [4,5,6,]
];

// Acessando um elemento específico
console.log(matriz[0][1]); 

// Modificando um elemento específico
matriz[1][2] = 10;
console.log(matriz[1][2]);

// Iterando sobre os elementos de uma matriz 
for (let i = 0; i < matriz.length; i ++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log('Elemento na posiçao [${i}{${j}] = ${matriz[i][j]}');
    }
}