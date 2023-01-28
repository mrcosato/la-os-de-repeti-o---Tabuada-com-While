var readline = require('readline-sync');
//arnazebanebti ba varuavek de bine b
//var n = parseInt(readlineSync.question('1 valor: '));
console.log("programa que exibe a tabuada de um numero");
var n = parseInt(readlineSync.question("Informe um numero: "));
console.log("Tabuada do numero " + n);
var i = 0;
while ( i <=10 ){
    console.log(n+ " x " +  i + "="+(n*i));
    i = i + 1;
}
/*
console.log(n+ " x 1 = " + (n*1));
console.log(n+ " x 2 = " + (n*2));
console.log(n+ " x 3 = " + (n*3));
console.log(n+ " x 4 = " + (n*4));
console.log(n+ " x 5 = " + (n*5));
console.log(n+ " x 6 = " + (n*6));
console.log(n+ " x 7 = " + (n*7));
console.log(n+ " x 8 = " + (n*8));
console.log(n+ " x 9 = " + (n*9));
console.log(n+ " x 10 = " + (n*10));
var n = 0;
*/

// exercicio calcule a media de n valores
/*
var readlineSync = require('readline-sync');
console.log('Programa que calcula a média de n valores');
var n = parseInt(readlineSync.question("Informe quantos valores seráo para média"));
var i =0;
while ( i <= 100); {
    console.log( valori  + /n + '=');
} */
