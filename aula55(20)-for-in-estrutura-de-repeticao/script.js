// for in -> lê índices ou chaves do objeto

/*
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let indice in frutas) {
    console.log(frutas[indice]);
}
*/

/*
for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}*/


const pessoa = {
    nome: 'Anais',
    sobrenome: 'Jhonson',
    idade: 34
}

// formas de acessar o valor de uma chave em um objeto
//console.log(pessoa.nome);
//console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}