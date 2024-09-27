
//[Questão extra]: Elabore um programa que solicite ao usuário um número inteiro positivo e exiba uma contagem regressiva de 10 até esse número 
//(em decrementos de 1)
//Caso o valor digitado seja menor que 10, exiba uma mensagem de erro.


var numero = parseInt(prompt("infome um numero"))

if(numero> 0){
   console.log("Positivo")
}
else if ( numero < 10){
}
else{
    console.log("Zero)")
}