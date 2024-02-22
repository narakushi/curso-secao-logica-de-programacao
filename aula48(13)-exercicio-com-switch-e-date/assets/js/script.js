function verificaDia(diaSemana) {
    let diaSemanaTexto;

    const dias = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo'];

    return dias[diaSemana];
}

function verificaMes(mesNumero) {
    let mesNome;
    const meses = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return meses[mesNumero];
}

function addZero(num){
    return num > 9 ? num : `0${num}`;
}

function geraData() {
    let data = new Date();
    let dia = data.getDay();
    let diaSemanaTexto = verificaDia(dia);
    let diaNumero = data.getDate();
    let mes = data.getMonth();
    let nomeMes = verificaMes(mes);
    let ano = data.getFullYear();
    let hora = addZero(data.getHours());
    let min = addZero(data.getMinutes());

    document.getElementById('mostra-data').innerHTML = `${diaSemanaTexto}, ${diaNumero} de ${nomeMes} de ${ano} - ${hora}:${min}`;
}

geraData();

//2ª forma de resolver
// const h1 = document.querySelector('.container h1');
// const data = new Date();

// h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'}); //havia toLocaleDataString();