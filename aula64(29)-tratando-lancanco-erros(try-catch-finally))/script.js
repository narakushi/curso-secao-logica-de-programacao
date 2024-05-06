try{
    //executada quando não há erros
    console.log('abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro'); //se der erro aquii, cai para o tratamento de erros, tipo s quando se abre um arquiivo mas n se fecha ele
    console.log('Fechei o arquivo');

    try{
        console.log(b);
    }catch(e){
        console.log('deu erro')
    } finally {
        console.log('Tambem sou finally');
    }
} catch(e){
    // É execuada quando há erros
    console.log('Tratando o erro');
} finally {
    // Sempre executado
    console.log('FINALLY: eu sempre sou executado');
}