function geraTexto(){
    let listaImc = ['Abaixo de 18,5', 'Entre 18,6 e 24,9', 'Entre 25,0 e 29,9', 'Entre 30,0 e 34,9', 'Entre 35,0 e 39,9', 'Acima de 40'];

    let listaResultado = ['Abaixo do Peso', 'Peso Ideal (parabéns)', 'Levemente Acima do Peso', 'Obesidade Grau I', 'Obesidade Grau II (severa)', 'Obesidade Grau III (mórbida)'];

    let containerImc = document.querySelector('.imc');

    let containerResultado = document.querySelector('.resultado'); 

    for(let i = 0; i < listaImc.length; i++){
        containerImc.innerHTML += `<p>${listaImc[i]}</p>`;
        containerResultado.innerHTML += `<p>${listaResultado[i]}</p>`
    }
}

function limpar(){
    let altura = document.getElementById('altura').value = '';
    let peso = document.getElementById('peso').value = '';
}

function calculaImc(altura, peso){
    let imc = peso / (altura * altura);
    console.log(imc);
    return imc;
}

function enviarDados(event){
    event.preventDefault();
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let imc;
    let msg = document.querySelector('.mensagem');
    altura = Number(altura);
    peso = Number(peso);

    imc = calculaImc(altura, peso);
    limpar();

    msg.innerHTML = `Seu IMC é de: ${imc.toFixed(2)}`;
    msg.style.background = '#1c0029';

    if((imc >= 1) && (imc <= 18.5)){
        msg.innerHTML += `<br>Você está abaixo do peso!`;
    }
    else if((imc >= 18.6) && (imc <= 24.99)){
        msg.innerHTML += `<br>Você está no peso ideal! Parabéns!`;
    }
    else if((imc >= 25) && (imc <= 29.99)){
        msg.innerHTML += `<br>Você está levemente acima do peso!`;
    }
    else if((imc >= 30) && (imc <= 34.99)){
        msg.innerHTML += `<br>Você está com Obesidade de grau I!`;
    }
    else if((imc >= 35) && (imc <= 39.99)){
        msg.innerHTML += `<br>Você está com Obesidade de grau II (severa)!`;
    }
    else if((imc >= 40)){
        msg.innerHTML += `<br>Você está com Obesidade de grau III (mórbida)!`;
    }
    else{
        msg.innerHTML = `IMC inválido!`;
        msg.style.background = 'rgba(107, 8, 8, 0.557)';
    }

  
}


geraTexto();