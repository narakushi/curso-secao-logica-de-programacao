//let tem escopo de bloco { bloco }
//var tem escopo de função

let nome = 'luiz';
var nome2 = 'luiz';

if(true){
    let nome = 'kaio';

    if(true){
        var nome2 = 'ester';
        let nome = 'silvia'; 
    }
}


function falaOi(){
    if(true){
        let nome = 'kaio';
        var sobrenome = 'giulian';
    }
    console.log(sobrenome);
}
falaOi();