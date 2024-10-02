// Questão 15: Implemente um loop do while que percorra um array e exiba seus 
//elementos, mas deve parar se encontrar o valor "parar"

const arr = ["iniciar"," processar","parar","finaliza"];
let i = 0;
do {
    console.log(arr[i]);
    i++;
} while(arr[i] !=="Parar")