// atribuição via desestruturação
/*
let a = 'A';//B
let b = 'B';//C
let c = 'C';//A

const letras = [b, c, a];

[a, b, c] = letras; // como as variáveis já existem, elas estão recebendo
// uma reatribuição

console.log(a, b, c);*/
/*
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, , cinco, , sete] = numeros;

console.log(um, tres, cinco);*/
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//primeira forma de acessar numeros
// console.log(numeros[1][2])

// segunda forma
// const [, [, , seis]] = numeros;
//console.log(seis);

// terceira forma

const [lista1, lista2, lista3] = numeros;
console.log(lista2[2])