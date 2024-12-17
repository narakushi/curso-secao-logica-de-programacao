/** executando tratamento de erros com bloco finally que sempre será executato e identando trys catch */
/*
try {
  // É executado quando não há erros
  // console.log(a);
  console.log('Abri um arquivo');
  console.log('Manipulei o arquivo e gerou erro');
  console.log('Fechei o arquivo');

  try {
    console.log(b);
  }catch(e) {
    console.log('Erro interno');
  } finally {
    console.log('Também sou FINALLY')
  }

} catch(e) {
  // É executado quando há erros
  console.log('Trantando o erro');
} finally {
  // Sempre é excutado
  console.log('FINALLY: Eu sempre sou executado');
}*/

function retornaHora(data) {
  if(data && !(data instanceof Date)){
    throw new TypeError('Esperando intância de Date.');
  }

  if(!data){
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

try {
  const data = new Date('01-01-1970 12:58:12')
  const hora = retornaHora();
  console.log(hora);  
}catch(e){
  // Tratar erro
  console.log(e);
} finally {
  console.log('Tenha um bom dia')
}
