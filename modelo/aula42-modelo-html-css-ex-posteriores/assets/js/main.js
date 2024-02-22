function mostraTexto() {
    let container = document.querySelector('.ind-clas');
    let indicadores = ['Abaixo de 18,5', 'Entre 18,6 e 24,9', 'Entre 25,0 e 29,9', 'Entre 30,0 e 34,9', 'Entre 35,0 e 39,9', 'Acima de 40'];
    let classificacao = ['Abaixo do Peso', 'Peso Ideal (parabéns)', 'Levemente Acima do Peso', 'Obesidade Grau I', 'Obesidade Grau II (severa)', 'Obesidade Grau III (mórbida)'];
    

    for (let i = 0; i < indicadores.length; i++) {
        container.querySelector("#indicadores").innerHTML += `<p>${indicadores[i]}</p>`;
        container.querySelector('#classificadores').innerHTML += `<p>${classificacao[i]}</p>`
    }

   
}

function calculaImc(peso, altura){
    let imc = peso / altura ** 2;
    return imc;
}

function enviarDados(event) {
    event.preventDefault();
    let peso = document.querySelector('#peso').value;
    let altura = document.querySelector('#altura').value;
    let msg = document.querySelector('#mensagem');


    peso = Number(peso);
    altura = Number(altura);

    let imc = calculaImc(peso, altura);
    
    msg.innerHTML = `Seu imc é de ${imc.toFixed(2)}`;

    if(imc <= 18.5){
        msg.innerHTML += `<br>Você está Abaixo do peso`;
    }
    else if(imc <= 24.9){
        msg.innerHTML += `<br>Você está no Peso Ideal (Parabens!)`;
    }
    else if(imc <= 29.9){
        msg.innerHTML += `<br>Você está Levemente Acima do Peso`;
    }
    else if(imc <= 34.9){
        msg.innerHTML += `<br>Você está em Obesidade Grau I`;
    }
    else if(imc <= 39.9){
        msg.innerHTML += `<br>Você está em Obesidade Grau II (Severa)`;
    }
    else if(imc >= 40){
        msg.innerHTML += `<br>Você está em Obesidade Grau III (Mórbida)`
    }
    

}


mostraTexto();