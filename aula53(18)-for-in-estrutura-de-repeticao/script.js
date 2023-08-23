const pessoa = {
    nome: 'Taina',
    sobrenome: 'Jilnin',
    idade: 23
};

//formas de acessar um objeto

//console.log(pessoa['nome']);

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}