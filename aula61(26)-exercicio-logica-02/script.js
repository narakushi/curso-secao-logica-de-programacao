/**Escreva uma função chamada ePaisagem que recebe dois argumentos,
 * largura e altura de uma imagem (number)
 * retorne true se a imagem estiver no modo
 * paisagem */

const ePaisagem = (width, height) => (width > height ? true : false);

if (ePaisagem(25, 90)) {
  console.log("Imagem está em modo paisagem");
} else {
  console.log("A imagem não está em modo paisagem");
}
