const pessoa = {
    nome: 'João',
    idade: 30, 
    endereco:{
        rua: 'Dadinho',
        numero: 12
    }
};

const { idade } = pessoa; //desestruturando por meio da atribuição

console.log(idade);

const {nome='flavio', endereco:{rua:r, numero}} = pessoa;

console.log(nome, r, numero);


