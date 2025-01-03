/*const nome = ['Ana', 'Luana', 'Kaique'];


//Maneiras de iterar sobre um array com for's


/*for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}*/

/*
for (let i in nome) {
    console.log(nome[i]);
}*/

/*
for(let valor of nome) {
    console.log(valor);
}

// uso do ForEach

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
})
*/

/** Então
 * For clássico - Geralmente com iteráveis (array ou strings)
 * For in - Retorna o índice ou chave (string, array ou objetos)
 * For of - Retorna o valor em si (iteráveis, arrays ou strings)
 */

const pessoa = {
    nome: 'Kaio',
    sobrenome: 'Lincon'
}

for (let valor of pessoa) {
    console.log(pessoa);
}
