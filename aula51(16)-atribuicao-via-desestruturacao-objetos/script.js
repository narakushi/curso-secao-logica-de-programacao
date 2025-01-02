const pessoa = {
    nome: 'Tania',
    sobrenome: 'Karlin',
    idade: '32',
    endereco: {
        rua: 'Av. Brasil',
        numero: 123
    }
};


// atribuição via desestruturação
//const { nome = '', sobrenome } = pessoa;

//console.log(nome, sobrenome);

/*
// renomeando a variável extraída
const { nome: n, sobrenome } = pessoa;

console.log(n, sobrenome);

// desestruturando objeto de dentro de outro objeto

const {endereco: {rua: r=504, numero}, endereco} = pessoa;

console.log(r, numero, endereco)
*/

// pegando o resto do objeto

const { nome, sobrenome, ...resto} = pessoa;

console.log(nome, resto);