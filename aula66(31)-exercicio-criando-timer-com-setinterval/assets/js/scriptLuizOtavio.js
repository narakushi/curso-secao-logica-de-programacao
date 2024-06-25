/**Neste exemplo o tempo é pego através da função toLocaleTimeString do Date() e o 
 * que pegamos é a partir da data 0 que consiste na data de criação do javascript */

function relogio (){
    const getTimeFromSeconds = (segundos) => {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-bR', { hour12: false, timeZone: "GMT" }); //timeZone: 'UTC' (tbm é valido)
    }
    
    console.log(getTimeFromSeconds(10))
    
    const relogio = document.querySelector(".time");
    let segundos = 0;
    let timer;
    
    
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000)
    }
    
    document.addEventListener('click', function (e) {
        const el = e.target;
    
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
    
        else if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
    
        else if (el.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = "00:00:00";
            segundos = 0;
        }
    })
}

relogio();


