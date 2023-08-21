function verificaDia(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
    }
}

function verificaMes(mesNumero) {
    let mesNome;

    switch (mesNumero) {
        case 0:
            mesNome = 'janeiro';
            return mesNome;
        case 1:
            mesNome = 'fevereiro';
            return mesNome;
        case 2:
            mesNome = 'março';
            return mesNome;
        case 3:
            mesNome = 'abril';
            return mesNome;
        case 4:
            mesNome = 'maio';
            return mesNome;
        case 5:
            mesNome = 'junho';
            return mesNome;
        case 6:
            mesNome = 'julho';
            return mesNome;
        case 7:
            mesNome = 'agosto';
            return mesNome;
        case 8:
            mesNome = 'setembro';
            return mesNome;
        case 9:
            mesNome = 'outubro';
            return mesNome;
        case 10:
            mesNome = 'novembro';
            return mesNome;
        case 11:
            mesNome = 'dezembro';
            return mesNome;
        default:
            mesNome = '';
    }
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