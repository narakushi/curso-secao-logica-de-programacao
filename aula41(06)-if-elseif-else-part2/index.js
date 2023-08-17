const num = 8;

//verificando intervalos 

// if((num >= 0) && (num <= 5)){
//     console.log('O número está entre 0 e 5.');
// } else{
//     console.log('O número NÃO está entre 0 e 5.');
// }

if (num < 10) {
    console.log('O numero é menor que 10.');
}

if ((num >= 0) && (num <= 5)) {
    console.log('O número está entre 0 e 5.');
}
else if ((num >= 6) && (num <= 8)) {
    console.log('O número está entre 6 e 8.');
}
else if ((num >= 9) && (num <= 11)) {
    console.log('O número está entre 9 e 11.');
}
else {
    console.log('O número NÃO está entre 9 e 11.');
}

console.log('...Resto do codigo');


if (condicao1) {
    //bloco de código para executar caso a condicao1 seja verdadeira.
}
else if (condicao2) {
    //bloco de código para executar se a condicao1 for falsa e a condicao2 for verdadeira.
}

