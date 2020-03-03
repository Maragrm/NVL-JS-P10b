var numero_aleatorio;
var array = [];
var numero = 50;

for(var i = 0; i < numero; i++){
    numero_aleatorio = Math.floor(Math.random() * 100 + 1);
    array[i] = numero_aleatorio;
    console.log("vamos por el numero: ", + i);
}

var pares = [];
var impares = []; 

for(var j = 0; i < array.length; j++){
    if(array[j] % 2 === 0){
        pares.push(array[j]);
    } else {
        impares.push(array[j]);
    }
}

console.log("array: " + array);
console.log("pares: " + pares);
console.log("impares: " + impares);
