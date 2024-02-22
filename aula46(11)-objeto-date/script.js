// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0+tresHoras) timestamp unix da epóca de criação da linguagem;

// const data = new Date();
// console.log(data.toString());
// console.log(Date.now());

//criando uma função para formatar a data

function addZero(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = addZero(data.getDate());
    const mes = addZero(data.getMonth());
    const ano = addZero(data.getFullYear());
    const hora = addZero(data.getHours());
    const min = addZero(data.getMinutes());
    const seg = addZero(data.getSeconds());
    const ms = addZero(data.getMilliseconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}:${ms}`;
}


const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);