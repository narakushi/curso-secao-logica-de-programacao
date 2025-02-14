/** utilização do try catch */
/*try {
  console.log(naoExisto);
} catch(err) {
  console.log('nãoExisto não existe.');
  console.log(err);
}*/


/** lançando nossos próprios erros */

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new TypeError('X e y precisam ser números');
  }

  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma('1', 2));
}
catch(error){
  console.log(error);
  console.log('Alguma coisa mais amigável')
}
