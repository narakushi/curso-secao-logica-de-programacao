const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const estiloBg = estilosBody.backgroundColor;
console.log(estiloBg);

for (let p of ps) {
    p.style.background = estiloBg;
}
