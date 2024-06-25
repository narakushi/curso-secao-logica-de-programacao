const timer = document.getElementById("time");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let seg = 0;
let min = 0;
let hour = 0;


const verifyTime = (time) => {
    return time < 10 ? "0" + time : time;
};

iniciar.addEventListener("click", function (event) {
    setInterval(() => {
        if (seg < 59) {
            seg++;
            timer.innerHTML = `${verifyTime(hour)}:${verifyTime(min)}:${verifyTime(
                seg
            )}`;
        }
        else if ((seg === 59) && (min < 59)) {
            seg = 0;
            min++;
            timer.innerHTML = `${verifyTime(hour)}:${verifyTime(min)}:${verifyTime(
                seg
            )}`;
        }
        else if(min === 59){
            seg = 0;
            min = 0;
            hour++;
            timer.innerHTML = `${verifyTime(hour)}:${verifyTime(min)}:${verifyTime(seg)}`;
        }

    }, 1000);
});

pausar.addEventListener("click", function (event) {
    
});

zerar.addEventListener("click", function (event) {
    alert("zerar clicado");
});
