const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//continue - continua para a proxima iteração do laço
//break - sai do laço

let i = 0;
do {
  let numero = numeros[i];

  i++;

  if (numero === 2) {
    console.log("pulei o numero 2");
    continue;
  }

  console.log(numero);

  if (numero === 7) {
    console.log("numero 7 encontrado, saindo");
    break;
  }

}while (i < numeros.length);
