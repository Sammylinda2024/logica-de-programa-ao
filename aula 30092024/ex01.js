/**Se quisermos acrescentar um novo elemento nesse array (por
exemplo, o número 10), tudo que precisamos fazer é escrever a
última posição livre do array e atribuir um valor:
 */

let numeros = [0,1,2,3,4,5,6,7,8,9,];
numeros[numeros.length] = 10;

console.log(numeros);