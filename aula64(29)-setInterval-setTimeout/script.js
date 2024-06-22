function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", { hour12: false });
}

// mostra a hora a cada segundo
const timer = setInterval(() => {
    console.log(mostraHora());
}, 1000);


// para a excução do setInterval após 5 segundos
setTimeout(function() {
    clearInterval(timer)
}, 3000);


setTimeout(() => {
    console.log('Olá, mundo!');
}, 5000);